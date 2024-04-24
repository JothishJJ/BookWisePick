describe("App Tests", async () => {

    beforeEach(() => {
        cy.visit("/app")
    })

    it("should have h1 title", () => {
        cy.get("h2").should("contain", "Reccomended For You!")
    })
})
