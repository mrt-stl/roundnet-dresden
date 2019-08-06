import Prismic from "prismic-javascript"
import { config } from "../config"
import { logError } from "../utils/rollbar-utils"

/**
 * Prepare prismic API
 */
const prismicApi = async () => {
    const endpoint = process.env.PRISMIC_ENDPOINT ? process.env.PRISMIC_ENDPOINT : config.PRISMIC_ENDPOINT
    const accessToken = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : config.ACCESS_TOKEN

    const api = await Prismic.api(endpoint, {
        accessToken
    })
    return api
}

/**
 * 
 * @param type of document
 * @param uid to indentify page
 */
export const getByUid = async (type: string, uid: string) => {
    const api = await prismicApi()

    const prismicFragment: string = "my." + type + ".uid"

    try {
        const res = await api.query(Prismic.Predicates.at(prismicFragment, uid), { lang: "*" })
        return res

    } catch (e) {
        logError(e)
        return { error: "Could not get data" }
    }
}

/**
 * Get all documents
 */
export const getAll = async () => {
    const api = await prismicApi()

    const res = await api.query("", {})
    return res
}