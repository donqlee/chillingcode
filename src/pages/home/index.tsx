import styled from "styled-components";

import { Navigation, Footer, Padding, CardSectionSkeleton } from "components";
import {
  CampSection,
  HeaderSection,
  HomeBanner,
  CommunitySection,
} from "./components";
import { CampType, ICamp, ICommunity } from "types/type";
import { useEffect, useState } from "react";
import { maxWidth } from "styles/mixin";
import { getCampsByType } from "apis/campApi";
import { getCommunties } from "apis/communityApi";

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  const [communities, setCommunities] = useState<ICommunity[]>();

  useEffect(() => {
    fetchCamps("popular");
    fetchCamps("sale");
    fetchCommunities();
  }, []);
  const fetchCamps = async (type: CampType) => {
    const camps = await getCampsByType(type);
    type === "popular" ? setPopularCamps(camps) : setSaleCamps(camps);
  };
  const fetchCommunities = async () => {
    const communities = await getCommunties();
    setCommunities(communities);
  };
  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <main>
        {popularCamps ? (
          <CampSection title="인기 부트 캠프" camps={popularCamps} />
        ) : (
          <CardSectionSkeleton />
        )}
        <Padding height="40px" />
        {saleCamps ? (
          <CampSection title="특가 할인 캠프" camps={saleCamps} isHeadField />
        ) : (
          <CardSectionSkeleton />
        )}
        <Padding height="40px" />
        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        <Padding height="55px" />
        {communities ? (
          <CommunitySection title="커뮤니티" communities={communities} />
        ) : (
          <CardSectionSkeleton />
        )}
        <Padding height="240px" />
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
