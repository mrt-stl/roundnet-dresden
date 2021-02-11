import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ICallToActionProps } from "../../components/pattern/call-to-action"

export default class CallToActionModel extends TukanModel implements ICallToActionProps {

    public headline: string
    public content: string
    public btnLabel: string
    public btnLink: string

    constructor(headline: string, content: string, btnLabel: string, btnLink: string) {
        super(TukanType.CallToAction)

        this.headline = headline
        this.content = content
        this.btnLabel = btnLabel
        this.btnLink = btnLink
    }
}