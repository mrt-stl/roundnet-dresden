import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ISliderProps } from "../../components/pattern/slider"

export default class SliderModel extends TukanModel implements ISliderProps {
    // public title?: string
    // public content?: string
    // public imgSrc?: string
    // public imgAlt?: string
    // public btnLabel?: string
    // public btnLink?: string
    public autoPlay: number
    public randomStart: boolean
    public data: any
    public fullsize: boolean
    public transitionDuration: number

    constructor(autoPlay: number, randomStart: boolean, data: any, fullsize: boolean, transitionDuration: number) {
        super(TukanType.Slider)

        this.autoPlay = autoPlay
        this.randomStart = randomStart
        this.data = data
        this.fullsize = fullsize
        this.transitionDuration = transitionDuration
    }
}