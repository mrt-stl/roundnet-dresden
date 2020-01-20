import { linkResolver, asText, asHtml } from "../../../utils/prismic-utils"

describe("test prismic-utils", () => {
    const webLink = {
        link_type: "Web",
        url: "https://stadtteilliebe.de"
    }

    test("resolve web link", () => {
        const etag = linkResolver(webLink)
        expect(etag).toEqual("https://stadtteilliebe.de")
    })

    const photoLink = {
        type: "photo",
        uid: "stadtteil"
    }

    test("resolve photo link", () => {
        const link = linkResolver(photoLink)
        expect(link).toEqual("/photo/stadtteil")
    })

    const blogLink = {
        type: "blog",
        uid: "pwa"
    }

    test("resolve blog link", () => {
        const link = linkResolver(blogLink)
        expect(link).toEqual("/blog/pwa")
    })

    const standardLink = {
        type: "standard",
        uid: "tukan"
    }

    test("resolve standard link", () => {
        const link = linkResolver(standardLink)
        expect(link).toEqual("/tukan")
    })

    const noLink = {
        link_type: "Any"
    }
    test("resolve no link", () => {
        const link = linkResolver(noLink)
        expect(link).toBeNull()
    })

    const pElement = [
        {
            type: "paragraph",
            text: "Content",
            spans: []
        }
    ]

    test("test text conversion", () => {
        const htmlString = asText(pElement)
        expect(htmlString).toEqual("Content")
    })

    test("test html conversion", () => {
        const htmlString = asHtml(pElement)
        expect(htmlString).toEqual("<p>Content</p>")
    })

    test("test html conversion for undefined", () => {
        const htmlString = asHtml(undefined)
        expect(htmlString).toEqual(null)
    })
})
