import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class HighlightTextModel extends TukanModel {

    public content: string

    constructor(content: string) {
        super(TukanType.HighlightText)

        this.content = content
    }
}