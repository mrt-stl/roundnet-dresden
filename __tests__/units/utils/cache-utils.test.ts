import { createEtag } from "../../../utils/cache-utils"

describe("test cache-utils", () => {
    const testJson = { title: "hello world" }
    test("test etag", () => {
        const etag = createEtag(testJson)
        expect(etag).toEqual("9fc0459dcf4f45ca9ccfa31fb33e6331")
    })
})
