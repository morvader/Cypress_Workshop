/// <reference types="cypress" />

context("Busqueda de productos", () => {
  beforeEach("go to home page", () => {
    cy.visit("/");
  });
  it("Búsqueda de los componentes correctos", () => {
    cy.get("[name='search']")
      .type("phone")
      .get(".input-group-btn > .btn")
      .click();

    cy.get(".product-thumb .caption > h4 > a").should("have.text", "iPhone");
  });

  it("Comprobar todos los productos", () => {
    //Podemos simular la pulsación de enter
    cy.get("[name='search']").type("Mac{enter}");

    cy.get(".product-thumb .caption > h4 > a").its("length").should("eq", 4);

    //Comprobamos que todos los elementos son visibles
    cy.get(".product-thumb .caption > h4 > a").each(($el) => {
      cy.get($el).should("contain.text", "Mac");
    });
  });
});
