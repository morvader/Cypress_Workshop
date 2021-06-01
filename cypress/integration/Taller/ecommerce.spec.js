/// <reference types="cypress" />

context("Busqueda de productos", () => {
  beforeEach("go to home page", () => {
    cy.visit("http://opencart.abstracta.us/");
  });

  it("Búsqueda de los componentes correctos", () => {
    cy.get("[name='search']")
      .type("phone")
      .get(".input-group-btn > .btn")
      .click();

    cy.get(".product-thumb .caption > h4 > a").should("have.text", "iPhone");
  });
});
