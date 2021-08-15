it("user clicks on withdraw button to go to withdrawpage", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input[name='pin']").type("1111");
  cy.get("button[name='login_button']").click();
  cy.location("pathname").should("eq", "/accountpage");
  cy.get("button[name='withdraw_button']").click();
  cy.location("pathname").should("eq", "/withdrawpage");
});
