import React, { useState, useContext, useRef } from "react";
import Inputmask from "inputmask";
import PropTypes from "prop-types";
import { InputContainer, Placeholder, ErrorMessage } from "./style";
import Context from "../Context";
import { treatString } from "../../helpers/treatString";
import { errorMessages } from "../../helpers/staticData";

const Input = ({ inputName, placeholder, mask, validateForm }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [cardInfo, setCardInfo] = useContext(Context);
  const ref = useRef(null);
  const inputMask = new Inputmask({ mask, placeholder: "" });

  const handleEditCardInfo = (target) => {
    inputMask.mask(ref.current);
    const isValidCard = validateForm();
    setCardInfo({
      ...cardInfo,
      isValidCard,
      [inputName]: target.value,
    });
  };

  const flipCard = (value) => {
    setCardInfo({
      ...cardInfo,
      showFront: value,
    });
  };

  const validateInput = async () => {
    const realValue = treatString(ref.current.value);
    switch (inputName) {
      case "number":
        if (realValue.length < 16) {
          return setError(true);
        }
        return setError(false);
      case "name":
        const splitedName = ref.current.value.split(" ");
        if (splitedName.length < 2) {
          return setError(true);
        }
        return setError(false);
      case "validate":
        if (realValue.length < 4) {
          return setError(true);
        }
        return setError(false);
      case "securityNumber":
        if (realValue.length < 3) {
          return setError(true);
        }
        return setError(false);
      case "installments":
        if (realValue.length) {
          return setError(true);
        }
        return setError(false);
      default:
        break;
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
        }}
        onFocus={() => inputName === "securityNumber" && flipCard(false)}
        onBlur={() => {
          validateInput();
          if (inputName === "securityNumber") {
            flipCard(true);
          }
        }}
      />
      <Placeholder isHidden={value}>{placeholder}</Placeholder>
      {error && <ErrorMessage>{errorMessages[inputName]}</ErrorMessage>}
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
  mask: "",
};

export default Input;
