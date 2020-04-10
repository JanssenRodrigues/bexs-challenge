import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import normalize from "styled-normalize";
import media from "./mediaQueries";

export const BaseStyle = createGlobalStyle`
  ${normalize}
  ${reset}

  @font-face {
    font-family: 'SF Pro';
    src: url('../assets/fonts/SFProText-Regular.ttf');
  }

  * {
    box-sizing: border-box;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  body {
    background-color: #F7F7F7;
    font-family: 'Verdana', sans-serif;
  }

  #root {
    ${media.desktop`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `};
  }
`;

export const PageContent = styled.div`
  width: 100%;
  ${media.desktop`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1024px;
    height: 596px;
    align-items: center;
  `}
`;

export const Content = styled.article`
  width: 100%;
  margin-bottom: 38px;
  ${media.desktop`
    padding-left: 168px;
  `};
`;