import { create } from "react-test-renderer"
import Focus from "../../../../components/pattern/focus"

const content = "<p>TEST</p>"

describe("Focus component", () => {
    test("has content", () => {
        const component = create(<Focus content={content} />)
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)
    })
})