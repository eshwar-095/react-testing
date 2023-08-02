import { screen } from "@testing-library/react";
import MuiNode from "./MuiNode";
import { render } from "../../testUtils";


describe("MuiNode", () => {
  test("renders text correctly", () => {
    render(<MuiNode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
