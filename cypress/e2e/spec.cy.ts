// describe("test connection with homepage", () => {
//   it("visits main homepage", () => {
//     cy.visit("https://desafio-fullstack-front.vercel.app/");
//   });
// });

// describe("test if you can go to register page", () => {
//   it("test button cadastre-se", () => {
//     cy.visit("https://desafio-fullstack-front.vercel.app/");

//     cy.contains("Cadastre-se").click();
//   });
// });

// describe("test if the url has the correct atributte", () => {
//   it("test url link", () => {
//     cy.visit("https://desafio-fullstack-front.vercel.app/");

//     cy.contains("Cadastre-se").click();

//     cy.url().should("include", "/register");
//   });
// });

// describe("test if you can register", () => {
//   it("register user", () => {
//     cy.visit("https://desafio-fullstack-front.vercel.app/");

//     cy.contains("Cadastre-se").click();

//     cy.url().should("include", "/register");

//     cy.get("#fullName").type("faker");
//     cy.get("#email").type("fake100@email.com");
//     cy.get("#cellphone").type("303233345");
//     cy.get("#password").type("1234");
//     cy.get("#userPasswordCheck").type("1234");

//     cy.contains("Registrar").click();
//     cy.url().should("include", "/login");
//   });
// });

// describe("test if you can login", () => {
//   it("login user", () => {
//     cy.visit("https://desafio-fullstack-front.vercel.app/");

//     cy.get("#email").type("fake100@email.com");

//     cy.get("#password").type("1234");

//     cy.contains("Entrar").click();

//     cy.url().should("include", "/dashboard");
//   });
// });
