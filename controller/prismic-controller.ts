import ApiSearchResponse from "prismic-javascript/d.ts/ApiSearchResponse"
import ActionModel from "../models/action-model"
import { asText, linkResolver, asHtml } from "../utils/prismic-utils"
import TukanModel from "../models/tukan-model"
import AtmosphericModel from "../models/atmospheric-model"
import ContactModel from "../models/contact-model"
import DetailsModel from "../models/details-model"
import CardModel from "../models/card-model"
import FocusModel from "../models/focus-model"
import HeroImageModel from "../models/hero-image-model"
import ImageAndTextModel from "../models/image-and-text-model"
import InfiniteCardsModel from "../models/infinite-cards-model"
import LocationModel from "../models/location-model"
import PreviewModel from "../models/preview-model"
import RichtextModel from "../models/richtext-model"

export const prismicPageToComponentModels = (prismicRes: ApiSearchResponse) => {
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

        case "startbild":
            const heroImagePrimary = slice.primary

            const heroImageImgSrc = heroImagePrimary.hero_image_img.url
            const heroImageImgAlt = heroImagePrimary.hero_image_img.alt
            const heroImageTitle = asText(heroImagePrimary.hero_image_title)
            const heroImageLink = linkResolver(heroImagePrimary.hero_image_link)
            const heroImageLinkContent = asText(heroImagePrimary.hero_image_link_content)
            const heroImageLinkIsBlank = heroImagePrimary.hero_image_link ? heroImagePrimary.hero_image_link.target === "_blank" : false

            const heroImage = new HeroImageModel(heroImageImgSrc, heroImageImgAlt, heroImageTitle, heroImageLink, heroImageLinkContent, heroImageLinkIsBlank)
            return heroImage

        case "image_and_text":
            const iatPrimary = slice.primary

            const iatImgSrc: string = iatPrimary.image.url
            const iatImgAlt: string = iatPrimary.image.alt
            const iatImgHeight = iatPrimary.image.dimensions.height.toString() + "px"
            const iatContent: string = asHtml(iatPrimary.content)

            const imageAndText = new ImageAndTextModel(iatImgSrc, iatContent, iatImgAlt, iatImgHeight)
            return imageAndText

        case "karte":
            const infiniteCardsItems = slice.items
            const infiniteCards: CardModel[] = []
            for (const cardsItem of infiniteCardsItems) {

                const itemTitle: string = asHtml(cardsItem.detail_title)
                const itemContent: string = asHtml(cardsItem.detail_content)
                const itemImgSrc: string = cardsItem.card_img.url
                const itemImgAlt: string = cardsItem.card_img.alt
                const itemLink: string = linkResolver(cardsItem.card_link)
                const itemLinkIsBlank = cardsItem.card_link ? cardsItem.card_link.target === "_blank" : false

                const infiniteCard = new CardModel(itemTitle, itemContent, itemImgSrc, itemImgAlt, itemLink, itemLinkIsBlank)
                infiniteCards.push(infiniteCard)
            }

            const infiniteCardsModel = new InfiniteCardsModel(infiniteCards)
            return infiniteCardsModel

        case "location":
            const locationPrimary = slice.primary

            const locationLat: number = locationPrimary.location_coords.latitude
            const locationLng: number = locationPrimary.location_coords.longitude

            const location = new LocationModel(locationLat, locationLng)
            return location

        case "preview":
            const previewPrimary = slice.primary

            const previewTitle = asText(previewPrimary.preview_title)
            const previewContent = asHtml(previewPrimary.preview_content)
            const previewImgSrc = previewPrimary.preview_image.url
            const previewImgAlt = previewPrimary.preview_image.alt

            const preview = new PreviewModel(previewTitle, previewContent, previewImgSrc, previewImgAlt)
            return preview

        case "richtext":
            const richtextPrimary = slice.primary

            const richtextContent = richtextPrimary.richtext_content

            const richtext = new RichtextModel(richtextContent)
            return richtext

        default:
            return null
    }
}