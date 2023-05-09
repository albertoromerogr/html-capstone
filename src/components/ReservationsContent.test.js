import { render, fireEvent, screen } from "@testing-library/react";
import ReservationsContent from "./ReservationsContent";

test("Adds one", () => {
  // render the App component
  render(<ReservationsContent />);

  const element = screen.getByText("Reserve a Table");
  expect(element).toBeInTheDocument();

  // save the button in a variable
  const btn = screen.getByTestId("buttonSubmit");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(element).toHaveTextContent("Reserve a Table");
});
