import { create } from "react-test-renderer"
import Footer from "../../../../components/pattern/footer"

const rows = ["<p>TEST</p>", "<p>TEST2</p>"]
const customBgColor = "#000000"

describe("Footer component", () => {
    test("has rows", () => {
        const component = create(
            <Footer
                rows={rows} />
        )
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(2)

        const style = component.toJSON().props.style
        const backgroundColor = style?.backgroundColor
        expect(backgroundColor).toBe("var(--background)")
    })

    test("has custom background color", () => {
        const component = create(
            <Footer
                rows={rows}
                backgroundColor={customBgColor} />
        )

        const style = component.toJSON().props.style
        const backgroundColor = style?.backgroundColor
        expect(backgroundColor).toBe(customBgColor)
    })
})