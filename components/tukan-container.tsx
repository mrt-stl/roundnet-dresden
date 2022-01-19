import TukanModel from "../models/tukan/tukan-model"
import { TukanType } from "../models/tukan/tukan-types"
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
                    image={stageModel.image}
                    parallax={stageModel.parallax}
                />
            )
            break
    }

    return component
}

export default TukanContainer
