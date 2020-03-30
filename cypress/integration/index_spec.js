describe("Index", () => {
    it("successfully loads", () => {
        cy.visit("/")
    })

    it("set cookie", () => {
        cy.get(".cookie-container").within(() => {
            cy.get(".text-right").click()

            const expectedValue = JSON.stringify({ acceptedCookie: true })
            cy.getCookie("settings").should("be.property", "value", expectedValue)

            cy.get(".text-right").should("not.exist")
        })
    })

    it("fill in contact form", () => {
        cy.get(".contact-container").within(() => {
            cy.get("input[name=fname]").type("Test Example")
            cy.get("input[name=email]").type("alex@stadtteilliebe.de")
            cy.get("textarea").type("Stadtteilliebe ist kein Verbrechen")

            cy.get("button").click()
        })
    })
})