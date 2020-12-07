export class signUpPage {
  visit() {
    return cy.visit("/invexp/accounts/create-account/");
  }

  emailField() {
    return cy.get("#create_account_email");
  }

  firstNameField() {
    return cy.get(".-left > .ui > input");
  }

  lastNameField() {
    return cy.get(":nth-child(4) > :nth-child(2) > .ui > input");
  }

  passwordField() {
    return cy.get(".password-input-container > .input-container > .ui > input");
  }

  confirmPasswordField() {
    return cy.get(".password-confirm-input > .ui > input");
  }

  referralField() {
    return cy.get(":nth-child(7) > .ui > input");
  }

  phoneField() {
    return cy.get(":nth-child(9) > .ui > input");
  }

  addressField() {
    return cy.get(":nth-child(11) > .ui > input");
  }

  cityField() {
    return cy.get(":nth-child(12) > .ui > input");
  }

  stateDropdown() {
    return cy.get(".-left > .css-sb5ri3 > .ui > .search");
  }

  zipField() {
    return cy.get(":nth-child(13) > :nth-child(2) > .ui > input");
  }

  yesRadio() {
    return cy.get(":nth-child(1) > ._radio_e1a40");
  }

  noRadio() {
    return cy.get(":nth-child(2) > ._radio_e1a40");
  }

  tosCheckbox() {
    return cy.get(":nth-child(1) > ._field_1fb41 > ._check_1fb41");
  }

  understandCheckbox() {
    return cy.get(":nth-child(2) > ._field_1fb41 > ._check_1fb41");
  }

  accountCreationButton() {
    return cy.get(".account-creation-form-container > ._flat_d2f0c");
  }
}
