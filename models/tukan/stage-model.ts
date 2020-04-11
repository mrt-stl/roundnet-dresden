import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IStageProps } from "../../components/pattern/stage"

export default class StageModel extends TukanModel implements IStageProps {

    public title: string
    public content: string

    constructor(title: string, content: string) {
        super(TukanType.Stage)

        this.title = title
        this.content = content
    }
}