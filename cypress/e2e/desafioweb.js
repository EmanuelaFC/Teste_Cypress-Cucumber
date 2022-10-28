const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("Visito o site", () => {
    cy.visit("http://automationpractice.com/index.php");
});

When("Realizo login", () => {
    cy.get(".login").click()
    cy.get("#email").type("teste2021@teste.com.br")
    cy.get("#passwd").type("teste")
    cy.get("#SubmitLogin").click()
    cy.get(".page-heading").should("have.text", "My account")
});

When("Adiciono produto no carrinho", () => {
    cy.get("#search_query_top").type("top")
    cy.get(".button-search").click()
    cy.get(".page-heading").should("contain", "Search")
    cy.get(".product-name").last().invoke("text").as("produto")
    cy.get(".ajax_add_to_cart_button").click()
});

Then("Valido produtos inclusos no carrinho", () => {
    cy.get(".layer_cart_product h2").should("contain", "Product successfully added")
    cy.get(".button-container .btn-default.button.button-medium").click({force: true})
    cy.get(".page-heading").should("contain", "Shopping")
    cy.get(".product-name").last().then(prod => {
        cy.get("@produto").should("contain", prod.text())
    })
    
});