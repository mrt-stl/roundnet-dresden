import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"

export default class ActionModel extends TukanModel {
    backgroundColor: string
    content: string
    link?: string
    linkContent?: string
    linkIsBlank: boolean

    constructor(type: TukanType, content: string, backgroundColor?: string, link?: string, linkIsBlank: boolean = false, linkContent?: string) {
        super(type)

        this.content = content
        this.backgroundColor = isUndefinedOrNullOrEmpty(backgroundColor) ? backgroundColor : "var(--secondary)"
        this.link = link
        this.linkIsBlank = linkIsBlank
        this.linkContent = linkContent
    }
}