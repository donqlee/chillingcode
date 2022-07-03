import { CampCard } from "components";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import fonts from "styles/fonts";
import { maxWidth } from "styles/mixin";
import { ICamp } from "types/type";

interface IProps {
  title: string;
  camps: ICamp[];
  isHeadField?: boolean;
}
export const CampSection = ({ title, camps, isHeadField = false }: IProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className={`${isMobile ? "" : "flex"}`}>
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} isHeadField={isHeadField} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  ${maxWidth}
  padding: 0px 16px 40px;
  .section-title {
    ${fonts.H1};
    padding-bottom: 8px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
`;
