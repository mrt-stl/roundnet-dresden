import Action from "./pattern/action"
import TukanModel from "../models/tukan/tukan-model"
import ActionModel from "../models/tukan/action-model"
import { TukanType } from "../models/tukan/tukan-types"
import AtmosphericModel from "../models/tukan/atmospheric-model"
import AtmosphericImage from "./pattern/atmospheric-image"
import ContactModel from "../models/tukan/contact-model"
import Contact from "./pattern/contact"
import DetailsModel from "../models/tukan/details-model"
import Details from "./pattern/details"
import FocusModel from "../models/tukan/focus-model"
import Focus from "./pattern/focus"
import HeroImageModel from "../models/tukan/hero-image-model"
import HeroImage from "./pattern/hero-image"
import HighlightTextModel from "../models/tukan/highlight-text-model"
import HighlightText from "./pattern/highlight-text"
import ImageAndTextModel from "../models/tukan/image-and-text-model"
import ImageAndText from "./pattern/image-and-text"
import InfiniteCardsModel from "../models/tukan/infinite-cards-model"
import InfiniteCards from "./pattern/infinite-cards"
import LabSpotlightModel from "../models/tukan/lab-spotlight-model"
import LabSpotlight from "./pattern/lab-spotlight"
import LocationModel from "../models/tukan/location-model"
import Location from "./pattern/location"
import PreviewModel from "../models/tukan/preview-model"
import Preview from "./pattern/preview"
import RichtextModel from "../models/tukan/richtext-model"
import Richtext from "./pattern/richtext"
import SelectionModel from "../models/tukan/selection-model"
import Selection from "./pattern/selection"
import StageBlogModel from "../models/tukan/stage-blog-model"
import StageBlog from "./pattern/stage-blog"
import StageModel from "../models/tukan/stage-model"
import Stage from "./pattern/stage"
import ImageWithCaptionModel from "../models/tukan/image-with-caption-model"
import ImageWithCaption from "./pattern/image-with-caption"
import HeadlineModel from "../models/tukan/headline-model"
import Headline from "./pattern/headline"
import ColRichtextModel from "../models/tukan/col-richtext-model"
import ColRichtext from "./pattern/col-richtext"
import ShopifyProductModel from "../models/tukan/shopify-product-model"
import ShopifyProduct from "./shop/shopify-product"
import MultiFunctionalModel from "../models/tukan/multi-functional-model"
import MultiFunctional from "./pattern/multi-functional"
import PaypalExpressProductModel from "../models/tukan/paypal-express-product-model"
import PaypalExpressProduct from "./shop/paypal-express-product"
import PortfolioModel from "../models/tukan/portfolio-model"
import Portfolio from "./pattern/portfolio"
import SliderModel from "../models/tukan/slider-model"
import Slider from "./pattern/slider"
import CompositionModel from "../models/tukan/composition-model"
import Composition from "./pattern/composition"
import CallToActionModel from "../models/tukan/call-to-action-model"
import CallToAction from "./pattern/call-to-action"

interface ITukanWrapperProps {
    tukanModels: TukanModel[]
}

const TukanContainer = (props: ITukanWrapperProps) => {
    const models = props.tukanModels
    const components = models.map((model, index) => {
        return matchComponent(model, index)
    })

    return (
        <div className="tukan-container">
            {components}
        </div>
    )
}

