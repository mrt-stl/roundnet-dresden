import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import ActionModel from "../models/action-model"
import { asText, linkResolver, asHtml } from "../utils/prismic-utils"
import TukanModel from "../models/tukan-model"
import AtmosphericModel from "../models/atmospheric-model"
import ContactModel from "../models/contact-model"

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

            const actionContent = asText(actionPrimary.action_content)
            const actionBackgroundColor = actionPrimary.action_color
            const actionLink = linkResolver(actionPrimary.action_link)
            const actionLinkIsBlank = actionPrimary.action_link ? actionPrimary.action_link.target === "_blank" : false
            const actionLinkContent = actionPrimary.action_link_text ? asText(actionPrimary.action_content) : null

            const action = new ActionModel(actionContent, actionBackgroundColor, actionLink, actionLinkIsBlank, actionLinkContent)
            return action

        case "atmospheric":
            const atmoPrimary = slice.primary

            const atmoSrc = atmoPrimary.atmospheric_img ? atmoPrimary.atmospheric_img.url : ""
            const atmoAlt = atmoPrimary.atmospheric_img ? atmoPrimary.atmospheric_img.alt : null

            const atmospheric = new AtmosphericModel(atmoSrc, atmoAlt)
            return atmospheric

        case "contact":
            const contactPrimary = slice.primary

            const contactMail = contactPrimary.contact_targetmail
            const contactTitle = asHtml(contactPrimary.contact_title)
            const contactContent = asHtml(contactPrimary.contact_content)

            const contact = new ContactModel(contactMail, contactTitle, contactContent)
            return contact

        default:
            return null
    }
}