import Prismic from "prismic-javascript"
import { config } from "../config"

export const getPages = async (type) => {
    const accessToken = config.ACCESS_TOKEN

    const api = await Prismic.api(config.PRISMIC_ENDPOINT, { accessToken })
    const res = await api.query(Prismic.Predicates.at("document.type", type))
    return res
}

export const getByUid = async (type, uid) => {
    const endpoint = process.env.PRISMIC_ENDPOINT ? process.env.PRISMIC_ENDPOINT : config.PRISMIC_ENDPOINT
    const accessToken = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : config.ACCESS_TOKEN

    const api = await Prismic.api(endpoint, { accessToken })

    const res = await api.query(Prismic.Predicates.at("my.standard.uid", uid), { lang: "*" })
    return res
}