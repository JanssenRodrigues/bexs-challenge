import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

afterEach(cleanup);

describe("Header Test", () => {
  it("Should render Header", async () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("HEADER");
  });
});
