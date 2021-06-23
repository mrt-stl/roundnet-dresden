import crypto from "crypto"

export const cacheControlHeader = () => {

    return "s-maxage=0, stale-while-revalidate"
}

// Create etag from json
export const createEtag = (json: any) => {
    return crypto.createHash("md5")
        .update(JSON.stringify(json))
        .digest("hex")
}