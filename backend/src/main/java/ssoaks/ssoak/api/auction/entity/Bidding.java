package ssoaks.ssoak.api.auction.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ssoaks.ssoak.api.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.CascadeType.ALL;
import static javax.persistence.FetchType.LAZY;
import static lombok.AccessLevel.*;

@Getter
@ToString
@NoArgsConstructor(access = PROTECTED)
@Table(name = "tb_bidding")
@Entity
public class Bidding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bidding_seq", columnDefinition = "BIGINT UNSIGNED")
    private Long seq;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer biddingPrice;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime biddingDate;

    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean isHammered;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "item_seq", columnDefinition = "BIGINT UNSIGNED")
    private Item item;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_seq", columnDefinition = "BIGINT UNSIGNED")
    private Member buyer;


    // Builder


}