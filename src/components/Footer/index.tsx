import styled from "styled-components";
import { maxWidth } from "styles/mixin";
import colors from "styles/colors";
import fonts from "styles/fonts";

const Footer = () => {
  return (
    <Container>
      <footer>
        <div>
          <img
            className="logo"
            src={require("assets/images/logo-primary.png")}
            alt="로고"
          />
        </div>
        <div className="content">
          <div>대표: 이동규. 서울특별시 서초구 바우뫼로91</div>
          <br />
          <div> Copyright by (주)칠링코드.</div>
          <div> All right reserved. 이용약관 개인정보처리방침</div>
        </div>
        <div className="sns">
          <div className="sns-item"></div>
          <div className="sns-item"></div>
          <div className="sns-item"></div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 32px;
  background-color: ${colors.gray6};
  footer {
    ${maxWidth};
    display: flex;
    .logo {
      width: 60px;
      padding-right: 115px;
    }
    .content {
      flex: 1;
      ${fonts.Caption}
      color: ${colors.gray2};
    }
    .sns {
      display: flex;
      gap: 6px;
      padding-left: 10px;
      div {
        width: 32px;
        height: 32px;
        background-color: ${colors.gray4};
        border-radius: 16px;
      }
    }
  }
`;
