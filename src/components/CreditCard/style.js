import styled, { css } from "styled-components";
import media from "../../mediaQueries";

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
    font-size: 24px;
    line-height: 27px;
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
    right: 9px;
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

export const FlagCard = styled.img`
  display: block;
  width: 53px;
  height: 18px;
  position: absolute;
  top: 27px;
  left: 14px;
  ${media.desktop`
    width: 69px;
    height: 23px;
    top: 35px;
    left: 27px;
  `}
`;
