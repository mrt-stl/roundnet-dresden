import { create } from "react-test-renderer"
import Richtext from "../../../../components/pattern/richtext"

const content = "<p>TEST</p>"

describe("Richtext component", () => {
    test("has content", () => {
        const component = create(<Richtext content={content} />)
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)
    })
})