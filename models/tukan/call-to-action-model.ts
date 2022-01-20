import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ICallToActionProps } from "../../components/pattern/call-to-action"

export default class CallToActionModel extends TukanModel implements ICallToActionProps {

    public ctaHeadline: string
    public btns: {label: string, link: string, target: string}[]

    constructor(ctaHeadline: string, btns: {label: string, link: string, target: string}[]) {
        super(TukanType.CallToAction)

        this.ctaHeadline = ctaHeadline
        this.btns = btns
    }
}