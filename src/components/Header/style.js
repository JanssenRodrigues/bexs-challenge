import styled from 'styled-components';
import media from '../../mediaQueries';

export const HeaderFluid = styled.header`
  display: none;
  ${media.desktop`
    display: flex;
    width: 100%;
    height: 90px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 1px 0.5px 0px #707070;
  `};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  ${media.largeDesktop`
    max-width: 1365px;
  `}
`;