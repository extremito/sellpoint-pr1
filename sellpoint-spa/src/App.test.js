import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testing the whole application", () => {
  test("Login page exist", () => {
    render(<App />);
    const user = screen.getByRole("textbox", {name: /user/i});
    const password = screen.getByLabelText(/password/i);
    expect(user).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});

