import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Adds one", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
