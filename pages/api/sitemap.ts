import { NextApiResponse } from "next"
import { getAll } from "../../networking/prismic-api"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import { createSiteMap } from "../../utils/sitemap-utils"
import Project from "../../models/config/project"

export default async (_: any, res: NextApiResponse) => {
    const allDocs: ApiSearchResponse = await getAll()

    if (allDocs.results) {
        const project = Project.getInstance()
        const sitemapStr = createSiteMap(project.url, allDocs.results)

        res.setHeader("Content-Type", "application/xml")
        res.send(sitemapStr)

    } else {
        res.setHeader("Content-Type", "application/json")
        res.status(400)
        res.send("")
    }
}