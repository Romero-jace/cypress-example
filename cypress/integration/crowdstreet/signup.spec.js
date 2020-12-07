const { signUpPage } = require("../page_objects/signUpPageObject");

let firstName = cy.faker.name.firstName();
let lastName = cy.faker.name.lastName();
const email = cy.faker.internet.exampleEmail();
const password = cy.faker.internet.password();
const phone = cy.faker.phone.phoneNumber();
const address = cy.faker.address.streetAddress();
const city = cy.faker.address.city();
const zip = cy.faker.address.zipCode();

const signUp = new signUpPage();
describe("Sign Up", () => {
  beforeEach(() => {
    signUp.visit();
  });

  it("Creates user using UI form using Yes Radio", () => {
    signUp.emailField().type(email);
    signUp.firstNameField().type(firstName);
    signUp.lastNameField().type(lastName);
    signUp.passwordField().type("@" + password);
    signUp.confirmPasswordField().type("@" + password);
    signUp.referralField().type(firstName + " " + lastName);
    signUp.phoneField().type(phone);
    signUp.addressField().type(address);
    signUp.cityField().type(city);
    signUp.stateDropdown().click(); //being lazy and letting it just choose AK
    signUp.zipField().type(zip);
    signUp.yesRadio().click();
    signUp.tosCheckbox().click();
    signUp.understandCheckbox().click();

    cy.window().then((win) => {
      //handling captcha
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
    });

    cy.intercept(
      "POST",
      "invexp/investorexperience-unauth/auth/create-account?"
    ).as("accountCreated");

    signUp.accountCreationButton().click();

    cy.wait("@accountCreated").its("response.statusCode").should("eq", 200);

    cy.contains("Congrats").should("exist");
  });
});
