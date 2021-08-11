import Prismic from "prismic-javascript"
import { Document } from "prismic-javascript/types/documents"

const endpoint = process.env.PRISMIC_ENDPOINT
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

/**
 * Prepare prismic API
 */
const prismicApi = async () => {
    const api = await Prismic.client(endpoint, {
        accessToken,
    })
    return api
}

// Client method to query documents from the Prismic repo
export const Client = (req = null) => Prismic.client(endpoint, createClientOptions(req, accessToken))

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

/**
 * Get page by UID
 * @param type of document
 * @param uid to indentify page
 */
export const getByUid = async (type: string, uid: string, ref?: string, lang?: string) => {
    const client = await Client()

    const queryOptions: any = {
        ref,
        lang
    }

    const prismicRes = <PrismicDocumentQueryResponse>{}
    try {
        const doc: Document = await client.getByUID(type, uid, queryOptions)
        prismicRes.data = doc

        const navigation: Document = await client.getSingle("navigation", queryOptions)
        prismicRes.navigation = navigation.data

        const footer: Document = await client.getSingle("footer", queryOptions)
        prismicRes.footer = footer.data
    } catch (e) {
        console.error(e)
        prismicRes.error = "Could not get data"
    }

    return prismicRes
}

export const getByType = async (type: string) => {

    const api = await prismicApi()

    try {
        const res = await api.query(Prismic.Predicates.at("document.type", type), { lang: "*" })
        return res
    } catch (e) {
        return null
    }
}

/**
 * Get all documents
 */
export const getAll = async () => {
    const api = await prismicApi()

    const res = await api.query("", {pageSize: 100})
    return res
}

interface PrismicDocumentQueryResponse {
    error: string
    data: Document
    navigation: Document
    footer: Document
}