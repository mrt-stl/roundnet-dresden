import Project from "../models/config/project"
import crypto from "crypto"

export const cacheControlHeader = () => {
    const project = Project.getInstance()
    const cachingTime = project.cachingTime

    return "s-maxage=" + cachingTime.toString() + ", stale-while-revalidate"
}

// Create etag from json
export const createEtag = (json: any) => {
    return crypto.createHash("md5")
        .update(JSON.stringify(json))
        .digest("hex")
}