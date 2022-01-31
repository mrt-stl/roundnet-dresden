import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IContactProps } from "../../components/pattern/contact/contact"

export default class ContactModel extends TukanModel implements IContactProps {
    public contactHeadline: string
    public contactContent: string
    public privacyContent: string
    public contactPlaceholderName: string
    public contactPlaceholderEmail: string
    public contactPlaceholderContent: string

    constructor(
        contactHeadline: string,
        contactContent: string,
        contactPlaceholderName: string,
        contactPlaceholderEmail: string,
        contactPlaceholderContent: string,
        privacyContent: string
    ) {
        super(TukanType.Contact)

        this.contactHeadline = contactHeadline
        this.contactContent = contactContent
        this.contactPlaceholderName = contactPlaceholderName
        this.contactPlaceholderEmail = contactPlaceholderEmail
        this.contactPlaceholderContent = contactPlaceholderContent
        this.privacyContent = privacyContent
    }
}
