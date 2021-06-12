import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange:
    render(<CheckoutForm />);

    // Act:
    const header = screen.getByText(/checkout form/i);

    // Arrange:
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();


});

test("form shows success message on submit with form details", () => {
    // Arrange:
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    const submitButton = screen.getByRole("button", { name: /checkout/i})

    // Act:
    userEvent.type(firstName, "Jacob");
    userEvent.type(lastName, "Smith");
    userEvent.type(address, "333 See You There Lane");
    userEvent.type(city, "Wakanda");
    userEvent.type(state, "WA");
    userEvent.type(zip, "40392");

    userEvent.click(submitButton);


    // Assert:

});
