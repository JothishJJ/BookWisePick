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

    // Search Link
    it("should have a search link", () => {
        cy.get('a[data-cy="search-link"]').should("be.visible")
    })

    // Categories
    it("should have a Fiction category", () => {
        cy.get('div[data-cy="fiction-category"').should("be.visible")
    })
    it("should have a Fiction category", () => {
        cy.get('div[data-cy="non-fiction-category"').should("be.visible")
    })
    it("should have a Fiction category", () => {
        cy.get('div[data-cy="finance-category"').should("be.visible")
    })


})
