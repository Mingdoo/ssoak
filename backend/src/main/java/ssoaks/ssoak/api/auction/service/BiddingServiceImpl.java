package ssoaks.ssoak.api.auction.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.jni.Local;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssoaks.ssoak.api.auction.dto.request.FinishBiddingDto;
import ssoaks.ssoak.api.auction.dto.request.ReqBiddingRegisterDto;
import ssoaks.ssoak.api.auction.dto.response.BiddingSimpleInfoDto;
import ssoaks.ssoak.api.auction.entity.Bidding;
import ssoaks.ssoak.api.auction.entity.Item;

import ssoaks.ssoak.api.auction.exception.FailBiddingException;
import ssoaks.ssoak.api.auction.exception.NotAllowedBiddingItemException;
import ssoaks.ssoak.api.auction.repository.BiddingRepository;
import ssoaks.ssoak.api.auction.repository.ItemRepository;
import ssoaks.ssoak.api.member.dto.response.MemberSimpleInfoDto;
import ssoaks.ssoak.api.member.entity.Member;
import ssoaks.ssoak.api.member.service.MemberService;
import ssoaks.ssoak.common.dto.FirebaseItemDto;
import ssoaks.ssoak.common.util.FirebaseUtil;

import java.time.LocalDateTime;
import java.util.List;



@Slf4j
@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class BiddingServiceImpl implements BiddingService {

    private final MemberService memberService;

    private final BiddingRepository biddingRepository;

    private final ItemRepository itemRepository;

    private final FirebaseUtil firebaseUtil;

    @Transactional
    @Override
    public BiddingSimpleInfoDto createBidding(Long itemSeq, ReqBiddingRegisterDto biddingDto) {
        log.debug("createBidding - {}", biddingDto);
        Member member = memberService.getMemberByAuthentication();

        Item item = itemRepository.findBySeq(itemSeq)
                .orElseThrow(()-> new IllegalArgumentException("존재하지 않는 물품입니다."));

        if (item.getMember().equals(member)) {
            throw new NotAllowedBiddingItemException("본인 물품은 입찰할 수 없습니다.");
            // 종료시간이 현재보다 앞이면 이미 종료되었으므로 안됨
        } else if (item.getEndTime().isBefore(LocalDateTime.now()) | item.getIsSold().equals(true)) {
            throw new NotAllowedBiddingItemException("이미 종료된 경매입니다.");
        }

        if (item.getBuyer() != null) {
            if (item.getBuyer().equals(member)) {
                throw new NotAllowedBiddingItemException("직전에 입찰한 경매입니다.");
            } else if (item.getBiddingPrice() >= biddingDto.getBiddingPrice()) {
                throw new NotAllowedBiddingItemException("금액이 직전 입찰 금액보다 작습니다.");
            }
        } else if (biddingDto.getBiddingPrice() < item.getStartPrice()) {
            throw new NotAllowedBiddingItemException("입찰 금액이 시초가보다 작습니다.");
        } else if (item.getStartTime().isAfter(LocalDateTime.now())) {
            throw new NotAllowedBiddingItemException("아직 경매 시작 전입니다");
        }

        Bidding bidding = Bidding.builder()
                .biddingPrice(biddingDto.getBiddingPrice())
                .isHammered(false)
                .item(item)
                .buyer(member)
                .build();
        biddingRepository.save(bidding);

        item.updateBiddingItem(biddingDto.getBiddingPrice(),member);

        MemberSimpleInfoDto memberSimpleInfoDto = MemberSimpleInfoDto.builder()
                .seq(member.getSeq())
                .nickname(member.getNickname())
                .profileImageUrl(member.getProfileImageUrl())
                .build();

        return BiddingSimpleInfoDto.builder()
                .biddingPrice(bidding.getBiddingPrice())
                .biddingDate(bidding.getCreatedDate())
                .biddingCount(item.getBiddingCount())
                .buyer(memberSimpleInfoDto)
                .build();
    }

    @Transactional
    @Override
    public BiddingSimpleInfoDto successBidding(Long itemSeq, ReqBiddingRegisterDto successBiddingDto) {
        log.debug("successBidding - {}", successBiddingDto);
        Member member = memberService.getMemberByAuthentication();

        Item item = itemRepository.findBySeq(itemSeq)
                .orElseThrow(()-> new IllegalArgumentException("존재하지 않는 물품입니다."));

        LocalDateTime successTime = null;
        if (item.getEndTime().isAfter(LocalDateTime.now())) {
            if (!item.getMember().equals(member)) {
                throw new FailBiddingException("경매 종료전 낙찰은 본인만 가능합니다.");
            }
            successTime = LocalDateTime.now();
        } else {
            successTime = item.getEndTime();
        }

        Bidding bidding = biddingRepository.findTop1ByItemSeqOrderBySeqDesc(itemSeq).orElse(null);

        if (item.getBiddingCount() == 0) {
            throw new FailBiddingException("입찰되지 않고 경매가 종료되었습다.");
        }

        bidding.successBidding(successBiddingDto.getIsHammered());
        item.successBiddingItem(successTime, successBiddingDto.getIsHammered(), bidding.getBuyer());

        // 낙찰 후 grade 상승
        item.getBuyer().updateReview(5f);
        item.getMember().updateReview(5f);

        MemberSimpleInfoDto memberSimpleInfoDto = MemberSimpleInfoDto.builder()
                .seq(bidding.getBuyer().getSeq())
                .nickname(bidding.getBuyer().getNickname())
                .profileImageUrl(bidding.getBuyer().getProfileImageUrl())
                .build();

        return BiddingSimpleInfoDto.builder()
                .biddingPrice(bidding.getBiddingPrice())
                .biddingDate(bidding.getCreatedDate())
                .biddingCount(item.getBiddingCount())
                .buyer(memberSimpleInfoDto)
                .build();
    }

    @Override
    @Transactional
    @Scheduled(cron = "10 * * * * *")
    public void checkFinishedBidding() throws InterruptedException {
        log.debug("=========BiddingScheduler=========");
        List<FinishBiddingDto> successfulAuction = itemRepository.getSuccessfulAuction();
        for (FinishBiddingDto finishBiddingDto : successfulAuction) {

            Item item = itemRepository.findBySeq(finishBiddingDto.getItemSeq()).orElse(null);
            FirebaseItemDto itemDto = FirebaseItemDto.builder().itemSeq(item.getSeq()).sellerSeq(item.getMember().getSeq())
                    .buyerSeq(item.getBuyer().getSeq()).title(item.getTitle())
                    .sellerImgUrl(item.getMember().getProfileImageUrl())
                    .buyerImgUrl(item.getBuyer().getProfileImageUrl()).build();

            firebaseUtil.createChatroom(itemDto);
            if (item != null){
                item.successBiddingScheduler();
                item.getBuyer().updateReview(5f);
                item.getMember().updateReview(5f);
            }
        }

        List<FinishBiddingDto> failedAuction = itemRepository.getFailedAuction();
        for (FinishBiddingDto finishBiddingDto : failedAuction) {
            Item item = itemRepository.findBySeq(finishBiddingDto.getItemSeq()).orElse(null);
            if (item != null){
                item.failBiddingScheduler();
            }
        }

    }
}