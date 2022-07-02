import styled from "styled-components";

import { Navigation, Footer } from "components";
import { HeaderSection } from "./components/HeaderSection";
import { ICamp } from "types/type";
import { useEffect, useState } from "react";

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
  return (
    <div>
      <Navigation />
      <HeaderSection />
    </div>
  );
};

export default Home;
