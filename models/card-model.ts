import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ICardProps } from "../components/pattern/card"

export default class CardModel extends TukanModel implements ICardProps {
    public title?: string
    public content?: string
    public imgSrc?: string
    public imgAlt?: string
    public link?: string
    public linkIsBlank?: boolean

    constructor(title?: string, content?: string, imgSrc?: string, imgAlt?: string, link?: string, linkIsBlank?: boolean) {
        super(TukanType.Card)

        this.title = title
        this.content = content
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
        this.link = link
        this.linkIsBlank = linkIsBlank
    }
}