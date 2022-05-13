import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";

type Props = {};

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const TermsOfService = (props: Props) => {
  return (
    <ScrollView>
      <Text style={styles.titleContainer}>제1장 총칙</Text>
      <Text style={styles.titleContainer}>제1조(목적)</Text>
      <Text style={styles.fontContainer}>
        이 약관은 쏙(SSOCK)이 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고
        한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및
        책임사항 등을 규정함을 목적으로 합니다.
      </Text>
      <Text style={styles.titleContainer}>제2조(정의)</Text>
      <Text style={styles.fontContainer}>
        이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
      </Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"이라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는
        자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다. {"\n"}2.
        "이용자"라 함은 " 쏙(SSOCK)"의 사이트에 접속하여 이 약관에 따라 "
        쏙(SSOCK)"이 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을
        말합니다.{"\n"}3. "회원"이라 함은 " 쏙(SSOCK)"과 이용계약을 체결하고
        "이용자" 아이디(ID)를 부여받은 "이용자"로서 " 쏙(SSOCK)"의 정보를
        지속적으로 제공받으며 " 쏙(SSOCK)"이 제공하는 서비스를 지속적으로 이용할
        수 있는 자를 말합니다.{"\n"}4. "비회원"이라 함은 "회원"이 아니면서 "
        쏙(SSOCK)"이 제공하는 서비스를 이용하는 자를 말합니다.{"\n"}5.
        "콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조
        제1항 제1호의 규정에 의한 정보통신망에서 사용되는
        부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서,
        그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는
        처리된 것을 말합니다.{"\n"}6. "아이디(ID)"라 함은 "회원"의 식별과
        서비스이용을 위하여 "회원"이 정하고 " 쏙(SSOCK)"이 승인하는 문자 또는
        숫자의 조합을 말합니다.{"\n"}7. "비밀번호(PASSWORD)"라 함은 "회원"이
        부여받은 "아이디"와 일치되는 "회원"임을 확인하는 것을 말합니다
        제3조(신원정보 등의 제공) “쏙(SSOCK)”의 이용약관은 이용자가 연결화면을
        통하여 볼 수 있도록 할 수 있습니다.
      </Text>
      <Text style={styles.titleContainer}>제4조(약관의 게시 등)</Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 이 약관을 "회원"이 그 전부를 인쇄할 수 있고
        거래과정에서 해당 약관의 내용을 확인할 수 있도록 기술적 조치를 취합니다.
        {"\n"}2. "쏙(SSOCK)"은 "이용자"가 "쏙(SSOCK)"과 이 약관의 내용에 관하여
        질의 및 응답할 수 있도록 기술적 장치를 설치합니다.
      </Text>
      <Text style={styles.titleContainer}>제5조(약관의 개정 등)</Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의
        소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 관련법을 위배하지
        않는 범위에서 이 약관을 개정할 수 있습니다.{"\n"}2. "쏙(SSOCK)"이 약관을
        개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께
        서비스초기화면에 그 적용일자 7일 이전부터 적용일 후 상당한 기간동안
        공지합니다.{"\n"}3. "쏙(SSOCK)"이 약관을 개정할 경우에는 개정약관 공지
        후 개정약관의 적용에 대한 "이용자"의 동의 여부를 확인합니다. "이용자"가
        개정약관의 적용에 동의하지 않는 경우 "쏙(SSOCK)" 또는 "이용자"는 콘텐츠
        이용계약을 해지할 수 있습니다.
      </Text>
      <Text style={styles.titleContainer}>제6조(약관의 해석)</Text>
      <Text style={styles.fontContainer}>
        이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 온라인
        디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률,
        약관의 규제에 관한 법률, 문화체육관광부장관이 정하는 디지털 콘텐츠
        이용자 보호지침, 기타 관계법령 또는 상관례에 따릅니다.{"\n"}
      </Text>
      <Text style={styles.titleContainer}>제2장 회원가입</Text>
      <Text style={styles.titleContainer}>제7조(회원가입)</Text>
      <Text style={styles.fontContainer}>
        1. 회원가입은 "이용자"가 약관의 내용에 대하여 동의를 하고 회원가입신청을
        한 후 "쏙(SSOCK)"이 이러한 신청에 대하여 승낙함으로써 체결됩니다.{"\n"}
        2. 회원가입신청서에는 다음 사항을 기재해야 합니다. 1호 내지 3호의 사항은
        필수사항이며, 그 외의 사항은 선택사항입니다.
        {"\n"}1. 인터넷상 개인식별번호{"\n"}2. 아이디{"\n"}3. 전자우편주소
        {"\n"}4. 기타 "회사"가 필요하다고 인정하는 사항{"\n"}3. "쏙(SSOCK)"은
        상기 "이용자"의 신청에 대하여 회원가입을 승낙함을 원칙으로 합니다. 다만,
        "쏙(SSOCK)"은 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않을 수
        있습니다.{"\n"}
        1.가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
        {"\n"}2. 실명이 아니거나 타인의 명의를 이용한 경우{"\n"}3. 허위의 정보를
        기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
        {"\n"}4. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반
        사항을 위반하며 신청하는 경우{"\n"}1. "쏙(SSOCK)"은 서비스 관련 설비의
        여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수
        있습니다.{"\n"}2. 제3항과 제4항에 따라 회원가입신청의 승낙을 하지
        아니하거나 유보한 경우, "쏙(SSOCK)"는 이를 신청자에게 알려야 합니다.
        "쏙(SSOCK)"의 귀책사유 없이 신청자에게 통지할 수 없는 경우에는 예외로
        합니다.{"\n"}3. 회원가입계약의 성립 시기는 "쏙(SSOCK)"의 승낙이
        "이용자"에게 도달한 시점으로 합니다.
      </Text>
      <Text style={styles.titleContainer}>제9조(회원정보의 변경)</Text>
      <Text style={styles.fontContainer}>
        1. "회원"은 개인정보관리화면을 통하여 언제든지 자신의 개인정보를
        열람하고 수정할 수 있습니다.{"\n"}2. "회원"은 회원가입신청 시 기재한
        사항이 변경되었을 경우 온라인으로 수정을 하거나 "쏙(SSOCK)"에 대하여 그
        변경사항을 알려야 합니다.{"\n"}3. 제2항의 변경사항을 "회사"에 알리지
        않아 발생한 불이익에 대하여 "쏙(SSOCK)"은 책임지지 않습니다.
      </Text>
      <Text style={styles.titleContainer}>
        제10조("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)
      </Text>
      <Text style={styles.fontContainer}>
        1. "회원"의 "아이디"와 "비밀번호"에 관한 관리책임은 "회원"에게 있으며,
        이를 제3자가 이용하도록 하여서는 안 됩니다.{"\n"}2. "회원"은 "아이디" 및
        "비밀번호"가 도용되거나 제3자에 의해 사용되고 있음을 인지한 경우에는
        이를 즉시 "쏙(SSOCK)"에 통지하고 "쏙(SSOCK)"의 안내에 따라야 합니다.
        {"\n"}3. 제2항의 경우에 해당 "회원"이 "쏙(SSOCK)"에 그 사실을 통지하지
        않거나, 통지한 경우에도 "쏙(SSOCK)"의 안내에 따르지 않아 발생한 불이익에
        대하여 "쏙(SSOCK)"은 책임지지 않습니다.
      </Text>
      <Text style={styles.titleContainer}>제11조("회원"에 대한 통지)</Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"는 "회원" 전체에 대한 통지의 경우 7일 이상 "회사"의
        게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 다만, "회원"
        본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 제1항의
        통지를 합니다.
      </Text>
      <Text style={styles.titleContainer}>
        제12조(회원탈퇴 및 자격 상실 등)
      </Text>
      <Text style={styles.fontContainer}>
        1. "회원"은 "쏙(SSOCK)"에 언제든지 탈퇴를 요청할 수 있으며 "쏙(SSOCK)"는
        즉시 회원탈퇴를 처리합니다.{"\n"}2. "회원"이 다음 각호의 사유에 해당하는
        경우, "쏙(SSOCK)"은 회원자격을 제한 및 정지시킬 수 있습니다.{"\n"}1.
        다른 사람의 "쏙(SSOCK)"의 서비스이용을 방해하거나 그 정보를 도용하는 등
        질서를 위협하는 경우
        {"\n"}2. "쏙(SSOCK)"을 이용하여 법령 또는 이 약관이 금지하거나
        공서양속에 반하는 행위를 하는 경우
      </Text>

      <Text style={styles.titleContainer}>제3장 콘텐츠이용계약</Text>
      <Text style={styles.titleContainer}>
        제13조("콘텐츠"의 내용 등의 게시)
      </Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 다음 사항을 해당 "콘텐츠"의 이용초기화면이나 그 포장에
        "이용자"가 알기 쉽게 표시합니다.{"\n"}1. "콘텐츠"의 명칭 또는 제호{"\n"}
        2. "콘텐츠"의 제작 및 표시 연월일{"\n"}3. "콘텐츠"의 내용, 이용방법,
        이용료 기타 이용조건
      </Text>
      <Text style={styles.titleContainer}>제17조("회사"의 의무)</Text>
      <Text style={styles.fontContainer}>
        1."쏙(SSOCK)"은 법령과 이 약관이 정하는 권리의 행사와 의무의 이행을
        신의에 좇아 성실하게 하여야 합니다.{"\n"}2."쏙(SSOCK)"은 "이용자"가
        안전하게 "콘텐츠"를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해
        보안시스템을 갖추어야 하며 개인정보보호정책을 공시하고 준수합니다.{"\n"}
        3."쏙(SSOCK)"은 콘텐츠이용과 관련하여 "이용자"로부터 제기된 의견이나
        불만이 정당하다고 인정할 경우에는 이를 지체없이 처리합니다. 이용자가
        제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을
        통하여 그 처리과정 및 결과를 전달합니다.
      </Text>
      <Text style={styles.titleContainer}>제18조("이용자"의 의무)</Text>
      <Text style={styles.fontContainer}>
        1. "이용자"는 다음 행위를 하여서는 안 됩니다.{"\n"}1. 신청 또는 변경 시
        허위내용의 기재{"\n"}2. 타인의 정보도용{"\n"}3. "쏙(SSOCK)"에 게시된
        정보의 변경{"\n"}
        4. "쏙(SSOCK)"이 금지한 정보(컴퓨터 프로그램 등)의 송신 또는 게시
        {"\n"}5. "쏙(SSOCK)"과 기타 제3자의 저작권 등 지적재산권에 대한 침해
        {"\n"}6. "쏙(SSOCK)" 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
        행위{"\n"}
        7. 외설 또는 폭력적인 말이나 글, 화상, 음향, 기타 공서양속에 반하는
        정보를 "쏙(SSOCK)"의 사이트에 공개 또는 게시하는 행위{"\n"}8. 기타
        불법적이거나 부당한 행위{"\n"}1. "이용자"는 관계법령, 이 약관의 규정,
        이용안내 및 "콘텐츠"와 관련하여 공지한 주의사항, "쏙(SSOCK)"이 통지하는
        사항 등을 준수하여야 하며, 기타 "쏙(SSOCK)"의 업무에 방해되는 행위를
        하여서는 안 됩니다.
      </Text>
      <Text style={styles.titleContainer}>제21조(콘텐츠서비스의 변경)</Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라
        제공하고 있는 콘텐츠서비스를 변경할 수 있습니다.{"\n"}2. "회사"는
        콘텐츠서비스의 내용, 이용방법, 이용시간을 변경할 경우에 변경사유, 변경될
        콘텐츠서비스의 내용 및 제공일자 등을 그 변경 전 7일 이상 해당
        콘텐츠초기화면에 게시합니다.
      </Text>
      <Text style={styles.titleContainer}>제23조(게시물의 삭제)</Text>
      <Text style={styles.fontContainer}>
        1. "회사"는 게시판에 정보통신망이용촉진 및 정보보호 등에 관한 법률을
        위반한 청소년유해매체물이 게시되어 있는 경우에는 이를 지체 없이 삭제
        합니다.
      </Text>
      <Text style={styles.titleContainer}>제25조(개인정보보호)</Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 제7조 제2항의 신청서기재사항 이외에 "이용자"의
        콘텐츠이용에 필요한 최소한의 정보를 수집할 수 있습니다. 이를 위해
        "회사"가 문의한 사항에 관해 "이용자"는 진실한 내용을 성실하게 고지하여야
        합니다.{"\n"}2. "쏙(SSOCK)"가 "이용자"의 개인 식별이 가능한 "개인정보"를
        수집하는 때에는 당해 "이용자"의 동의를 받습니다.
        {"\n"}3. "쏙(SSOCK)"은 "이용자"가 이용신청 등에서 제공한 정보와 제1항에
        의하여 수집한 정보를 당해 "이용자"의 동의 없이 목적 외로 이용하거나
        제3자에게 제공할 수 없으며, 이를 위반한 경우에 모든 책임은 "쏙(SSOCK)"이
        집니다. 다만, 다음의 경우에는 예외로 합니다.{"\n"}1. 통계작성, 학술연구
        또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로
        제공하는 경우{"\n"}2. "콘텐츠" 제공에 따른 요금정산을 위하여 필요한 경우
        {"\n"}3. 도용방지를 위하여 본인확인에 필요한 경우{"\n"}4. 약관의 규정
        또는 법령에 의하여 필요한 불가피한 사유가 있는 경우{"\n"}4.
        "쏙(SSOCK)"이 제2항과 제3항에 의해 "이용자"의 동의를 받아야 하는
        경우에는 "개인정보"관리책임자의 신원(소속, 성명 및 전화번호 기타
        연락처), 정보의 수집목적 및 이용목적, 제3자에 대한
        정보제공관련사항(제공받는 자, 제공목적 및 제공할 정보의 내용)등에 관하여
        정보통신망이용촉진 및 정보보호 등에 관한 법률 제22조 제2항이 규정한
        사항을 명시하고 고지하여야 합니다.{"\n"}5. "이용자"는 언제든지 제3항의
        동의를 임의로 철회할 수 있습니다.{"\n"}6. "이용자"는 언제든지
        "쏙(SSOCK)"이 가지고 있는 자신의 "개인정보"에 대해 열람 및 오류의 정정을
        요구할 수 있으며, "쏙(SSOCK)"은 이에 대해 지체 없이 필요한 조치를 취할
        의무를 집니다. "이용자"가 오류의 정정을 요구한 경우에는 "쏙(SSOCK)"은 그
        오류를 정정할 때까지 당해 "개인정보"를 이용하지 않습니다.{"\n"}7.
        "쏙(SSOCK)"은 개인정보보호를 위하여 관리자를 한정하여 그 수를
        최소화하며, 신용카드, 은행계좌 등을 포함한 "이용자"의 "개인정보"의 분실,
        도난, 유출, 변조 등으로 인한 "이용자"의 손해에 대하여 책임을 집니다.
        {"\n"}8. "쏙(SSOCK)" 또는 그로부터 "개인정보"를 제공받은 자는 "이용자"가
        동의한 범위 내에서 "개인정보"를 사용할 수 있으며, 목적이 달성된 경우에는
        당해 "개인정보"를 지체 없이 파기합니다.
        {"\n"}
        9. "쏙(SSOCK)"은 정보통신망이용촉진 및 정보보호에 관한 법률 등 관계
        법령이 정하는 바에 따라 "이용자"의 "개인정보"를 보호하기 위해
        노력합니다. "개인정보"의 보호 및 사용에 대해서는 관련법령 및 "회사"의
        개인정보보호정책이 적용됩니다.
      </Text>
      <Text style={styles.titleContainer}>
        제28조(회사의 계약해제·해지 및 이용제한)
      </Text>
      <Text style={styles.fontContainer}>
        1. "쏙(SSOCK)"은 "이용자"가 제12조 제2항에서 정한 행위를 하였을 경우
        사전통지 없이 계약을 해제·해지하거나 또는 기간을 정하여 서비스이용을
        제한할 수 있습니다.{"\n"}2. 제1항의 해제·해지는 "쏙(SSOCK)"이 자신이
        정한 통지방법에 따라 "이용자"에게 그 의사를 표시한 때에 효력이
        발생합니다.{"\n"}
        3. "쏙(SSOCK)"의 해제·해지 및 이용제한에 대하여 "이용자"는 "쏙(SSOCK)"이
        정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고
        "쏙(SSOCK)"이 인정하는 경우, "쏙(SSOCK)"은 즉시 서비스의 이용을
        재개합니다.{"\n"}
      </Text>
    </ScrollView>
  );
};

export default TermsOfService;

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: ScreenWidth / 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  fontContainer: {
    fontSize: ScreenWidth / 24,
    marginLeft: 10,
    marginRight: 10,
  },
});
