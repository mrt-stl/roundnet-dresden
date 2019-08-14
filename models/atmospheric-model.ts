import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class AtmosphericModel extends TukanModel {
    public imgSrc: string
    public imgAlt: string

    constructor(imgSrc: string, imgAlt?: string) {
        super(TukanType.Atmospheric)

        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}