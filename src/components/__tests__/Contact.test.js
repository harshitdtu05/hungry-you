import { getAllByRole, render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test case for Contact Component", () => {
  test("Component working", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Button present in the Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Component has 2 input boxes", () => {
    render(<Contact />);
    //   Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    //   Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
