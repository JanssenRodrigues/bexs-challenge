import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import Button from "../components/Button/style";

afterEach(cleanup);

describe("Button Test", () => {
  it("Should render Button component without errors", async () => {
    const { container } = render(<Button />);
    expect(container).toBeInTheDocument();
  });

  it("Should verify Button component style", async () => {
    const buttonLabel = "Continuar";
    const { getByText } = render(<Button>{buttonLabel}</Button>);
    const button = getByText(buttonLabel);
    expect(button).toHaveStyle(`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 51px;
        max-width: 280px;
        padding: 18px 0;
        margin: 0 auto;
        border: none;
        background-color: #de4b4b;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;
        font-family: "SF Pro";
        font-size: 17px;
        line-height: 22px;
        cursor: pointer;
    `);
  });
});
