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

test("form shows success message on submit with form details", async () => {
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


    // Assert: (this may need await which would need findBy instead, currently getting MutationObserver error, will fix next session)
    const newFirstName = screen.getByText(/Jacob/i);
    const newLastName = screen.getByText(/Smith/i);
    const newAddress =  screen.getByText(/333 See You There Lane/i);
    const newCity =  screen.getByText(/Wakanda/i);
    const newState =  screen.getByText(/WA/i);
    const newZip =  screen.getByText(/40392/i);

    const success = screen.getByText(/You have ordered some plants!/i) 
    

    expect(newFirstName).toBeTruthy();
    expect(newLastName).toBeTruthy();
    expect(newAddress).toBeTruthy();
    expect(newCity).toBeTruthy();
    expect(newState).toBeTruthy();
    expect(newZip).toBeTruthy();

    expect(success).toBeTruthy();


});
