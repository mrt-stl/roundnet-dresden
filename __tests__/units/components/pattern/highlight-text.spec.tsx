import { create } from "react-test-renderer"
import HighlightText from "../../../../components/pattern/highlight-text"

const content = "<p>TEST</p>"

describe("HighlightText component", () => {
    test("has content", () => {
        const component = create(<HighlightText content={content} />)
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)
    })
})