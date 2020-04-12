import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import Input from "../components/Input";
import Context from "../components/Context";

afterEach(cleanup);

describe("Input Test", () => {
  const setCardInfo = jest.fn();
  const cardInfo = {
    number: "**** **** **** ****",
    name: "Nome do titular",
    validate: "00/00",
    securityNumber: "000",
    showFront: true,
    isValidCard: false,
  };
  const inputName = "name";
  const placeholder = "Placeholder";
  const newValueToChange = "New value is better!";

  it("Should render Input", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Input inputName={inputName} placeholder={placeholder} />
      </Context.Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it("Should render Input with correct style", async () => {
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Input inputName={inputName} placeholder={placeholder} />
      </Context.Provider>
    );

    expect(container.firstChild).toHaveStyle(`
        width: 100%;
        position: relative;
        margin-bottom: 44px;
    `);
  });

  it("Should render Input with correct value on change", async () => {
    const validateForm = jest.fn();
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Input
          inputName={inputName}
          placeholder={placeholder}
          validateForm={validateForm}
        />
      </Context.Provider>
    );

    const input = container.querySelector("input");

    fireEvent.change(input, { target: { value: newValueToChange } });
    expect(input.value).toBe(newValueToChange);
  });

  it("Should animate placeholder on Input Focus/Change", async () => {
    const validateForm = jest.fn();
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Input
          inputName={inputName}
          placeholder={placeholder}
          validateForm={validateForm}
        />
      </Context.Provider>
    );

    const input = container.querySelector("input");
    const placeholderComponent = container.querySelector("span");
    input.focus();
    fireEvent.change(input, { target: { value: newValueToChange } });
    expect(placeholderComponent).toHaveStyle(`
      transform: translateY(-16px) scale(0.8);
      transform-origin: 0 0;
    `);
  });

  it("Should render error on focus out", async () => {
    const validateForm = jest.fn();
    const { container } = render(
      <Context.Provider value={[cardInfo, setCardInfo]}>
        <Input
          inputName={inputName}
          placeholder={placeholder}
          validateForm={validateForm}
        />
      </Context.Provider>
    );

    const input = container.querySelector("input");
    input.focus();
    fireEvent.change(input, { target: { value: "ERROR" } });
    input.blur();
    const [, errorComponent] = container.querySelectorAll("span");
    expect(errorComponent).toBeInTheDocument();
    expect(errorComponent).toHaveStyle(`
      color: #eb5757;
      font-size: 14px;
      line-height: 22px;
      margin-top: 2px;
      position: absolute;
      left: 0;
      bottom: -20px;
    `);
  });
});
