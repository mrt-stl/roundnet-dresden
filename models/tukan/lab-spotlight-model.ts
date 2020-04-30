import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ILabSpotlightProps } from "../../components/pattern/lab-spotlight"

export default class LabSpotlightModel extends TukanModel implements ILabSpotlightProps {

    public content: string
    public link: string
    public imgSrc?: string
    public imgAlt?: string

    constructor(content: string, link: string, imgSrc?: string, imgAlt?: string) {
        super(TukanType.LabSpotlight)

        this.content = content
        this.link = link
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}