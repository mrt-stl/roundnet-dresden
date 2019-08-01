import sitemap from "sitemap"

/**
 * Creates sitemap
 * 
 * @param host is the standard host
 * @param pages data from all pages
 */
export const createSiteMap = (host: string, pages: Array<any>): string => {
    const urls = []

    for (const page of pages) {
        const url = createUrl(page.type, page.uid)
        urls.push({ url })
    }

    const createdSitemap = sitemap.createSitemap({
        hostname: host,
        urls,
        cacheTime: 1000 * 60 * 60 * 24
    })

    return createdSitemap.toString()
}

const createUrl = (type: string, uid: string): string => {
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