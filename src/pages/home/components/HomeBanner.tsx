import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

const HomeBanner = ({ text }: { text: string }) => {
  return <Container>{text}</Container>;
};

export default HomeBanner;

const Container = styled.div`
  padding: 36px 42px;
  background-color: ${colors.primary1};
  color: ${colors.white};
  ${fonts.H1};
  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
