import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IContactProps } from "../components/pattern/contact"

export default class ContactModel extends TukanModel implements IContactProps {
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