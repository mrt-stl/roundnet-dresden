import TukanModel from "../models/tukan/tukan-model"
import { TukanType } from "../models/tukan/tukan-types"
import HeroImageModel from "../models/tukan/hero-image-model"
import HeroImage from "./pattern/hero-image"
import LocationModel from "../models/tukan/location-model"
import Location from "./pattern/location"
import ServiceModel from "../models/tukan/service-model"
import Service from "./pattern/service"
import StageModel from "../models/tukan/stage-model"
import Stage from "./pattern/stage"
import RichtextModel from "../models/tukan/richtext-model"
import Richtext from "./pattern/richtext"
import CallToActionModel from "../models/tukan/call-to-action-model"
import CallToAction from "./pattern/call-to-action"
import AccordionModel from "../models/tukan/accordion-model"
import Accordion from "./pattern/accordion"

interface ITukanWrapperProps {
    tukanModels: TukanModel[]
}

const TukanContainer = (props: ITukanWrapperProps) => {
    const models = props.tukanModels
    const components = models.map((model, index) => {
        return matchComponent(model, index)
    })

    return <div className="tukan-container">{components}</div>
}

const matchComponent = (model: TukanModel, index: number) => {
    let component: JSX.Element

    switch (model.type) {
        case TukanType.Accordion:
            const accordionModel = model as AccordionModel
            component = (
                <Accordion
                    key={index}
                    headline={accordionModel.headline}
                    showMoreBtn={accordionModel.showMoreBtn}
                    items={accordionModel.items}
                />
            )
            break

        case TukanType.CallToAction:
            const callToActionModel = model as CallToActionModel
            component = (
                <CallToAction
                    key={index}
                    headline={callToActionModel.headline}
                    subtitle={callToActionModel.subtitle}
                    contentLeft={callToActionModel.contentLeft}
                    contentRight={callToActionModel.contentRight}
                />
            )
            break

        case TukanType.HeroImage:
            const heroImageModel = model as HeroImageModel
            component = (
                <HeroImage
                    key={index}
                    imgSrc={heroImageModel.imgSrc}
                    imgAlt={heroImageModel.imgAlt}
                    title={heroImageModel.title}
                    link={heroImageModel.link}
                    linkContent={heroImageModel.linkContent}
                    linkIsBlank={heroImageModel.linkIsBlank}
                />
            )
            break

        case TukanType.Location:
            const locationModel = model as LocationModel
            component = <Location key={index} items={locationModel.items} />
            break

        case TukanType.Service:
            const serviceModel = model as ServiceModel
            component = (
                <Service
                    key={index}
                    headline={serviceModel.headline}
                    content={serviceModel.content}
                    background={serviceModel.background}
                    cols={serviceModel.cols}
                />
            )
            break

        case TukanType.Richtext:
            const richtextModel = model as RichtextModel
            component = <Richtext key={index} content={richtextModel.content} index={index} />
            break

        case TukanType.Stage:
            const stageModel = model as StageModel
            component = (
                <Stage
                    key={index}
                    headline={stageModel.headline}
                    content={stageModel.content}
                    btnLabel={stageModel.btnLabel}
                    btnLink={stageModel.btnLink}
                    backgroundImage={stageModel.backgroundImage}
                />
            )
            break
    }

    return component
}

export default TukanContainer
