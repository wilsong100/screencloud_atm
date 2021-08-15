it("test status code 200 and correct response", () => {
  var pin = { pin: "1111" };
  var balance = {
    currentBalance: 220,
  };
  cy.request(
    "POST",
    "https://frontend-challenge.screencloud-michael.vercel.app/api/pin/",
    pin
  ).then((response) => {
    expect(response.status).equal(200);
    expect(response.body.currentBalance).equal(balance.currentBalance);
  });
  cy.request(
    "POST",
    "https://frontend-challenge.screencloud-michael.vercel.app/api/pin/",
    pin
  )
    .its("body")
    .should("include", { currentBalance: 220 });
});

it("test status code 403 and error response", () => {
  // var pin = { pin: "2222" };
  var error = { error: "Incorrect or missing PIN." };
  cy.request({
    method: "POST",
    url: "https://frontend-challenge.screencloud-michael.vercel.app/api/pin/",
    body: { pin: "1234" },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).equal(403);
    expect(response.body.error).equal(error.error);
  });
});
