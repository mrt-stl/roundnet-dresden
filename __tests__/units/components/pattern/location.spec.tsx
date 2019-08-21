import { create } from "react-test-renderer"
import Location from "../../../../components/pattern/location"

const lat = 51.53
const lng = 13.62

describe("Location component", () => {
    test("has content", () => {
        const component = create(<Location lat={lat} lng={lng} />)
        const instance = component.root

        const maps = instance.findAllByProps({ className: "lazyload-placeholder" })
        expect(maps.length).toBe(1)
    })
})