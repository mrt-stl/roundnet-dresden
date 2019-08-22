import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IHighlightTextProps } from "../../components/pattern/highlight-text"

export default class HighlightTextModel extends TukanModel implements IHighlightTextProps {

    public content: string

    constructor(content: string) {
        super(TukanType.HighlightText)

        this.content = content
    }
}