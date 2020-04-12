import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import CreditCard from "../components/CreditCard";
import Context from "../components/Context";

afterEach(cleanup);

describe("CreditCard Test", () => {
  const setCardInfo = jest.fn();
  const cardInfo = {
    number: "**** **** **** ****",
    name: "Nome do titular",
    validate: "00/00",
    securityNumber: "000",
    showFront: true,
    isValidCard: false,
  };

  const emptyFrontBg = "empty-card-front-bg.svg";
  const emptyBackBg = "empty-card-back-bg.svg";

  const validCardFrontBg = "card-front-bg.svg";
  const validCardBackBg = "card-back-bg.svg";

  const flagImage = "visa.png";

  it("Should render CreditCard component without errors", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <CreditCard />
      </Context.Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it("Should verify CreditCard component style", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <CreditCard />
      </Context.Provider>
    );
    const card = container.firstChild;
    expect(card).toHaveStyle(`
        background-color: transparent;
        font-family: "SF Pro";
        height: 172px;
        transition: transform 0.3s;
        width: 280px;
    `);
  });

  it("Should verify if CreditCard component background is empty card", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <CreditCard />
      </Context.Provider>
    );
    const card = container.firstChild;

    const [frontBgElement, backBgElement] = card.querySelectorAll("img");
    const frontSrc = frontBgElement.getAttribute("src");
    const backSrc = backBgElement.getAttribute("src");

    expect(frontSrc).toContain(emptyFrontBg);
    expect(backSrc).toContain(emptyBackBg);
  });

  it("Should verify if CreditCard component background is VALID card", async () => {
    cardInfo.isValidCard = true;
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <CreditCard />
      </Context.Provider>
    );
    const card = container.firstChild;

    const [frontBgElement, flagCard, backBgElement] = card.querySelectorAll(
      "img"
    );
    const frontSrc = frontBgElement.getAttribute("src");
    const flagSrc = flagCard.getAttribute("src");
    const backSrc = backBgElement.getAttribute("src");

    expect(frontSrc).toContain(validCardFrontBg);
    expect(flagSrc).toContain(flagImage);
    expect(backSrc).toContain(validCardBackBg);
  });
});
