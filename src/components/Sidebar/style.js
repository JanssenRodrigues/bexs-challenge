import styled, { css } from "styled-components";
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

export const Card = styled.div`
  background-color: transparent;
  width: 280px;
  height: 172px;
  font-family: "SF Pro";
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.3s;
  ${({ flip }) =>
    !flip &&
    css`
      transform: rotateY(180deg);
    `}
  ${media.desktop`
    width: 364px;
    height: 223px;
  `};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const CardBackground = styled.img`
  display: block;
  width: 100%;
`;

const CardInfoStyle = css`
  position: absolute;
  color: #fff;
  text-shadow: 0px 1px 2px #000000b3;
  padding: 0 14px;
`;

export const CardNumber = styled.span`
  ${CardInfoStyle};
  width: 100%;
  top: 78px;
  font-size: 19px;
  line-height: 20px;
  letter-spacing: 1.5px;
  text-align: center;
  ${media.desktop`
    top: 106px;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 2.3px;
  `};
`;

export const CardName = styled.span`
  ${CardInfoStyle};
  max-width: 206px;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  top: 127px;
  ${media.desktop`
    top: 167px;
    font-size: 16px;
`};
`;

export const CardValidate = styled.span`
  ${CardInfoStyle};
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  top: 127px;
  right: 0;
  ${media.desktop`
    top: 167px;
    font-size: 16px;
`};
`;

export const CardSecurityNumber = styled.span`
  ${CardInfoStyle};
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  top: 85px;
  right: 103px;
  color: #000;
  ${media.desktop`
    top: 110px;
    right: 140px;
    font-size: 16px;
`};
`;
