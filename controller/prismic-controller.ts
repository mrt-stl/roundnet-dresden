import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import ActionModel from "../models/action-model"
import { asText, linkResolver } from "../utils/prismic-utils"
import { TukanType } from "../models/tukan-types"
import TukanModel from "../models/tukan-model"
import AtmosphericModel from "../models/atmospheric-model"

export const prismicPageToComponentModels = (prismicResStr: string) => {
    const prismicRes: ApiSearchResponse = JSON.parse(prismicResStr)

    const hasNoData = prismicRes.results === undefined && prismicRes.results.length <= 0
    if (hasNoData) {
        return null
    }

    const slices = prismicRes.results[0].data.body

    const componentModels: TukanModel[] = []

    for (const slice of slices) {
        const model = mapResultToModel(slice)
        if (model !== null) {
            componentModels.push(model)
        }
    }

    return componentModels
}

const mapResultToModel = (slice: any) => {
    switch (slice.slice_type) {
        case "action":
            const actionPrimary = slice.primary

            const content = asText(actionPrimary.action_content)
            const backgroundColor = actionPrimary.action_color
            const link = linkResolver(actionPrimary.action_link)
            const linkIsBlank = actionPrimary.action_link ? actionPrimary.action_link.target === "_blank" : false
            const linkContent = actionPrimary.action_link_text ? asText(actionPrimary.action_content) : null

            const action = new ActionModel(TukanType.Action, content, backgroundColor, link, linkIsBlank, linkContent)
            return action

        case "atmospheric":
            const atmoPrimary = slice.primary
            const atmoSrc = atmoPrimary.atmospheric_img ? atmoPrimary.atmospheric_img.url : ""
            const atmoAlt = atmoPrimary.atmospheric_img ? atmoPrimary.atmospheric_img.alt : null

            const atmospheric = new AtmosphericModel(TukanType.Atmospheric, atmoSrc, atmoAlt)
            return atmospheric

        default:
            return null
    }
}