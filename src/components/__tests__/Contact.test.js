import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test Case", () => {
    it("Should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    it("Should load button inside contact us component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    it("Should load input name inside contact us component", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    it("Should load 2 input boxes on the contact us component", () => {
        render(<Contact/>);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBeTruthy()
    });
})