const matchComponent = (model: TukanModel, index: number) => {
    let component: JSX.Element

    switch (model.type) {
        case TukanType.Action:
            const actionModel = model as ActionModel
            component =
                <Action
                    key={index}
                    backgroundColor={actionModel.backgroundColor}
                    content={actionModel.content}
                    link={actionModel.link}
                    linkContent={actionModel.linkContent}
                    linkIsBlank={actionModel.linkIsBlank} />
            break

        case TukanType.Atmospheric:
            const atmosphericModel = model as AtmosphericModel
            component =
                <AtmosphericImage
                    key={index}
                    imgSrc={atmosphericModel.imgSrc}
                    imgAlt={atmosphericModel.imgAlt} />
            break

        case TukanType.ColRichtext:
            const colRichtextModel = model as ColRichtextModel
            component =
                <ColRichtext
                    key={index}
                    cols={colRichtextModel.cols} />
            break

        case TukanType.Contact:
            const contactModel = model as ContactModel
            component =
                <Contact
                    key={index}
                    targetMail={contactModel.targetMail}
                    title={contactModel.title}
                    content={contactModel.content} />
            break

        case TukanType.Slider:
            const sliderModel = model as SliderModel
            component =
                <Slider
                    key={index}
                    autoPlay={sliderModel.autoPlay}
                    randomStart={sliderModel.randomStart}
                    data={sliderModel.data}
                    fullsize={sliderModel.fullsize}
                    transitionDuration={sliderModel.transitionDuration} />
            break

        case TukanType.Details:
            const detailsModel = model as DetailsModel
            component =
                <Details
                    key={index}
                    backgroundColor={detailsModel.backgroundColor}
                    cards={detailsModel.cards} />
            break

        case TukanType.Focus:
            const focusModel = model as FocusModel
            component =
                <Focus
                    key={index}
                    content={focusModel.content} />
            break

        case TukanType.Composition:
            const compositionModel = model as CompositionModel
            component =
                <Composition
                    key={index}
                    compositionBackground1={compositionModel.compositionBackground1}
                    compositionBackground2={compositionModel.compositionBackground2}
                    compositionGallery1={compositionModel.compositionGallery1}
                    compositionGallery2={compositionModel.compositionGallery2}
                    compositionGallery3={compositionModel.compositionGallery3}
                    compositionHeadline={compositionModel.compositionHeadline}
                    compositionSubtitle={compositionModel.compositionSubtitle}
                    compositionContent={compositionModel.compositionContent}
                    compositionStatement={compositionModel.compositionStatement}
                    compositionStatementContent={compositionModel.compositionStatementContent}
                    />
            break

        case TukanType.Headline:
            const headlineModel = model as HeadlineModel
            component =
                <Headline
                    key={index}
                    content={headlineModel.content} />
            break

        case TukanType.CallToAction:
            const callToActionModel = model as CallToActionModel
            component =
                <CallToAction
                    key={index}
                    headline={callToActionModel.headline}
                    content={callToActionModel.content}
                    btnLabel={callToActionModel.btnLabel}
                    btnLink={callToActionModel.btnLink} />
            break

        case TukanType.HeroImage:
            const heroImageModel = model as HeroImageModel
            component =
                <HeroImage
                    key={index}
                    imgSrc={heroImageModel.imgSrc}
                    imgAlt={heroImageModel.imgAlt}
                    title={heroImageModel.title}
                    link={heroImageModel.link}
                    linkContent={heroImageModel.linkContent}
                    linkIsBlank={heroImageModel.linkIsBlank} />
            break

        case TukanType.HighlightText:
            const highlightTextModel = model as HighlightTextModel
            component =
                <HighlightText
                    key={index}
                    content={highlightTextModel.content} />
            break

        case TukanType.ImageAndText:
            const iatModel = model as ImageAndTextModel
            component =
                <ImageAndText
                    key={index}
                    content={iatModel.content}
                    imgSrc={iatModel.imgSrc}
                    imgAlt={iatModel.imgAlt} />
            break

        case TukanType.ImageWithCaption:
            const iwcModel = model as ImageWithCaptionModel
            component =
                <ImageWithCaption
                    key={index}
                    videoSrc={iwcModel.videoSrc}
                    imgSrc={iwcModel.imgSrc}
                    imgAlt={iwcModel.imgAlt}
                    caption={iwcModel.caption}
                    backgroundColor={iwcModel.backgroundColor} />
            break

        case TukanType.InfiniteCards:
            const infiniteCardsModel = model as InfiniteCardsModel
            component =
                <InfiniteCards
                    key={index}
                    cards={infiniteCardsModel.cards} />
            break

        case TukanType.LabSpotlight:
            const labSpotlightModel = model as LabSpotlightModel
            component =
                <LabSpotlight
                    content={labSpotlightModel.content}
                    link={labSpotlightModel.link}
                    imgSrc={labSpotlightModel.imgSrc}
                    imgAlt={labSpotlightModel.imgAlt} />
            break

        case TukanType.Location:
            const locationModel = model as LocationModel
            component =
                <Location
                    key={index}
                    lat={locationModel.lat}
                    lng={locationModel.lng} />
            break

        case TukanType.MultiFunctional:
            const multiFunctionalModel = model as MultiFunctionalModel
            component =
                <MultiFunctional
                    key={index}
                    cols={multiFunctionalModel.cols}
                    title={multiFunctionalModel.title} />
            break

        case TukanType.Selection:
            const selectionModel = model as SelectionModel
            component =
                <Selection
                    key={index}
                    cols={selectionModel.cols} />
            break

        case TukanType.PaypalExpressProduct:
            const paypalExpressProductModel = model as PaypalExpressProductModel
            component =
                <PaypalExpressProduct
                    key={index}
                    name={paypalExpressProductModel.name}
                    price={paypalExpressProductModel.price}
                    description={paypalExpressProductModel.description}
                    imgSrc={paypalExpressProductModel.imgSrc}
                />
            break

        case TukanType.Preview:
            const previewModel = model as PreviewModel
            component =
                <Preview
                    key={index}
                    title={previewModel.title}
                    content={previewModel.content}
                    imgSrc={previewModel.imgSrc}
                    imgAlt={previewModel.imgAlt} />
            break

        case TukanType.Richtext:
            const richtextModel = model as RichtextModel
            component =
                <Richtext
                    key={index}
                    content={richtextModel.content} />
            break

        case TukanType.Stage:
            const stageModel = model as StageModel
            component =
                <Stage
                    key={index}
                    headline={stageModel.headline}
                    content={stageModel.content}
                    backgroundImage={stageModel.backgroundImage} />
            break

        case TukanType.StageBlog:
            const stageBlogModel = model as StageBlogModel
            component =
                <StageBlog
                    key={index}
                    title={stageBlogModel.title}
                    content={stageBlogModel.content}
                    imgSrc={stageBlogModel.imgSrc}
                    imgAlt={stageBlogModel.imgAlt} />
            break

        case TukanType.ShopifyProduct:
            const productModel = model as ShopifyProductModel
            component =
                <ShopifyProduct
                    key={index}
                    name={productModel.name}
                    price={productModel.price}
                    imgSrc={productModel.imgSrc}
                    variantID={productModel.variantID}
                    description={productModel.description} />
            break

            case TukanType.Portfolio:
                const portfolioModel = model as PortfolioModel
                component =
                    <Portfolio
                        key={index}
                        title={portfolioModel.title}
                        imgSrc01={portfolioModel.imgSrc01}
                        imgAlt01={portfolioModel.imgAlt01}
                        imgSrc02={portfolioModel.imgSrc02}
                        imgAlt02={portfolioModel.imgAlt02}
                        imgSrc03={portfolioModel.imgSrc03}
                        imgAlt03={portfolioModel.imgAlt03}
                        imgSrc04={portfolioModel.imgSrc04}
                        imgAlt04={portfolioModel.imgAlt04}
                        imgSrc05={portfolioModel.imgSrc05}
                        imgAlt05={portfolioModel.imgAlt05}
                        imgSrc06={portfolioModel.imgSrc06}
                        imgAlt06={portfolioModel.imgAlt06}
                        imgSrc07={portfolioModel.imgSrc07}
                        imgAlt07={portfolioModel.imgAlt07}
                        imgSrc08={portfolioModel.imgSrc08}
                        imgAlt08={portfolioModel.imgAlt08} />
                break
    }

    return component
}

export default TukanContainer