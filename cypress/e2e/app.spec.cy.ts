describe("App Tests", async () => {

    beforeEach(() => {
        cy.visit("/app")
    })

    // Page Tests
    it("should have the App title", () => {
        cy.get("title").should("contain", "App | BoookWisePick")
    })

    it("should have h1 title", () => {
        cy.get("h2").should("contain", "Reccomended For You!")
    })
})
