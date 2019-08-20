import Action from "./pattern/action"
import TukanModel from "../models/tukan-model"
import ActionModel from "../models/action-model"
import { TukanType } from "../models/tukan-types"
import AtmosphericModel from "../models/atmospheric-model"
import AtmosphericImage from "./pattern/atmospheric-image"
import ContactModel from "../models/contact-model"
import Contact from "./pattern/contact"
import DetailsModel from "../models/details-model"
import Details from "./pattern/details";

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
                    items={detailsModel.cards} />
            break

    }

    return component
}

export default TukanContainer