package ssoaks.ssoak.api.auction.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.eclipse.jdt.internal.compiler.ast.Expression;
import ssoaks.ssoak.api.auction.dto.response.ItemOverviewDto;
import ssoaks.ssoak.api.auction.dto.response.QItemOverviewDto;
import ssoaks.ssoak.api.auction.entity.Item;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.List;

import static ssoaks.ssoak.api.auction.entity.QBidding.bidding;
import static ssoaks.ssoak.api.auction.entity.QItem.item;
import static ssoaks.ssoak.api.member.entity.QMember.member;

public class ItemRepositoryImpl implements ItemRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public ItemRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<ItemOverviewDto> getSellingItemOverviewsByMember(Long memberSeq) {

        List<ItemOverviewDto> list = queryFactory
                .select(new QItemOverviewDto(
                        item.seq,
                        item.title,
                        item.startPrice,
                        item.startTime,
                        item.endTime,
                        item.auctionType,
                        item.isSold,
                        item.biddings.size(),
                        bidding.biddingPrice.max().coalesce(0)
                ))
                .from(item)
                .join(item.member, member)
                .leftJoin(item.biddings, bidding).on(bidding.item.eq(item)).groupBy(item)
                .where(item.member.seq.eq(memberSeq).and(item.endTime.after(LocalDateTime.now()))
                        .and(item.isSold.eq(false)))
                .fetch();

        return list;
    }

    @Override
    public List<ItemOverviewDto> getSoldItemOverviewsByMember(Long memberSeq) {

        List<ItemOverviewDto> list = queryFactory
                .select(new QItemOverviewDto(
                        item.seq,
                        item.title,
                        item.startPrice,
                        item.startTime,
                        item.endTime,
                        item.auctionType,
                        item.isSold,
                        item.biddings.size(),
                        bidding.biddingPrice.max().coalesce(0)
                ))
                .from(item)
                .join(item.member, member)
                .leftJoin(item.biddings, bidding).on(bidding.item.eq(item)).groupBy(item)
                .where(item.member.seq.eq(memberSeq).and(item.endTime.before(LocalDateTime.now()))
                        .and(item.isSold.eq(true)))
                .fetch();

        return list;
    }

    @Override
    public List<ItemOverviewDto> getUnsoldItemOverviewsByMember(Long memberSeq) {

        List<ItemOverviewDto> list = queryFactory
                .select(new QItemOverviewDto(
                        item.seq,
                        item.title,
                        item.startPrice,
                        item.startTime,
                        item.endTime,
                        item.auctionType,
                        item.isSold,
                        item.biddings.size().coalesce(0),
                        bidding.biddingPrice.max().coalesce(0)
                ))
                .from(item)
                .join(item.member, member)
                .leftJoin(item.biddings, bidding).on(bidding.item.eq(item)).groupBy(item)
                .where(item.member.seq.eq(memberSeq).and(item.endTime.before(LocalDateTime.now()))
                        .and(item.isSold.eq(false)))
                .fetch();

        return list;
    }

    @Override
    public List<Item> getSoldItemsByMember(Long memberSeq) {

        List<Item> list = queryFactory
                .select(item)
                .from(item)
                .where(item.member.seq.eq(memberSeq).and(item.isSold.eq(true)))
                .fetch();

        return list;
    }

    @Override
    public  List<ItemOverviewDto> getBoughtItemOverviewsByMember(Long memberSeq) {

        List<ItemOverviewDto> list = queryFactory
                .select(new QItemOverviewDto(
                        item.seq,
                        item.title,
                        item.startPrice,
                        item.startTime,
                        item.endTime,
                        item.auctionType,
                        item.isSold,
                        item.biddings.size().coalesce(0),
                        bidding.biddingPrice.max().coalesce(0)      // 이쪽 쿼리문이 아직 잘 이해가 안간다...
                ))
                .from(item)
                .leftJoin(item.biddings, bidding).groupBy(item)
                .where(bidding.buyer.seq.eq(memberSeq).and(bidding.isHammered.eq(true)))
                .fetch();

        return list;
    }
}
