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
import ConnectionsModel from "../models/tukan/connections-model"
import Connections from "./pattern/connections/connections"
import ContactModel from "../models/tukan/contact-model"
import Contact from "./pattern/contact/contact"

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
            const connectionsModel = model as ConnectionsModel
            component = (
                <Connections
                    key={index}
                    connectionsHeadline={connectionsModel.connectionsHeadline}
                    connectionsContent={connectionsModel.connectionsContent}
                    connectionsCards={connectionsModel.connectionsCards}
                />
            )
            break

        case TukanType.Contact:
            const contactModel = model as ContactModel
            component = (
                <Contact
                    key={index}
                    contactHeadline={contactModel.contactHeadline}
                    contactContent={contactModel.contactContent}
                    contactPlaceholderName={contactModel.contactPlaceholderName}
                    contactPlaceholderEmail={contactModel.contactPlaceholderEmail}
                    contactPlaceholderContent={contactModel.contactPlaceholderContent}
                    privacyContent={contactModel.privacyContent}
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
            component = (
                <Richtext
                    key={index}
                    content={richtextModel.content}
                    multiColumns={richtextModel.multiColumns}
                    headline={richtextModel.headline}
                    imageSize={richtextModel.imageSize}
                />
            )
            break

        case TukanType.Stage:
            const stageModel = model as StageModel
            component = (
                <Stage key={index} image={stageModel.image} parallax={stageModel.parallax} />
            )
            break
    }

    return component
}

export default TukanContainer
