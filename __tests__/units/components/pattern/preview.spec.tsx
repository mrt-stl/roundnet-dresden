import { create } from "react-test-renderer"
import Preview from "../../../../components/pattern/preview"
import { lazyLoadImageClassName } from "../../../utils"

const imgSrc = "/img"
const title = "<h1>Hello World</h1>"
const content = "<p>TEST</p>"

describe("Preview component", () => {
    test("has no image", () => {
        const component = create(<Preview title={title} content={content} />)
        const instance = component.root

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(0)
    })

    test("has image", () => {
        const component = create(<Preview title={title} content={content} imgSrc={imgSrc} />)
        const instance = component.root

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(1)
    })
})