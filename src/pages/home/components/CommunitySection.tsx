import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { ICommunity } from "types/type";

import { CommunityCard } from "components";

import fonts from "styles/fonts";

interface IProps {
  title: string;
  communities: ICommunity[];
}
const CommunitySection = ({ title, communities }: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 680px)",
  });

  return isDesktop ? (
    <Container>
      <div className="section-title">{title}</div>
      <div className="cards">
        {communities.map((community, index) => (
          <CommunityCard key={index} community={community} />
        ))}
      </div>
    </Container>
  ) : null;
};

export default CommunitySection;

const Container = styled.div`
  padding: 0px 16px;
  .section-title {
    ${fonts.H1};
    padding-bottom: 16px;
  }
  .cards {
    display: flex;
    gap: 20px;
  }
`;
