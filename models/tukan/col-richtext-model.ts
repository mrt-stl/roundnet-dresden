import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IColRichtextProps } from "../../components/pattern/col-richtext"

export default class ColRichtextModel extends TukanModel implements IColRichtextProps {
    public cols: string[]
    public index?: number

    constructor(cols: string[], index?: number) {
        super(TukanType.ColRichtext)

        this.cols = cols
        this.index = index
    }
}