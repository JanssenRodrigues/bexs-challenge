import styled, { css } from "styled-components";

export const InputStyle = css`
  width: 100%;
  height: 27px;
  border: none;
  font-size: 17px;
  border-bottom: 1.5px solid ${({ error }) => (error ? "#EB5757" : "#C9C9C9")};
  background: transparent;
  font-family: "Verdana", sans-serif;
  outline: none;
  &:focus + span {
    transform: translateY(-16px) scale(0.8);
    transform-origin: 0 0;
  }
`;

export const InputContainer = styled.div`
  width: ${({ name }) =>
    name === "validate" || name === "securityNumber" ? "49%" : "100%"};
  position: relative;
  margin-bottom: 44px;
  input {
    ${InputStyle};
  }
`;

export const Placeholder = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  color: #c9c9c9;
  font-size: 17px;
  line-height: 22px;
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  transition: 0.2s transform ease-in-out;
  pointer-events: none;
  ${({ info }) => 
    info && css`
       i {
           display: inline-block;
           width: 13px;
           height: 13px;
           background-color: #C9C9C9;
           border-radius: 50%;
           margin-left: 10px;
           
       }
    `}
  ${({ fixed }) =>
    fixed &&
    css`
      transform: translateY(-16px) scale(0.8);
      transform-origin: 0 0;
    `};
`;

export const ErrorMessage = styled.span`
  color: #eb5757;
  font-size: 14px;
  line-height: 22px;
  margin-top: 2px;
  position: absolute;
  left: 0;
  bottom: -20px;
`;
