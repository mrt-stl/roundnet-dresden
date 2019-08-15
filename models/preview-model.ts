import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class PreviewModel extends TukanModel {

    public title: string
    public content: string
    public imgSrc: string
    public imgAlt?: string

    constructor(title: string, content: string, imgSrc: string, imgAlt?: string) {
        super(TukanType.Preview)

        this.title = title
        this.content = content
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}