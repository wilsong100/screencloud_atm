it("login user with wrong pin", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input[name='pin']").type("1234");
  cy.get("button[name='login_button']").click();
  cy.location("pathname").should("eq", "/");
});
it("login user with correct pin", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input[name='pin']").type("1111");
  cy.get("button[name='login_button']").click();
  cy.location("pathname").should("eq", "/accountpage");
});
