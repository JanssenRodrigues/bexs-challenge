import styled from "styled-components";
import media from "../../mediaQueries";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 38px 15px 40px;
  background: linear-gradient(
    to bottom,
    #de4b4b 0%,
    #de4b4b 239px,
    #fff 239px,
    #fff 100%
  );
  ${media.desktop`
    align-items: flex-start;
    max-width: 352px;
    height: 100%;
    padding: 53px 0 40px 64px;
    background: none;
    background-color: #DE4B4B;
  `};
`;

export const BackStep = styled(Link)`
  width: 100%;
  margin-bottom: 30px;
  padding-left: 14px;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  line-height: 36px;
  position: relative;
  text-align: center;
  ${media.desktop`
    line-height: 22px;
    margin-bottom: 54px;
  `};
  &::before,
  &::after {
    content: "";
    display: block;
    background-color: #fff;
    width: 15px;
    height: 3px;
    position: absolute;
    left: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    ${media.desktop`
      width: 9px;
      height: 2px;
    `}
  }

  &::before {
    top: 12px;
    transform: rotate(-45deg);
    ${media.desktop`
      top: 7px;
    `}
  }
  &::after {
    bottom: 12px;
    transform: rotate(45deg);
    ${media.desktop`
      bottom: 7px;
    `}
  }

  strong {
    font-weight: bold;
  }
`;