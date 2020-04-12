import React, { useContext } from "react";
import Context from "../Context";
import {
  Card,
  CardFront,
  CardBackground,
  FlagCard,
  CardNumber,
  CardName,
  CardValidate,
  CardBack,
  CardSecurityNumber,
} from "./style";

const CreditCard = () => {
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
  );
};

export default CreditCard;
