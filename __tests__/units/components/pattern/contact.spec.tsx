import { create } from "react-test-renderer"
import Contact from "../../../../components/pattern/contact"

const targetMail = "test@example.org"

describe("Contact component", () => {
    const component = create(
        <Contact
            targetMail={targetMail} />
    )
    const instance = component.root

    test("test input fields", () => {
        const inputs = instance.findAllByType("input")
        expect(inputs.length).toBe(2)
    })

    test("test textarea", () => {
        const inputs = instance.findAllByType("textarea")
        expect(inputs.length).toBe(1)
    })

    test("test button", () => {
        const inputs = instance.findAllByType("button")
        expect(inputs.length).toBe(1)
    })
})