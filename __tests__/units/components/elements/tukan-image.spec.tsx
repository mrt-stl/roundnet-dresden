import { create } from "react-test-renderer"
import { lazyLoadImageClassName } from "../../../utils"
import TukanImage from "../../../../components/elements/tukan-image"

const imgSrc = "test.jpg"
const customHeight = "100px"

describe("ImageWithCaption component", () => {
    test("shows image with correct height", () => {
        const component = create(
            <TukanImage
                src={imgSrc}
                height={customHeight} />
        )

        const instance = component.root

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(1)

        const style = component.toJSON().props.style
        const height = style?.height
        expect(height).toBe(customHeight)
    })
})