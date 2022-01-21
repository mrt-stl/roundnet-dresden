import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IContactProps } from "../../components/pattern/contact/contact"

export default class ContactModel extends TukanModel implements IContactProps {

    public contactHeadline: string
    public contactContent: string
    public privacyContent: string

    constructor(contactHeadline: string, contactContent: string, privacyContent: string) {
        super(TukanType.Contact)

        this.contactHeadline = contactHeadline
        this.contactContent = contactContent
        this.privacyContent = privacyContent

    }
}