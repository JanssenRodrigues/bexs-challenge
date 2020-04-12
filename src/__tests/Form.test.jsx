import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import Form from "../components/Form";
import Context from "../components/Context";

afterEach(cleanup);

describe("Form Test", () => {
  const setCardInfo = jest.fn();
  const cardInfo = {
    number: "**** **** **** ****",
    name: "Nome do titular",
    validate: "00/00",
    securityNumber: "000",
    showFront: true,
    isValidCard: false,
  };

  it("Should render Form", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Form />
      </Context.Provider>
    );

    expect(container).toBeInTheDocument();
  });

  it("Should render  with 5 Inputs and 1 Button", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Form />
      </Context.Provider>
    );

    const inputs = container.querySelectorAll("input");
    const button = container.querySelector("button");

    expect(container).toBeInTheDocument();
    expect(inputs.length).toBe(5);
    expect(button).toBeInTheDocument();
  });
});
