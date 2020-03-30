describe("Index", () => {
    it("successfully loads", () => {
        cy.visit("/")
    })

    it("set cookie", () => {
        cy.visit("/")

        cy.get(".cookie-container").within(() => {
            cy.get(".text-right").click()

            const expectedValue = JSON.stringify({ acceptedCookie: true })
            cy.getCookie("settings").should("be.property", "value", expectedValue)

            cy.get(".text-right").should("not.exist")
        })
    })
})