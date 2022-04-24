package ssoaks.ssoak.api.auction.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ssoaks.ssoak.api.auction.enums.AuctionType;
import ssoaks.ssoak.api.auction.enums.TradeType;
import ssoaks.ssoak.api.member.entity.Member;
import ssoaks.ssoak.common.entity.base.BaseModifiedEntity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.*;
import static javax.persistence.FetchType.LAZY;
import static lombok.AccessLevel.*;

@Getter
@ToString
@NoArgsConstructor(access = PROTECTED)
@Table(name = "tb_item")
@Entity
public class Item extends BaseModifiedEntity {

    @Id
    @GeneratedValue
    @Column(name = "item_seq", columnDefinition = "BIGINT UNSIGNED")
    private Long seq;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer startPrice;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer biddingUnit;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime startTime;

    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime endTime;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private AuctionType auctionType;

    @Column(columnDefinition = "TIMESTAMP")
    @Enumerated(EnumType.STRING)
    private TradeType tradeType;

    @Column(columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isSold;

    // 물품을 like한 멤버들
    @OneToMany(mappedBy = "item", cascade = ALL)
    private List<Like> likes = new ArrayList<>();

    // 물품의 카테고리들
    @OneToMany(mappedBy = "item", cascade = ALL)
    private List<ItemCategory> itemCategories = new ArrayList<>();

    // 물품의 사진들
    @OneToMany(mappedBy = "item", cascade = ALL, orphanRemoval = true)  // orphanRemoval: 물품이 삭제될때 사진도 다 삭제 <<-필요한지 논의!
    private List<Image> images = new ArrayList<>();

    // 물품의 입찰 정보들
    @OneToMany(mappedBy = "item")
    private List<Bidding> biddings = new ArrayList<>();

    // 물품의 판매자
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_seq", columnDefinition = "BIGINT UNSIGNED")
    private Member member;
}
