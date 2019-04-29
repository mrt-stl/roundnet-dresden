import Prismic from "prismic-javascript"
import { config } from "../config"

export const getPages = async(type) => {
    const accessToken = config.ACCESS_TOKEN
    
    const api = await Prismic.api(config.PRISMIC_ENDPOINT, { accessToken })
    const res = await api.query(Prismic.Predicates.at("document.type", type))
    return res
}

export const getByUid = async (type, uid) => {
    const accessToken = config.ACCESS_TOKEN
    const api = await Prismic.api(config.PRISMIC_ENDPOINT, { accessToken })

    const res = await api.getByUID(type, uid)
    return res
}