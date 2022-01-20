import { linkResolver, asHtml } from "../utils/prismic-utils"
import { Document } from "prismic-javascript/types/documents"
import RichtextModel from "../models/tukan/richtext-model"
import StageModel from "../models/tukan/stage-model"
import ListModel from "../models/tukan/list-model"
import CallToActionModel from "../models/tukan/call-to-action-model"
import AccordionModel from "../models/tukan/accordion-model"
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

            const headline = asHtml(callToActionPrimary.cta_headline)
            const subtitle = asHtml(callToActionPrimary.cta_subtitle)
            const contentLeft = asHtml(callToActionPrimary.cta_content_left)
            const contentRight = asHtml(callToActionPrimary.cta_content_right)

            const callToAction = new CallToActionModel(
                headline,
                subtitle,
                contentLeft,
                contentRight
            )
            return callToAction

        case "richtext":
            const richtextPrimary = slice.primary

            const richtextContent = asHtml(richtextPrimary.richtext_content)

            const richtext = new RichtextModel(richtextContent)
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
