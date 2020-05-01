describe("Index", () => {
    it("successfully loads", () => {
        cy.visit("/")
    })

    it("set cookie", () => {
        cy.get(".cookie-container").within(() => {
            cy.get(".button").click()

            const expectedValue = JSON.stringify({ acceptedCookie: true })
            cy.getCookie("settings").should("be.property", "value", expectedValue)

            cy.get(".button").should("not.exist")
        })
    })

    it("fill in contact form", () => {
        cy.get(".contact-container").within(() => {
            cy.get("input[name=fname]").type("Test Example")
            cy.get("textarea").type("Stadtteilliebe ist kein Verbrechen")

            cy.get("button").click()
        })
    })

    it("test cart link", () => {
        cy.get(".cart-link-container").within(() => {
            cy.get("a").click()
        })
    })
})