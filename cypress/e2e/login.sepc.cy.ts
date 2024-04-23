// This page is for checking the page "login"

describe("Tests for Login Page", () => {

    beforeEach(() => {
        cy.visit("localhost:3000/login")
    })

    it("should have login buttons", () => {
        cy.get("button").should("contain", "Sign In With Google")
        cy.get("button").should("contain", "Sign In With GitHub")
    })

    it("should have the text", () => {
        cy.get("p").should("contain", "Login To get choose your next Book!")
    })

})
