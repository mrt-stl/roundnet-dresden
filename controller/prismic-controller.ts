
import { asText, linkResolver, asHtml } from "../utils/prismic-utils"
import { Document } from "prismic-javascript/d.ts/documents"
import LocationModel from "../models/tukan/location-model"
import RichtextModel from "../models/tukan/richtext-model"
import StageModel from "../models/tukan/stage-model"
import ServiceModel from "../models/tukan/service-model"
import CallToActionModel from "../models/tukan/call-to-action-model"
import AccordionModel from "../models/tukan/accordion-model"
import TukanModel from "../models/tukan/tukan-model"
import HeroImageModel from "../models/tukan/hero-image-model"

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

        case "startbild":
            const heroImagePrimary = slice.primary

            const heroImageImgSrc = heroImagePrimary.hero_image_img.url
            const heroImageImgAlt = heroImagePrimary.hero_image_img.alt
            const heroImageTitle = asText(heroImagePrimary.hero_image_title)
            const heroImageLink = linkResolver(heroImagePrimary.hero_image_link)
            const heroImageLinkContent = asText(heroImagePrimary.hero_image_link_content)
            const heroImageLinkIsBlank = heroImagePrimary.hero_image_link
                ? heroImagePrimary.hero_image_link.target === "_blank"
                : false

            const heroImage = new HeroImageModel(
                heroImageImgSrc,
                heroImageImgAlt,
                heroImageTitle,
                heroImageLink,
                heroImageLinkContent,
                heroImageLinkIsBlank
            )
            return heroImage

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

        case "location":
            const locationPrimary = slice.items

            const items: any = locationPrimary

            const location = new LocationModel(items)
            return location

        case "richtext":
            const richtextPrimary = slice.primary

            const richtextContent = asHtml(richtextPrimary.richtext_content)

            const richtext = new RichtextModel(richtextContent)
            return richtext

        case "stage":
            const stagePrimary = slice.primary

            const stageHeadline = asText(stagePrimary.stage_headline)
            const stageContent = asHtml(stagePrimary.stage_content)
            const stageBtnLabel = stagePrimary.stage_btn_label
            const stageBtnLink = linkResolver(stagePrimary.stage_btn_link)
            const stageBackgroundImage = stagePrimary.stage_background_image

            const stageModel = new StageModel(
                stageHeadline,
                stageContent,
                stageBtnLabel,
                stageBtnLink,
                stageBackgroundImage
            )
            return stageModel

        case "service":
            const servicePrimary = slice.primary
            const serviceItems = slice.items

            const serviceHeadline = asHtml(servicePrimary.service_headline)
            const serviceContent = asHtml(servicePrimary.service_content)
            const serviceBackground = servicePrimary.service_background
            const serviceCols = []

            for (const item of serviceItems) {
                const col = {
                    data: asHtml(item.service_col),
                    link: linkResolver(item.service_link),
                    background: item.service_col_background,
                }
                serviceCols.push(col)
            }

            const serviceModel = new ServiceModel(
                serviceHeadline,
                serviceContent,
                serviceBackground,
                serviceCols
            )

            return serviceModel

        default:
            return null
    }
}
