import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import Breadcrumb from "../components/Breadcrumb";

afterEach(cleanup);

describe("Breadcrumb Test", () => {
  const activeItem = "1";
  it("Should render Breadcrumb component without errors", async () => {
    const { container } = render(<Breadcrumb />);
    expect(container).toBeInTheDocument();
  });

  it("Should render a normal BreadcrumbItem without active status", async () => {
    const { getByText } = render(<Breadcrumb />);
    const step = getByText(activeItem);

    expect(step).toHaveStyle({
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
      "justify-content": "center",
      width: "22px",
      height: "22px",
      "margin-right": "8px",
      border: "2px solid #DE4B4B",
      "border-radius": "50%",
      "font-size": "13px",
      "font-weight": "bold",
      "line-height": "36px",
    });
  });

  it("Should render BreadcrumbItem with active status", async () => {
    const { getByText } = render(<Breadcrumb />);
    const step = getByText(activeItem);

    expect(step).toHaveStyle({
      "background-color": "#DE4B4B",
    });
  });
});
