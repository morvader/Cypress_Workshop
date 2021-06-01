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

    //Comprobamos que todos los elementos son correctos
    cy.get(".product-thumb .caption > h4 > a").each(($el) => {
      cy.get($el).should("contain.text", "Mac");
    });
  });

  it("Ir a detalle de producto navegando por menus", () => {
    cy.contains("Desktops")
      .parent()
      .realHover()
      .contains("Mac")
      .click()
      .get("h4 > a")
      .click();

    cy.get(".col-sm-4 > h1").should("have.text", "iMac");

    cy.get(":nth-child(4) > :nth-child(1) > h2").should(
      "contain.text",
      "$122.00"
    );
  });
});
