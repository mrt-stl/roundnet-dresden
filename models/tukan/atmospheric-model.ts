import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IAtmosphericProps } from "../../components/pattern/atmospheric-image"

export default class AtmosphericModel extends TukanModel implements IAtmosphericProps {
    public imgSrc: string
    public imgAlt: string

    constructor(imgSrc: string, imgAlt?: string) {
        super(TukanType.Atmospheric)

        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
}