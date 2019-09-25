import { create } from "react-test-renderer"
import ImageAndText from "../../../../components/pattern/image-and-text"
import { lazyLoadImageClassName } from "../../../utils"

const imgSrc = "/img"
const content = "<p>TEST</p>"

describe("ImageAndText component", () => {
    test("has content and image", () => {
        const component = create(<ImageAndText imgSrc={imgSrc} content={content} />)
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(1)
    })
})