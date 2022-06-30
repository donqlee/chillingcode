import { createGlobalStyle } from "styled-components";
import reset from "./reset";

export default createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: white;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
  }
`;
