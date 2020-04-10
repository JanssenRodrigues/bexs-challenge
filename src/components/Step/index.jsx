import React from 'react';
import { StepContainer, Icon, StepLabel } from './style';

const Step = () => {
    return (
        <StepContainer>
            <Icon src="../../assets/images/creditcard-icon.svg" />
            <StepLabel>Adicione um novo cartão de crédito</StepLabel>
        </StepContainer>
    );
};

export default Step;
