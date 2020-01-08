import { isLink } from "../../../utils/link-utils"

describe("test link-utils", () => {
    const testLink = "https://images.prismic.io/standard/67a7110bf8870726a4b2f85010fa53c292cf1757_tukan_1920.jpg?auto=compress,format"
    test("test link string", () => {
        const shouldBeLink = isLink(testLink)
        expect(shouldBeLink).toBe(true)
    })

    const testNoLink = "Home"
    test("test normal string", () => {
        const shouldNotBeLink = isLink(testNoLink)
        expect(shouldNotBeLink).toBe(false)
    })
})