/// <reference types="cypress" />

context("Busqueda de productos", () => {
  beforeEach("go to home page", () => {
    cy.visit("http://automationpractice.com/index.php");
  });

  it("La blusa se muestra cone l nombre correcto", () => {
    cy.get("#search_query_top").type("Blouse").get("#searchbox > .btn").click();

    // Este localizador es más robusto que el que recomienda Cypress
    cy.get(".product_list > li:first-child .product-name").should(
      "contain.text",
      "Blouse"
    );
  });
});
