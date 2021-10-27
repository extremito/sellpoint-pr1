import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Testing login page", () => {
    test("User and password exists", () => {
      render(<Login />);
      const user = screen.getByRole("textbox", {name: /user/i});
      const password = screen.getByLabelText(/password/i);
      expect(user).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });