import { NextApiResponse } from "next"
import { getAll } from "../../networking/prismic-api"
import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse"
import { createSiteMap } from "../../utils/sitemap-utils"

export default async (_: any, res: NextApiResponse) => {
    const allDocs: ApiSearchResponse = await getAll()

    if (allDocs.results) {
        const sitemapStr = createSiteMap(process.env.url, allDocs.results)

        res.setHeader("Content-Type", "application/xml")
        res.send(sitemapStr)

    } else {
        res.setHeader("Content-Type", "application/json")
        res.status(400)
        res.send("")
    }
}