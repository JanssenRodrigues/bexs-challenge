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
    background-color: #f7f7f7;
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
    max-width: 1024px;
    height: 596px;
  `}
  ${media.largeDesktop`
    max-width: 1365px;
  `}
`;

export const Content = styled.article`
  width: 100%;
  background-color: #f7f7f7;
  ${media.desktop`
    max-width: 672px;
    height: 100%;
    background-color: #fff;
    padding-top: 50px;
    padding-left: 168px;
  `};
`;
