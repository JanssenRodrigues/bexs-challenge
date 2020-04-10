import React, { useState, useContext, useRef } from 'react';
import Inputmask from "inputmask"; 
import PropTypes from 'prop-types';
import { InputContainer, Placeholder, ErrorMessage } from './style';
import Context from '../Context';

const Input = ({ inputName, placeholder, mask, validateForm }) => {   
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [cardInfo, setCardInfo] = useContext(Context);
    const ref = useRef(null);
    const inputMask = new Inputmask({ mask, placeholder: "" });

    const errorMessages = {
        number: 'Número de cartão inválido',
        name: 'Insira seu nome completo',
        validate: 'Data inválida',
        securityNumber: 'Código inválido',
        installments: 'Insira o número de parcelas'
    }

    const handleEditCardInfo = (target) => {
        inputMask.mask(ref.current);
        setCardInfo({
            ...cardInfo,
            [inputName]: target.value,
        });
    };

    const handleFlipCard = (value) => {
        setCardInfo({
            ...cardInfo,
            showFront: value
        });
    };

    const validateInput = () => {
        const realValue = ref.current.value.replace(/\s+|[/]/g, '');
        switch(inputName) {
            case 'number':
                if(realValue.length < 16) {
                    return setError(true);
                }
                return setError(false);
            case 'name':
                const splitedName = ref.current.value.split(' ');
                if(splitedName.length < 2) {
                    return setError(true);
                }
                return setError(false);
            case 'validate':
                if(realValue.length < 4) {
                    return setError(true);
                }
                return setError(false);
            case 'securityNumber':
                if(realValue.length < 3) {
                    return setError(true);
                }
                return setError(false);
            default: break;
        }
    };

    return (
        <InputContainer name={inputName} error={error}>
            <input 
                ref={ref}
                name={inputName}
                value={value}
                onChange={({ target }) => {
                    setValue(target.value);
                    handleEditCardInfo(target);
                    validateForm()
                }}
                onFocus={() => inputName === 'securityNumber' && handleFlipCard(false)}
                onBlur={() => {
                    validateInput();
                    if(inputName === 'securityNumber') {
                        handleFlipCard(true);
                    }
                }}
            />
            <Placeholder isHidden={value}>{placeholder}</Placeholder>
            {error && (
                <ErrorMessage>{errorMessages[inputName]}</ErrorMessage>
            )}
        </InputContainer>
    );
};

Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    mask: PropTypes.string,
};

Input.defaultProps = {
    maxLength: 99,
    mask: '',
};

export default Input;