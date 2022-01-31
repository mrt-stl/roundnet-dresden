import { linkResolver, asHtml } from "../utils/prismic-utils"
import { Document } from "prismic-javascript/types/documents"
import RichtextModel from "../models/tukan/richtext-model"
import StageModel from "../models/tukan/stage-model"
import ListModel from "../models/tukan/list-model"
import CallToActionModel from "../models/tukan/call-to-action-model"
import ConnectionModel from "../models/tukan/connections-model"
import ContactModel from "../models/tukan/contact-model"
import TukanModel from "../models/tukan/tukan-model"

export const prismicPageToComponentModels = (result: Document) => {
    if (!result) {
        return null
    }

    const slices = result.data.body

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
        case "connections":
            const connectionsPrimary = slice.primary
            const connectionsItems: any = slice.items

            const connectionsHeadline = connectionsPrimary.headline
            const connectionsContent = asHtml(connectionsPrimary.content)

            const connectionsCards = []

            for (const item of connectionsItems) {
                const connection = {
                    status: item.status,
                    link: linkResolver(item.link),
                    linkTarget: item.link_target ?? "self",
                    details: asHtml(item.details),
                    img: item.image.url
                }
                connectionsCards.push(connection)
            }

            const connections = new ConnectionModel(connectionsHeadline, connectionsContent, connectionsCards)
            return connections

        case "call_to_action":
            const callToActionPrimary = slice.primary
            const ctaItems = slice.items

            const ctaHeadline = callToActionPrimary.headline
            const btns = []

            for (const item of ctaItems) {
                const btn = {
                    label: item.btn_label,
                    link: linkResolver(item.btn_link),
                    target: item.btn_link.target,
                }
                btns.push(btn)
            }

            const callToAction = new CallToActionModel(ctaHeadline, btns)
            return callToAction

        case "richtext":
            const richtextPrimary = slice.primary
            const richtextItems = slice.items

            const richtextHeadline = richtextPrimary.richtext_headline
            const multiColumns = richtextPrimary.multi_columns
            const imageSize = richtextPrimary.image_size
            const richtextContent = []

            for (const item of richtextItems) {
                const text = {
                    content: asHtml(item.content),
                }
                richtextContent.push(text)
            }

            const richtext = new RichtextModel(
                richtextHeadline,
                multiColumns,
                imageSize,
                richtextContent
            )
            return richtext

        case "stage":
            const stagePrimary = slice.primary

            const image = stagePrimary.stage_image
            const parallax = stagePrimary.stage_parallax

            const stageModel = new StageModel(image, parallax)
            return stageModel

        case "contact":
            const contactPrimary = slice.primary

            const contactHeadline = contactPrimary.headline
            const contactContent = asHtml(contactPrimary.content)
            const privacyContent = asHtml(contactPrimary.privacy_content)

            const contactModel = new ContactModel(contactHeadline, contactContent, privacyContent)
            return contactModel

        case "list":
            const servicePrimary = slice.primary
            const listItems = slice.items

            const listHeadline = servicePrimary.headline
            const content = []

            for (const item of listItems) {
                const col = {
                    content: asHtml(item.content),
                }
                content.push(col)
            }

            const serviceModel = new ListModel(listHeadline, content)

            return serviceModel

        default:
            return null
    }
}
