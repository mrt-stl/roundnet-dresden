import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class AtmosphericModel extends TukanModel {
    public imgSrc: string
    public imgAlt: string

    constructor(type: TukanType, imgSrc: string, imgAlt?: string) {
        super(type)

        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}