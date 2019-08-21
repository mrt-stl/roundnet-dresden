import { create } from "react-test-renderer"
import InfiniteCards from "../../../../components/pattern/infinite-cards"

const title = "<h1>TEST</h1>"
const content = "<p>test</p>"

const cards = [{ title, content }]

describe("InfiniteCards component", () => {
    test("has one card", () => {
        const component = create(<InfiniteCards cards={cards} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(1)
    })

    test("has two cards", () => {
        cards.push({ title, content })

        const component = create(<InfiniteCards cards={cards} />)
        const instance = component.root

        const h1s = instance.findAllByType("h1")
        expect(h1s.length).toBe(2)
    })
})