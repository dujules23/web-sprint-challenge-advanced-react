import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    
    //Arrange
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole("button", {name: /checkout/i});

    //Data rendered on screen
    // const newFirstNameInput = screen.findByText(/sam/i);
    // const newLastNameInput = screen.findByText(/smith/i);
    // const newAddressInput = screen.findByText(/123 see you later road/i);
    // const newCityInput = screen.findByText(/Orlando/i);
    // const newStateInput = screen.findByText(/FL/i);
    // const newZipInput = screen.findByText(/28997/);

    //Act
    userEvent.type(firstNameInput, 'Sam');
    userEvent.type(lastNameInput, "Smith");
    userEvent.type(addressInput, "123 see you later road");
    userEvent.type(cityInput, "Orlando");
    userEvent.type(stateInput, "FL");
    userEvent.type(zipInput, "28997");
    userEvent.click(checkoutButton);


    //Assert
    const newFirstNameInput = screen.findByText(/sam/i);
    
    newFirstNameInput.then((element) =>{
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    })

   
});
