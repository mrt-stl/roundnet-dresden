import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { isUndefinedOrNullOrEmpty } from "../../utils/object-utils"
import { IActionProps } from "../../components/pattern/action"

export default class ActionModel extends TukanModel implements IActionProps {
    public backgroundColor: string
    public content: string
    public link?: string
    public linkContent?: string
    public linkIsBlank: boolean

    constructor(content: string, backgroundColor?: string, link?: string, linkIsBlank: boolean = false, linkContent?: string) {
        super(TukanType.Action)

        this.content = content
        this.backgroundColor = !isUndefinedOrNullOrEmpty(backgroundColor) ? backgroundColor : "var(--secondary)"
        this.link = link
        this.linkIsBlank = linkIsBlank
        this.linkContent = linkContent
    }
}