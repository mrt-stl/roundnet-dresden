import { getLanguageCode } from "../../../utils/lang-utils"

describe("test lang-utils", () => {
    const testDe = "de-de"
    test("test de-de", () => {
        const code = getLanguageCode(testDe)
        expect(code).toBe("de")
    })

    const testEn = "en-gb"
    test("test en-gb", () => {
        const code = getLanguageCode(testEn)
        expect(code).toBe("en")
    })

    const testEmpty = ""
    test("test empty", () => {
        const code = getLanguageCode(testEmpty)
        expect(code).toBe("de")
    })
})