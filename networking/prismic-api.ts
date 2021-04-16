import Prismic from "prismic-javascript"
import { logError } from "../utils/rollbar-utils"
import { config } from "../config"
import PrismicResponse from "../models/prismic/response"
import ResolvedApi from "prismic-javascript/d.ts/ResolvedApi"
import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"

/**
 * Prepare prismic API
 */
const prismicApi = async () => {

    const endpoint = config.PRISMIC_ENDPOINT
    const accessToken = config.ACCESS_TOKEN

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

    const prismicRes = new PrismicResponse()
    try {
        const res: IPrismicQueryPromise[] = await getDataFromPrismic(api, type, uid)

        const content = res.find(result => result?.value?.key === "content")
        prismicRes.data = content?.value?.data

        const footer = res.find(result => result?.value?.key === "footer")
        prismicRes.footer = footer?.value?.data

        const navigation = res.find(result => result?.value?.key === "navigation")
        prismicRes.navigation = navigation?.value?.data

    } catch (e) {
        logError(e)
        prismicRes.error = "Could not get data"
    }

    return prismicRes
}

/**
 * Create promises for getting data.
 */
const getDataFromPrismic = (api: ResolvedApi, type: string, uid: string): any => {
    const queries: Array<Promise<IPrismicQueryResponse>> = []

    // Query for content
    const prismicFragment: string = "my." + type + ".uid"
    const uidPredicate = Prismic.Predicates.at(prismicFragment, uid)
    queries.push(performPrismicRequest(api, "content", uidPredicate))

    // Query for footer
    const footerPredicate = Prismic.Predicates.at("document.type", "footer")
    queries.push(performPrismicRequest(api, "footer", footerPredicate))

    // Query for nav
    const navPredicate = Prismic.Predicates.at("document.type", "navigation")
    queries.push(performPrismicRequest(api, "navigation", navPredicate))

    const promise = Promise.allSettled(queries)
    return promise
}

/**
 * Perform request for getting data from prismic.
 */
const performPrismicRequest = async (api: ResolvedApi, key: string, predicate: string): Promise<IPrismicQueryResponse> => {
    const res = await api.query(predicate, { lang: "*" })

    return {
        key,
        data: res
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

enum AllSettledStatus {
    FULFILLED = "fulfilled",
    REJECTED = "rejected"
}

interface IPrismicQueryPromise {
    status: AllSettledStatus
    value?: IPrismicQueryResponse
}

interface IPrismicQueryResponse {
    key: string
    data: ApiSearchResponse
}