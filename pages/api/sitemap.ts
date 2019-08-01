import { NextApiRequest, NextApiResponse } from "next"
import { getAll } from "../../networking/prismic-api"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import sitemap from "sitemap"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const allDocs: ApiSearchResponse = await getAll()

    if (allDocs.results) {
        const sitemapStr = createSiteMap(allDocs.results)
        
        res.setHeader("Content-Type", "application/xml")
        res.send(sitemapStr)

    } else {
        res.setHeader("Content-Type", "application/json")
        res.status(400)
        res.send("")
    }
}

const createSiteMap = (pages: Array<any>) => {
    const urls = []

    for (const page of pages) {
        const url = createUrl(page.type, page.uid)
        urls.push({ url })
    }

    const createdSitemap = sitemap.createSitemap({
        hostname: process.env.URL,
        urls,
        cacheTime: 1000 * 60 * 60 * 24
    })

    return createdSitemap.toString()
}

const createUrl = (type: string, uid: string) => {
    const urlId = uid === "home" ? "" : uid

    let url: string
    switch (type) {
        case "blog":
            url = "/blog/" + uid
            break

        default:
            url = "/" + urlId
            break
    }

    return url
}
