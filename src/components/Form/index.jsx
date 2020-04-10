import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './style';
import Input from '../Input';
import SelectBox from '../SelectBox';
import Button from '../Button/style';

const RegisterForm = () => {
    const NUMBER_LENGTH = 16;
    const VALIDATE_LENGTH = 4;
    const SECURITY_NUMBER_LENGTH = 3;

    return (
        <Form method="POST">
            <Input 
                inputName="number" 
                placeholder="Número do cartão" 
                maxLength={NUMBER_LENGTH}
                mask="9999 9999 9999 9999"
            />
            <Input 
                inputName="name" 
                placeholder="Nome (igual ao cartão)"
            />
            <Input 
                inputName="validate"
                placeholder="Validade"
                maxLength={VALIDATE_LENGTH}
                mask="99/99"
            />
            <Input 
                inputName="securityNumber"
                placeholder="CVV"
                maxLength={SECURITY_NUMBER_LENGTH}
                mask="999"
            />

            <SelectBox placeholder="Número de parcelas" />
            <Button onClick={(e) => e.preventDefault()}>Continuar</Button>
        </Form>
    );
};

RegisterForm.propTypes = {
    cardInfo: PropTypes.shape({
        number: PropTypes.string, 
        name: PropTypes.string, 
        validate: PropTypes.string, 
        securityNumber: PropTypes.string
    }).isRequired,
    setCardInfo: PropTypes.func.isRequired
};

export default RegisterForm;