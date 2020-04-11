import styled from 'styled-components';
import media from '../../mediaQueries';

export const OrderContainer = styled.div`
  display: none;
  ${media.largeDesktop`
    display: flex;
    flex-direction: column;
    width: 327px;
    height: 285px;
    background-color: #fff;
    padding: 52px 20px;
    margin-left: 15px;
  `}
`;

export const OrderPlaceholder = styled.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${({ width }) => width ? width : '197px'};
  height: ${({ height }) => height ?  height: '12px'};
  background-color: ${({ color }) => color ? color : '#F7F7F7'};
  border-radius: 5px;
`;

export const Separator = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background-color: #707070;
  margin: 25px 0;
`;

export const OrderItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;