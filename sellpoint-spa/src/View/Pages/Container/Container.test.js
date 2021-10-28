import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Testing general container, that will render all pages", () => {

    test("Application nav bar visible", () => {
        render(<Container />);
        const nav = screen.getByRole({name:/navigation/i});
        expect(nav).toBeInTheDocument();
    });
    
}); 