describe("test connection with homepage", () => {
  it("visits main homepage", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("test if comic books are entering in cart after clicking a button", () => {
  it("add to cart", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("Comprar").click();
  });
});

describe("test if comic books can be removed from cart by trash icon", () => {
  it("remove from cart", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("Comprar").click();
    cy.get("#trashCan").click();
  });
});

describe("test if button remove all from cart is working", () => {
  it("remove all from cart", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("Comprar").click();
    cy.contains("Limpar carrinho").click();
  });
});

describe("test if can be redirected to comic page", () => {
  it("go to comic page", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#linkComic").click();
    cy.url().should("include", "/hq");
  });
});

describe("test if cupons are working", () => {
  it("validate cupons", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("Comprar").click();
    cy.get("#applyCoupon").type("notRare10");
    cy.contains("Aplicar").click();
    cy.get('[type="text"]').clear();
    cy.get("#applyCoupon").type("notRare10");
    cy.contains("Aplicar").click();
  });
});
