import { create } from "react-test-renderer"
import ImageWithCaption from "../../../../components/pattern/image-with-caption"
import { lazyLoadImageClassName } from "../../../utils"

const imgSrc = "test.jpg"
const videoSrc = "test.mp4"

describe("ImageWithCaption component", () => {
    test("shows image", () => {
        const component = create(
            <ImageWithCaption
                videoSrc={null}
                imgSrc={imgSrc} />
        )
        const instance = component.root

        const iframes = instance.findAllByType("iframe")
        expect(iframes.length).toBe(0)

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(1)
    })

    test("shows video", () => {
        const component = create(
            <ImageWithCaption
                videoSrc={videoSrc}
                imgSrc={imgSrc} />
        )
        const instance = component.root

        const iframes = instance.findAllByType("iframe")
        expect(iframes.length).toBe(1)

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(0)
    })
})