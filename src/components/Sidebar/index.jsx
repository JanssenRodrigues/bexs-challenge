import React, { useContext } from 'react';
import { 
    SidebarContainer,
    BackStep,
    Card,
    CardFront,
    CardBack,
    CardBackground,
    CardNumber,
    CardName,
    CardValidate,
    CardSecurityNumber,
} from './style';
import Step from '../Step';
import Context from '../Context';

const Sidebar = () => {
    const [cardInfo] = useContext(Context);
    const { number, name, validate, securityNumber, showFront } = cardInfo;

    return (
        <SidebarContainer>
            <BackStep to="/">
                <strong>Etapa 2</strong> de 3
            </BackStep>
            <Step />
            <Card flip={showFront}>
                <CardFront>
                    <CardBackground src="../../assets/images/empty-card-front-bg.svg" />
                    <CardNumber>{number}</CardNumber>
                    <CardName>{name}</CardName>
                    <CardValidate>{validate}</CardValidate>
                </CardFront>
                <CardBack>
                    <CardBackground src="../../assets/images/empty-card-back-bg.svg" />
                    <CardSecurityNumber>{securityNumber}</CardSecurityNumber>
                </CardBack>
            </Card>
        </SidebarContainer>
    );
}

export default Sidebar;