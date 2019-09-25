import { create } from "react-test-renderer"
import Card from "../../../../components/pattern/card"
import { lazyLoadImageClassName } from "../../../utils"

const title = "<h1>TEST</h1>"
const content = "<p>TEST</p>"
const imgSrc = "/img"
const link = "/link"

describe("Card component", () => {
    test("has title no content", () => {
        const component = create(<Card title={title} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(1)

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(0)
    })

    test("has content no title", () => {
        const component = create(<Card content={content} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(0)

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)
    })

    test("has img", () => {
        const component = create(<Card imgSrc={imgSrc} />)
        const instance = component.root

        const imgs = instance.findAllByProps({ className: lazyLoadImageClassName })
        expect(imgs.length).toBe(1)
    })

    test("has link", () => {
        const component = create(<Card link={link} />)
        const instance = component.root

        const links = instance.findAllByType("a")
        expect(links.length).toBe(1)
    })

    test("link is target blank", () => {
        const component = create(<Card link={link} linkIsBlank={true} />)
        const instance = component.root

        const links = instance.findAllByProps({ target: "_blank" })
        expect(links.length).toBe(1)
    })
})