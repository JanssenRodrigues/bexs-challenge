import React, { useContext } from "react";
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
  FlagCard,
} from "./style";
import Step from "../Step";
import Context from "../Context";

const Sidebar = () => {
  const [cardInfo] = useContext(Context);
  const {
    number,
    name,
    validate,
    securityNumber,
    showFront,
    isValidCard,
  } = cardInfo;

  const emptyFrontBg = "../../assets/images/empty-card-front-bg.svg";
  const emptyBackBg = "../../assets/images/empty-card-back-bg.svg";

  const validCardFrontBg = "../../assets/images/card-front-bg.svg";
  const validCardBackBg = "../../assets/images/card-back-bg.svg";

  const frontCardBg = isValidCard ? validCardFrontBg : emptyFrontBg;
  const backCardBg = isValidCard ? validCardBackBg : emptyBackBg;

  return (
    <SidebarContainer>
      <BackStep to="/">
        <strong>Etapa 2</strong> de 3
      </BackStep>
      <Step />
      <Card flip={showFront}>
        <CardFront>
          <CardBackground src={frontCardBg} />
          {isValidCard && <FlagCard src="../../assets/images/visa.png" />}
          <CardNumber>{number}</CardNumber>
          <CardName>{name}</CardName>
          <CardValidate>{validate}</CardValidate>
        </CardFront>
        <CardBack>
          <CardBackground src={backCardBg} />
          <CardSecurityNumber>{securityNumber}</CardSecurityNumber>
        </CardBack>
      </Card>
    </SidebarContainer>
  );
};

export default Sidebar;
