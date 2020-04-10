import styled from 'styled-components';
import media from '../../mediaQueries';

export const StepContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 15px;
    width: 220px;
    ${media.desktop`
        margin-bottom: 31px;
    `};
`;

export const Icon = styled.img`
    display: flex;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    ${media.desktop`
        width: 50px;
        height: 50px;
    `};
`;

export const StepLabel = styled.label`
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    margin-left: 15px;
    ${media.desktop`
        font-size: 20px;
        line-height: 24px;
    `};
`;