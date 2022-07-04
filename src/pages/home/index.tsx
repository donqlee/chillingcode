import styled from "styled-components";

import { Navigation, Footer, Padding } from "components";
import { CampSection, HeaderSection, HomeBanner } from "./components";
import { ICamp } from "types/type";
import { useEffect, useState } from "react";
import { maxWidth } from "styles/mixin";

const campMock: ICamp = {
  id: 0,
  name: "업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기",
  type: "인기",
  status: "open",
  field: "데이터분석",
  skill: "Excel",
  startDate: "2021-03-13",
  thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
};
const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>([]);
  const [saleCamps, setSaleCamps] = useState<ICamp[]>([]);

  useEffect(() => {
    // TODO: 실서버 데이터로 변경
    setPopularCamps([campMock, campMock, campMock, campMock]);
    setSaleCamps([campMock, campMock, campMock, campMock]);
  }, []);
  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <main>
        <CampSection title="인기 부트 캠프" camps={popularCamps} />
        <Padding height="40px" />
        <CampSection title="특가 할인 캠프" camps={saleCamps} isHeadField />
        <Padding height="40px" />
        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        <Padding height="55px" />
      </main>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
  main {
    ${maxWidth};
  }
`;
