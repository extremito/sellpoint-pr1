import { render, screen } from "@testing-library/react";
import AppNav from "./AppNav";

describe("Testing application navigation bar", () => {
    test("Login appears when user is not logged", () => {
        render(<AppNav isLogged={false} />);
        const login = screen.getByRole("button", {name: /login/i});
        expect(login).toBeInTheDocument();
    });
});