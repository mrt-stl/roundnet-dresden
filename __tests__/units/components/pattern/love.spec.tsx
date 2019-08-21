import { create } from "react-test-renderer"
import Love from "../../../../components/pattern/love"

describe("Love component", () => {
    test("no banner", () => {
        const component = create(<Love />)
        const instance = component.root

        const loveContainer = instance.findAllByProps({ className: "love-container" })
        expect(loveContainer.length).toBe(0)
    })
})