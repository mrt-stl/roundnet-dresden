import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ISliderProps } from "../../components/pattern/slider/slider"

export default class SliderModel extends TukanModel implements ISliderProps {

    public data: any

    constructor( data: any) {
        super(TukanType.Slider)
        this.data = data
    }
}