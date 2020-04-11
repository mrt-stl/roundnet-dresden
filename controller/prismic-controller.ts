import ActionModel from "../models/tukan/action-model"
import { asText, linkResolver, asHtml } from "../utils/prismic-utils"
import { Document } from "prismic-javascript/d.ts/documents"
import TukanModel from "../models/tukan/tukan-model"
import AtmosphericModel from "../models/tukan/atmospheric-model"
import ContactModel from "../models/tukan/contact-model"
import DetailsModel from "../models/tukan/details-model"
import CardModel from "../models/tukan/card-model"
import FocusModel from "../models/tukan/focus-model"
import HeroImageModel from "../models/tukan/hero-image-model"
import ImageAndTextModel from "../models/tukan/image-and-text-model"
import InfiniteCardsModel from "../models/tukan/infinite-cards-model"
import LocationModel from "../models/tukan/location-model"
import PreviewModel from "../models/tukan/preview-model"
import RichtextModel from "../models/tukan/richtext-model"
import StageBlogModel from "../models/tukan/stage-blog-model"
import HighlightTextModel from "../models/tukan/highlight-text-model"
import FooterModel from "../models/tukan/footer-model"
import ImageWithCaptionModel from "../models/tukan/image-with-caption-model"
import HeadlineModel from "../models/tukan/headline-model"
import ColRichtextModel from "../models/tukan/col-richtext-model"
import ShopifyProductModel from "../models/tukan/shopify-product-model"
import MultiFunctionalModel from "../models/tukan/multi-functional-model"
import PaypalExpressProductModel from "../models/tukan/paypal-express-product-model"

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
        case "action":
            const actionPrimary = slice.primary

            const actionContent = asText(actionPrimary.action_content)
            const actionBackgroundColor = actionPrimary.action_color
            const actionLink = linkResolver(actionPrimary.action_link)
            const actionLinkIsBlank = actionPrimary.action_link ? actionPrimary.action_link.target === "_blank" : false
            const actionLinkContent = actionPrimary.action_link_text ? asText(actionPrimary.action_link_text) : null

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

                const itemTitle: string = asHtml(cardsItem.card_title)
                const itemContent: string = asHtml(cardsItem.card_content)
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

            const richtextContent = asHtml(richtextPrimary.richtext_content)

            const richtext = new RichtextModel(richtextContent)
            return richtext

        case "stage_blog":
            const stageBlogPrimary = slice.primary

            const stageBlogTitle = asText(stageBlogPrimary.stage_blog_title)
            const stageBlogContent = asHtml(stageBlogPrimary.stage_blog_sub_title)
            const stageBlogImgSrc = stageBlogPrimary.stage_blog_image.url
            const stageBlogImgAlt = stageBlogPrimary.stage_blog_image.alt

            const stageBlogModel = new StageBlogModel(stageBlogTitle, stageBlogContent, stageBlogImgSrc, stageBlogImgAlt)
            return stageBlogModel

        case "highlight":
            const highlightPrimary = slice.primary

            const highlightContent = asHtml(highlightPrimary.highlight_content)

            const highlightModel = new HighlightTextModel(highlightContent)
            return highlightModel

        case "footer":
            const footerPrimary = slice.primary
            const footerItems = slice.items

            const footerRows: string[] = []
            for (const item of footerItems) {
                const itemContent = asHtml(item.footer_row)
                footerRows.push(itemContent)
            }

            const footerBgColor = footerPrimary.footer_bg_color

            const footerModel = new FooterModel(footerRows, footerBgColor)
            return footerModel

        case "image_with_caption":
            const iwcPrimary = slice.primary

            const iwcVideoSrc = iwcPrimary.iwc_video?.url
            const iwcImgSrc = iwcPrimary.iwc_img?.url
            const iwcImgAlt = iwcPrimary.iwc_img?.alt
            const iwcCaption = asText(iwcPrimary.iwc_caption)
            const iwcBgColor = iwcPrimary.iwc_color

            const iwcModel = new ImageWithCaptionModel(iwcVideoSrc, iwcImgSrc, iwcImgAlt, iwcCaption, iwcBgColor)
            return iwcModel

        case "headline":
            const headlinePrimary = slice.primary

            const headlineContent = asHtml(headlinePrimary.headline_content)
            const headlineModel = new HeadlineModel(headlineContent)

            return headlineModel

        case "spalten":
            const colRichtextItems = slice.items

            const colRichtextRows: string[] = []
            for (const item of colRichtextItems) {
                const itemContent = asHtml(item.col)
                colRichtextRows.push(itemContent)
            }

            const colRichtextModel = new ColRichtextModel(colRichtextRows)
            return colRichtextModel

        case "catalog":
            const catalogPrimary = slice.primary

            const productName = catalogPrimary.shopify_catalogue.title
            const productPrice = catalogPrimary.shopify_catalogue.variants[0].price
            const productImgSrc = catalogPrimary.shopify_catalogue.image.src
            const productVariantID = catalogPrimary.shopify_catalogue.variants[0].admin_graphql_api_id
            const productDescription = catalogPrimary.shopify_catalogue.body_html

            const productModel = new ShopifyProductModel(productName, productPrice, productImgSrc, productVariantID, productDescription)
            return productModel

        case "multi_functional":
            const multiFunctionalPrimary = slice.primary
            const multiFunctionalItems = slice.items

            const multiFunctionalTitle = asText(multiFunctionalPrimary.multi_functional_title)
            const multiFunctionalCols = []

            for (const item of multiFunctionalItems) {
                const content = asHtml(item.multi_functional_content)
                const link = linkResolver(item.multi_functional_link)
                const col = { content, link }
                multiFunctionalCols.push(col)
            }

            const multiFunctionalModel = new MultiFunctionalModel(multiFunctionalCols, multiFunctionalTitle)

            return multiFunctionalModel

        case "paypal_product":
            const paypalProductPrimary = slice.primary

            const paypalProductName = asText(paypalProductPrimary.product_name)
            const paypalProductPrice = asText(paypalProductPrimary.product_price)
            const paypalProductImgSrc = paypalProductPrimary.product_image?.url
            const paypalProductDescription = asHtml(paypalProductPrimary.product_description)

            const paypalExpressProductModel = new PaypalExpressProductModel(paypalProductName, paypalProductPrice, paypalProductImgSrc, paypalProductDescription)
            return paypalExpressProductModel

        default:
            return null
    }
}