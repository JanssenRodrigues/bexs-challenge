import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Form } from "./style";
import Input from "../Input";
import SelectBox from "../SelectBox";
import Button from "../Button/style";
import { processString } from "../../helpers/processString";
import Context from "../Context";

const RegisterForm = () => {
  const formRef = useRef(null);
  const [cardInfo, setCardInfo] = useContext(Context);

  const validateForm = () => {
    const [inputNumber, , inputValidate, inputSecurityNumber] = Array.from(
      formRef.current.elements
    ).map((item) => processString(item.value));

    if (
      inputNumber.length < 16 ||
      inputValidate.length < 4 ||
      inputSecurityNumber.length < 3
    ) {
      console.log("nada");
      setCardInfo({
        ...cardInfo,
        isValidCard: false,
      });
      return false;
    }
    console.log("PASSOU");
    setCardInfo({
      ...cardInfo,
      isValidCard: true,
    });
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
    securityNumber: PropTypes.string,
  }).isRequired,
  setCardInfo: PropTypes.func.isRequired,
};

export default RegisterForm;
