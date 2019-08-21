import { create } from "react-test-renderer"
import Action from "../../../../components/pattern/action"

const content = "TEST"
const link = "/test"

describe("Action component", () => {
    test("has no link", () => {
        const component = create(<Action content={content} />)
        const instance = component.root
        const links = instance.findAllByType("a")
        expect(links.length).toBe(0)
    })

    test("has link", () => {
        const component = create(<Action content={content} link={link} />)
        const instance = component.root
        const links = instance.findAllByType("a")
        expect(links.length).toBe(1)
    })

    test("link is not target blank", () => {
        const component = create(<Action content={content} link={link} />)
        const instance = component.root
        const links = instance.findAllByProps({ target: "_blank" })
        expect(links.length).toBe(0)
    })

    test("link is target blank", () => {
        const component = create(<Action content={content} link={link} linkIsBlank={true} />)
        const instance = component.root
        const links = instance.findAllByProps({ target: "_blank" })
        expect(links.length).toBe(1)
    })
})