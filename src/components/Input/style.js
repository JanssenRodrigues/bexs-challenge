import styled, { css } from 'styled-components';

export const InputStyle = css`
    width: 100%;
    height: 27px;
    border: none;
    font-size: 17px;
    border-bottom: 1.5px solid ${({ error }) => error ? '#EB5757' :'#C9C9C9'};
    background: transparent;
    font-family: 'Verdana', sans-serif;
`;

export const InputContainer = styled.div`
    width: ${({ name }) => (name === 'validate' || name === 'securityNumber') 
    ? '49%' : '100%'};
    position: relative;
    margin-bottom: 44px;
    input {
        ${InputStyle};
    }
`;

export const Placeholder = styled.span`
    display: ${({ isHidden }) => isHidden ? 'none' : 'block'};
    width: 100%;
    height: 100%;
    color: #C9C9C9;
    font-size: 17px;
    line-height: 22px;
    position: absolute;
    left: 0;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const ErrorMessage = styled.span`
    color: #EB5757;
    font-size: 14px;
    line-height: 22px;
    margin-top: 2px;
`;