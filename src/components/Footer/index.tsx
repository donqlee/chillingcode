import styled from "styled-components";
import { maxWidth } from "styles/mixin";

const Footer = () => {
  return (
    <Container>
      <div>대표: 이동규. 서울특별시 서초구 바우뫼로91, 양재우성아파트</div>
      <div> Copyright by (주)칠링코드.</div>
      <div> All right reserved. 이용약관 개인정보처리방침</div>
    </Container>
  );
};

const Container = styled.footer`
  ${maxWidth}
`;

export default Footer;
