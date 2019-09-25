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
import LocationModel from "../models/tukan/location-model"
import Location from "./pattern/location"
import PreviewModel from "../models/tukan/preview-model"
import Preview from "./pattern/preview"
import RichtextModel from "../models/tukan/richtext-model"
import Richtext from "./pattern/richtext"

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

        case TukanType.Contact:
            const contactModel = model as ContactModel
            component =
                <Contact
                    key={index}
                    targetMail={contactModel.targetMail}
                    title={contactModel.title}
                    content={contactModel.content} />
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

        case TukanType.InfiniteCards:
            const infiniteCardsModel = model as InfiniteCardsModel
            component =
                <InfiniteCards
                    key={index}
                    cards={infiniteCardsModel.cards} />
            break

        case TukanType.Location:
            const locationModel = model as LocationModel
            component =
                <Location
                    key={index}
                    lat={locationModel.lat}
                    lng={locationModel.lng} />
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
    }

    return component
}

export default TukanContainer