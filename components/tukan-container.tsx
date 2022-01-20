import TukanModel from "../models/tukan/tukan-model"
import { TukanType } from "../models/tukan/tukan-types"
import ListModel from "../models/tukan/list-model"
import List from "./pattern/list"
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
                    ctaHeadline={callToActionModel.ctaHeadline}
                    btns={callToActionModel.btns}
                />
            )
            break

        case TukanType.List:
            const listModel = model as ListModel
            component = (
                <List
                    key={index}
                    listHeadline={listModel.listHeadline}
                    content={listModel.content}
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
