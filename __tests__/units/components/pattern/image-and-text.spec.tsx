import { create } from "react-test-renderer"
import ImageAndText from "../../../../components/pattern/image-and-text"

const imgSrc = "/img"
const content = "<p>TEST</p>"

describe("ImageAndText component", () => {
    test("has content and image", () => {
        const component = create(<ImageAndText imgSrc={imgSrc} content={content} />)
        const instance = component.root

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)

        const imgs = instance.findAllByProps({ className: "lazyload-placeholder" })
        expect(imgs.length).toBe(1)
    })

    test("height is 200px", () => {
        const component = create(<ImageAndText imgSrc={imgSrc} content={content} imgHeight={200} />)
        const instance = component.root

        const imgs = instance.findAllByProps({ height: "200px" })
        expect(imgs.length).toBe(1)
    })

    test("height is auto", () => {
        const component = create(<ImageAndText imgSrc={imgSrc} content={content} />)
        const instance = component.root

        const imgs = instance.findAllByProps({ height: "auto" })
        expect(imgs.length).toBe(1)
    })
})