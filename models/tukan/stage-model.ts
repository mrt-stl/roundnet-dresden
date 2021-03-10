import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IStageProps } from "../../components/pattern/stage"

export default class StageModel extends TukanModel implements IStageProps {

    public headline: string
    public content: string
    public btnLabel: string
    public btnLink: string
    public backgroundImage: any

    constructor(title: string, content: string, btnLabel: string, btnLink: string, backgroundImage: any) {
        super(TukanType.Stage)

        this.headline = title
        this.content = content
        this.btnLabel = btnLabel
        this.btnLink = btnLink
        this.backgroundImage = backgroundImage
    }
}