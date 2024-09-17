import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../views/components/button/button";
import React from "react";

describe("Button Component", () => {
  it("should render the button with the correct text and attributes", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    // Check if the button renders with the correct text
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");

    // Check if the button has the correct role
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should forward refs correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click Me</Button>);

    // Check if the ref is correctly assigned to the button element
    expect(ref.current).toBeInTheDocument();
    expect(ref.current).toHaveTextContent("Click Me");
  });

  it("should handle onClick events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Simulate a button click
    fireEvent.click(screen.getByRole("button"));

    // Check if the click handler is called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
