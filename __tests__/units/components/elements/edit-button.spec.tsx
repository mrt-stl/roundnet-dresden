import { create } from "react-test-renderer"
import EditButton from "../../../../components/elements/edit-button"

/**
 * This is a snapshot test. A snapshot test is taking when the component
 * doesn't change that often. Avoid snapshot testing if the component is
 * about to change often. Marker component should not change this often.
 */

const testDocId = "test doc id"

describe("Marker component", () => {
    test("Matches the snapshot", () => {
        const editBtn = create(
            <EditButton
                docId={testDocId} />
        )
        expect(editBtn.toJSON()).toMatchSnapshot()
    })
})