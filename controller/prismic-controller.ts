import { linkResolver, asHtml } from "../utils/prismic-utils"
import { Document } from "prismic-javascript/types/documents"
import RichtextModel from "../models/tukan/richtext-model"
import StageModel from "../models/tukan/stage-model"
import ListModel from "../models/tukan/list-model"
import CallToActionModel from "../models/tukan/call-to-action-model"
import AccordionModel from "../models/tukan/connections-model"
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
        case "accordion":
            const accordionPrimary = slice.primary
            const accordionItems: any = slice.items

            const accordionHeadline = accordionPrimary.accordion_title
            const showMoreBtn = accordionPrimary.accordion_btn_more

            const accordion = new AccordionModel(accordionHeadline, showMoreBtn, accordionItems)
            return accordion

        case "call_to_action":
            const callToActionPrimary = slice.primary
            const ctaItems = slice.items

            const ctaHeadline = callToActionPrimary.headline
            const btns = []

            for (const item of ctaItems) {
                const btn = {
                    label: item.btn_label,
                    link: linkResolver(item.btn_label),
                    target: item.target,
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
