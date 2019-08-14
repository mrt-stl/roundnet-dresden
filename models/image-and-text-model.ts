import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class ImageAndTextModel extends TukanModel {
    public imgSrc: string
    public content: string
    public imgAlt?: string
    public imgHeight?: string | number

    constructor(imgSrc: string, content: string, imgAlt?: string, imgHeight?: string | number) {
        super(TukanType.ImageAndText)

        this.imgSrc = imgSrc
        this.content = content
        this.imgAlt = imgAlt
        this.imgHeight = imgHeight
    }
}