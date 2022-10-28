const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("acesso a url do trello", () => {
    cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").as('trello')
});

Then("valido o conteúdo do campo 'name' da estrutura 'list'", () => {
    cy.get('@trello').should((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.data.list.name).to.equal('Professional')
    })
});