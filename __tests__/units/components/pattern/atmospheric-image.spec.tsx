import { create } from "react-test-renderer"
import AtmosphericImage from "../../../../components/pattern/atmospheric-image"

const imgSrc = "test"

describe("AtmosphericImage component", () => {
    test("is not null", () => {
        const component = create(<AtmosphericImage imgSrc={imgSrc} />)
        const instance = component.root
        expect(instance).not.toBeNull()
    })
})