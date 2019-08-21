import { create } from "react-test-renderer"
import HeroImage from "../../../../components/pattern/hero-image"

const imgSrc = "/img"
const title = "<h1>TEST</h1>"
const link = "/link"

describe("HeroImage component", () => {
    test("has no links", () => {
        const component = create(<HeroImage imgSrc={imgSrc} />)
        const instance = component.root

        const links = instance.findAllByType("a")
        expect(links.length).toBe(0)

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(1)
    })

    test("has link", () => {
        const component = create(<HeroImage imgSrc={imgSrc} link={link} />)
        const instance = component.root

        const links = instance.findAllByType("a")
        expect(links.length).toBe(1)

        const ps = instance.findAllByType("p")
        expect(ps.length).toBe(0)
    })

    test("link is target blank", () => {
        const component = create(<HeroImage imgSrc={imgSrc} link={link} linkIsBlank={true} />)
        const instance = component.root

        const links = instance.findAllByProps({ target: "_blank" })
        expect(links.length).toBe(1)
    })

    test("has no title", () => {
        const component = create(<HeroImage imgSrc={imgSrc} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(0)
    })

    test("has title", () => {
        const component = create(<HeroImage imgSrc={imgSrc} title={title} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(1)
    })
})