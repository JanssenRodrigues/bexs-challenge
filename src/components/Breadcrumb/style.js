import styled, { css } from 'styled-components';
import media from '../../mediaQueries';

export const BreadcrumbContainer = styled.div`
  display: none;
  ${media.desktop`
    display: block;
    width: 100%;
  `}
`;

export const BreadcrumbList = styled.ul`
  display: flex;
  margin-bottom: 50px;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  line-height: 22px;
  color: #DE4B4B;
  position: relative;
  padding-right: 32px;
  margin-right: 24px;
  cursor: pointer;
  &:not(:last-child) {
    &::before, &::after {
      content: '';
      display: block;
      width: 10px;
      height: 2px;
      background-color: #DE4B4B;
      position: absolute;
      right: 0;
    }
    &::before {
      top: 7px;
      transform: rotate(45deg);
    }
    &::after {
      bottom: 7px;
      transform: rotate(-45deg);
    }
  }
`;

export const BreadcrumbStep = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-right: 8px;
  border: 2px solid #DE4B4B;
  border-radius: 50%;
  font-size: 13px;
  font-weight: bold;
  line-height: 36px;
  ${({ active }) => active && css`
    background-color: #DE4B4B;
    position: relative;
    &::before, &::after {
      content: '';
      display: block;      
      height: 3px;
      background-color: #fff;
      position: absolute;
    }
    &::before {
      width: 7px;
      top: 10px;
      left: 2px;
      transform: rotate(45deg);
    }
    &::after {
      width: 12px;
      bottom: 7px;
      left: 5px;
      transform: rotate(-45deg);
    }
  `}
`;