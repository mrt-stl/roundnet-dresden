import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class HeroImageModel extends TukanModel {
    public imgSrc: string
    public imgAlt?: string
    public title?: string
    public link?: string
    public linkContent?: string
    public linkIsBlank?: boolean

    constructor(imgSrc: string, imgAlt?: string, title?: string, link?: string, linkContent?: string, linkIsBlank?: boolean) {
        super(TukanType.HeroImage)

        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
        this.title = title
        this.link = link
        this.linkContent = linkContent
        this.linkIsBlank = linkIsBlank
    }
}