import React, { useState } from "react";
import PropTypes from "prop-types";
import { Placeholder, ErrorMessage } from "../Input/style";
import { SelectContainer, Select, List, ListItem } from "./style";
import { errorMessages } from "../../helpers/staticData";

const SelectBox = ({ inputName, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPlaceholder, setselectedPlaceholder] = useState("");

  const MAX_INSTALLMENTS = 12;
  const checkoutValue = 12000;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const verifyInstallments = (value) => {
    if (value !== "") {
      return setError(false);
    }
    return setError(true);
  };

  return (
    <SelectContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <input
        name="select-box"
        type="text"
        value={selectedPlaceholder}
        onChange={({ target }) => verifyInstallments(target.value)}
        onBlur={({ target }) => verifyInstallments(target.value)}
      />
      <Placeholder fixed={selectedPlaceholder}>{placeholder}</Placeholder>
      {error && <ErrorMessage>{errorMessages[inputName]}</ErrorMessage>}
      <Select>
        <List isOpen={isOpen} maxHeight={MAX_INSTALLMENTS * 43}>
          {" "}
          {/* 43 is the ListItem height*/}
          {[...new Array(MAX_INSTALLMENTS)].map((_, index) => {
            const installment = index + 1;
            return (
              <ListItem
                key={installment}
                onClick={({ target }) => {
                  setselectedPlaceholder(target.textContent);
                  verifyInstallments(target.value);
                }}
              >
                {`${installment}x ${formatter.format(
                  checkoutValue / installment
                )} sem juros`}
              </ListItem>
            );
          })}
        </List>
      </Select>
    </SelectContainer>
  );
};

SelectBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SelectBox;
