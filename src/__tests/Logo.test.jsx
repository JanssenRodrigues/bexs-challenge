import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { Logo } from "../components/Logo/style";

afterEach(cleanup);

describe("Logo Test", () => {
  it("Should render Logo Component without errors", async () => {
    const { container } = render(<Logo />);
    expect(container.firstChild.nodeName).toBe("IMG");
    expect(container.firstChild.getAttribute("src")).toContain("logo.svg");
    expect(container.firstChild.getAttribute("alt")).toBe("Demo Shop logo");
  });
});
