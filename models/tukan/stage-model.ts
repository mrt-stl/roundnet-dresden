import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IStageProps } from "../../components/pattern/stage"

export default class StageModel extends TukanModel implements IStageProps {

    public image: any
    public parallax: boolean

    constructor(image: any, parallax: boolean) {
        super(TukanType.Stage)

        this.image = image
        this.parallax = parallax

    }
}