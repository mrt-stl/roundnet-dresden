import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IImageWithCaptionProps } from "../../components/pattern/image-with-caption"

export default class ImageWithCaptionModel extends TukanModel implements IImageWithCaptionProps {
    public imgSrc: string
    public imgAlt?: string
    public caption?: string
    public backgroundColor?: string

    constructor(imgSrc: string, imgAlt?: string, caption?: string, backgroundColor?: string) {
        super(TukanType.ImageWithCaption)

        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
        this.caption = caption
        this.backgroundColor = backgroundColor
    }

}
