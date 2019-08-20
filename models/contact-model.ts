import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class ContactModel extends TukanModel {
    public targetMail: string
    public title?: string
    public content?: string

    constructor(targetMail: string, title: string, content: string) {
        super(TukanType.Contact)

        this.targetMail = targetMail
        this.title = title
        this.content = content
    }
}