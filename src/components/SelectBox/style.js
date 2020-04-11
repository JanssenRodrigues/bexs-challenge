import styled, { css } from "styled-components";
import { InputStyle } from "../Input/style";
import media from "../../mediaQueries";

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 44px;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background-color: #de4b4b;
    position: absolute;
    top: 13.5px;
    transition: 0.3s transform ease-in-out;
  }
  &::before {
    right: 6px;
    ${({ isOpen }) =>
      isOpen
        ? css`
            transform: rotate(-45deg);
          `
        : css`
            transform: rotate(45deg);
          `};
  }

  &::after {
    right: 0;
    ${({ isOpen }) =>
      isOpen
        ? css`
            transform: rotate(45deg);
          `
        : css`
            transform: rotate(-45deg);
          `};
  }

  input {
    ${InputStyle}
    cursor: pointer;
  }
`;

export const Select = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  background: #fff;
  overflow: hidden;
  transition: 0.3s max-height ease-in-out;
  ${media.desktop`
    position: absolute;
    `};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  font-size: 17px;
  line-height: 22px;
  border-bottom: 1px solid #c9c9c9;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;
