import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import ActionModel from "../models/action-model"
import { asText, linkResolver } from "../utils/prismic-utils"
import { TukanType } from "../models/tukan-types"
import TukanModel from "../models/tukan-model"

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
            const primary = slice.primary

            const content = asText(primary.action_content)
            const backgroundColor = primary.action_color
            const link = linkResolver(primary.action_link)
            const linkIsBlank = primary.action_link ? primary.action_link.target === "_blank" : false
            const linkContent = primary.action_link_text ? asText(primary.action_content) : null

            const action = new ActionModel(TukanType.Action, content, backgroundColor, link, linkIsBlank, linkContent)
            return action

        default:
            return null
    }
}