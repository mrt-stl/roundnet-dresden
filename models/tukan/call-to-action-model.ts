import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ICallToActionProps } from "../../components/pattern/call-to-action"

export default class CallToActionModel extends TukanModel implements ICallToActionProps {

    public headline: string
    public subtitle: string
    public contentLeft: string
    public contentRight: string

    constructor(headline: string, subtitle: string, contentLeft: string, contentRight: string) {
        super(TukanType.CallToAction)

        this.headline = headline
        this.subtitle = subtitle
        this.contentLeft = contentLeft
        this.contentRight = contentRight
    }
}