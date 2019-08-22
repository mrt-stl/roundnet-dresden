import Prismic from "prismic-javascript"
import { logError } from "../utils/rollbar-utils"
import Project from "../models/config/project"
import { config } from "../config"

/**
 * Prepare prismic API
 */
const prismicApi = async () => {
    const project = Project.getInstance()

    const endpoint = project.prismicEndpoint ? project.prismicEndpoint : config.PRISMIC_ENDPOINT
    const accessToken = project.prismicAccessToken ? project.prismicAccessToken : config.ACCESS_TOKEN

    const api = await Prismic.api(endpoint, {
        accessToken
    })
    return api
}

/**
 * Get page by UID
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