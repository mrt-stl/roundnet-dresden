import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import ActionModel from "../models/action-model"
import { asText, linkResolver, asHtml } from "../utils/prismic-utils"
import TukanModel from "../models/tukan-model"
import AtmosphericModel from "../models/atmospheric-model"
import ContactModel from "../models/contact-model"
import DetailsModel from "../models/details-model"
import CardModel from "../models/card-model"
import FocusModel from "../models/focus-model"

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

const mapResultToModel = (slice: any): TukanModel | null => {
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

        case "details":
            const detailsPrimary = slice.primary
            const detailsItems: any[] = slice.items

            const detailsCards: CardModel[] = []
            for (const detailsItem of detailsItems) {
                const detailsCardTitle = asHtml(detailsItem.detail_title)
                const detailsCardContent = asHtml(detailsItem.detail_content)

                const detailsCard = new CardModel(detailsCardTitle, detailsCardContent)
                detailsCards.push(detailsCard)
            }

            const backgroundColor: string = detailsPrimary.detail_background

            const details = new DetailsModel(detailsCards, backgroundColor)
            return details

        case "focus":
            const focusPrimary = slice.primary
            const focusContent = asHtml(focusPrimary.focus_content)

            const focus = new FocusModel(focusContent)
            return focus

        default:
            return null
    }
}