package ssoaks.ssoak.api.auction.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ssoaks.ssoak.api.auction.dto.request.ReqItemRegisterDto;
import ssoaks.ssoak.api.auction.dto.response.ResItemDto;
import ssoaks.ssoak.api.auction.service.AuctionService;
import ssoaks.ssoak.api.auction.service.LikeService;
import ssoaks.ssoak.api.member.entity.Member;
import ssoaks.ssoak.api.member.service.MemberService;
import ssoaks.ssoak.common.dto.BaseDataResponseDTO;
import ssoaks.ssoak.common.dto.BaseResponseDTO;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/api/v1/auctions")
public class AuctionController {

    @Autowired
    private MemberService memberService;

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private LikeService likeService;

    // 물품 생성
    @PostMapping
    public ResponseEntity<BaseResponseDTO> registerItem(@Valid @RequestPart(value = "reqItemRegister") ReqItemRegisterDto reqItemRegisterDto, @RequestPart(value = "itemImages") List<MultipartFile> itemImages) { //,

        log.debug("registerItem - {}", reqItemRegisterDto);
        Member member = memberService.getMemberByAuthentication();

        try {
            if (!auctionService.createItem(member, reqItemRegisterDto, itemImages)) {
                return ResponseEntity.status(409).body(new BaseResponseDTO(409, "이미 등록된 물품입니다."));
            }
        } catch (Exception e) {
            return ResponseEntity.status(409).body(new BaseResponseDTO(409, "물품 등록에 실패하였습니다."));
        }
        return ResponseEntity.status(201).body(new BaseResponseDTO(201, "물품 등록 성공"));
    }

    // 물품 상세 조회
    @GetMapping("/{itemSeq}")
    public ResponseEntity<BaseDataResponseDTO> getItem(@PathVariable("itemSeq") Long itemSeq) {

        log.debug("getItem - {}", itemSeq);
        Member member = memberService.getMemberByAuthentication();

        ResItemDto resItemDto = null;
        try {
            resItemDto = auctionService.getItemDetail(2L, itemSeq);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).body(new BaseDataResponseDTO(404, "존재하지 않는 물품입니다.", resItemDto));
        } catch (Exception e) {
            return ResponseEntity.status(409).body(new BaseDataResponseDTO<>(409, "물품 조회에 실패했습니다", resItemDto));
        }

        return ResponseEntity.status(200).body(new BaseDataResponseDTO<>(200, "물품 조회에 성공했습니다.", resItemDto));
    }

    // 물품 좋아요
    @PostMapping("/{itemSeq}/like")
    public ResponseEntity<BaseResponseDTO> like(@PathVariable("itemSeq") Long itemSeq) {

        log.debug("like Item - {}", itemSeq);
        Member member = memberService.getMemberByAuthentication();

        try {
            likeService.like(member, itemSeq);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).body(new BaseResponseDTO(404, "존재하지 않는 물품입니다."));
        } catch (Exception e) {
            return ResponseEntity.status(405).body(new BaseResponseDTO(405, "이미 좋아요한 물품입니다."));
        }
        return ResponseEntity.status(201).body(new BaseResponseDTO(201, "좋아요를 눌렀습니다."));
    }

    // 물품 좋아요 취소
    @DeleteMapping("/{itemSeq}/like")
    public ResponseEntity<BaseResponseDTO> unlike(@PathVariable("itemSeq") Long itemSeq) {

        log.debug("unlike Item - {}", itemSeq);
        Member member = memberService.getMemberByAuthentication();

        try {
            likeService.unLike(member,itemSeq);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(404).body(new BaseResponseDTO(404, "물품을 찾을 수 없습니다."));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new BaseResponseDTO(500, "좋아요 취소에 실패했습니다."));
        }
        return ResponseEntity.status(200).body(new BaseResponseDTO(204, "좋아요를 취소했습니다."));
    }

}