// import { mount } from "@cypress/react";
// import Balance from "../../../src/Components/Balance";

/* Attempted to mount the balance component but encountered errors with
configuring cypress with @cypress/react */
it("user enters a valid amount to withdraw", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input[name='pin']").type("1111");
  cy.get("button[name='login_button']").click();
  cy.location("pathname").should("eq", "/accountpage");
  cy.get("button[name='withdraw_button']").click();
  cy.location("pathname").should("eq", "/withdrawpage");
  cy.get("input[name='withdraw_amount']").type("140");
  cy.get("button[name='withdraw_button']").click();
  cy.location("pathname").should("eq", "/accountpage");
  //   mount(<Balance />);
  cy.get("label[name='balance']").contains("80");
});

it("user enters invalid amount - not a multiple of 5", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input[name='pin']").type("1111");
  cy.get("button[name='login_button']").click();
  cy.location("pathname").should("eq", "/accountpage");
  cy.get("button[name='withdraw_button']").click();
  cy.location("pathname").should("eq", "/withdrawpage");
  cy.get("input[name='withdraw_amount']").type("3");
  cy.get("button[name='withdraw_button']").click();
  cy.location("pathname").should("eq", "/withdrawpage");
});
