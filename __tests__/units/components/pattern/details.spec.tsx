import { create } from "react-test-renderer"
import Details from "../../../../components/pattern/details"

const title = "<h1>TEST</h1>"
const content = "<p>test</p>"

const cards = [{ title, content }]

describe("Details component", () => {
    test("has one card", () => {
        const component = create(<Details cards={cards} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(1)
    })

    test("has two cards", () => {
        cards.push({ title, content })

        const component = create(<Details cards={cards} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(2)
    })
})