import { create } from "react-test-renderer"
import Marker from "../../../../components/elements/marker"

/**
 * This is a snapshot test. A snapshot test is taking when the component
 * doesn't change that often. Avoid snapshot testing if the component is
 * about to change often. Marker component should not change this often.
 */

describe("Marker component", () => {
    test("Matches the snapshot", () => {
        const marker = create(<Marker />)
        expect(marker.toJSON()).toMatchSnapshot()
    })
})