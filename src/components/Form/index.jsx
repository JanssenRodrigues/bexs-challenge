import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from './style';
import Input from '../Input';
import SelectBox from '../SelectBox';
import Button from '../Button/style';

const RegisterForm = () => {
    const formRef = useRef(null);

    const validateForm = () => {
        const [inputNumber, inputName, inputValidate, inputSecurityNumber] = formRef.current.elements;
        console.log(inputNumber, inputName, inputValidate, inputSecurityNumber)
    };
    
    return (
        <Form method="POST" ref={formRef}>
            <Input 
                inputName="number" 
                placeholder="Número do cartão" 
                mask="9999 9999 9999 9999"
                validateForm={validateForm}
            />
            <Input 
                inputName="name" 
                placeholder="Nome (igual ao cartão)"
                validateForm={validateForm}
            />
            <Input 
                inputName="validate"
                placeholder="Validade"
                mask="99/99"
                validateForm={validateForm}
            />
            <Input 
                inputName="securityNumber"
                placeholder="CVV"
                mask="999"
                validateForm={validateForm}
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