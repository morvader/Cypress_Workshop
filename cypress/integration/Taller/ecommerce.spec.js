/// <reference types="cypress" />

context("Busqueda de productos", () => {
  beforeEach("go to home page", () => {
    cy.visit("/");
  });

  it("La blusa se muestra cone l nombre correcto", () => {
    cy.get("#search_query_top").type("Blouse").get("#searchbox > .btn").click();

    // Este localizador es más robusto que el que recomienda Cypress
    cy.get(".product_list > li:first-child .product-name").should(
      "contain.text",
      "Blouse"
    );
  });

  it("Todos los productos estás disponibles", () => {
    //Podemos simular la pulsación de enter
    cy.get("#search_query_top").type("Dress{enter}");

    cy.get(
      ".product-container > .right-block > .availability > .available-now"
    ).each(($el) => {
      cy.get($el).should("be.visible");
    });
  });
});
