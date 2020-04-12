import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import React from "react";

import Menu from "../components/Menu";

afterEach(cleanup);

describe("Logo Test", () => {
  it("Should render Logo Component without errors", async () => {
    const { container } = render(<Menu />);

    expect(container.firstChild.nodeName).toBe("NAV");
    expect(container.firstChild).toHaveStyle(`
        display: flex;
        flex-direction: row;
        width: 640px;
    `);
  });
});
