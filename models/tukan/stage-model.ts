import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IStageProps } from "../../components/pattern/stage"

export default class StageModel extends TukanModel implements IStageProps {

    public headline: string
    public content: string
    public backgroundImage: any

    constructor(title: string, content: string, backgroundImage: any) {
        super(TukanType.Stage)

        this.headline = title
        this.content = content
        this.backgroundImage = backgroundImage
    }
}