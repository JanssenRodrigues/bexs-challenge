import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '../Input/style';
import { SelectContainer, Select, List, ListItem } from './style';

const SelectBox = ({ placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [, setSelectedInstallments] = useState(1);
    const [selectedPlaceholder, setselectedPlaceholder] = useState('');

    const MAX_INSTALLMENTS = 12;
    const checkoutValue = 12000;
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <SelectContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <input name="select-box" type="text" value={selectedPlaceholder} disabled={true}/>
            <Placeholder isHidden={selectedPlaceholder}>{placeholder}</Placeholder>
            <Select>
                <List isOpen={isOpen} maxHeight={MAX_INSTALLMENTS * 43}> {/* 43 is the ListItem height*/} 
                    {[...new Array(MAX_INSTALLMENTS)].map((_, index) => {
                        const installment = index + 1;
                        return (
                            <ListItem key={index} onClick={({ target }) => {
                                console.log(target.textContent);
                                setselectedPlaceholder(target.textContent);
                                setSelectedInstallments(installment);
                            }}>
                                {`${installment}x ${formatter.format(checkoutValue / installment)} sem juros`}
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