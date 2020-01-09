import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IColRichtextProps } from "../../components/pattern/col-richtext"

export default class ColRichtextModel extends TukanModel implements IColRichtextProps {
    public cols: string[]

    constructor(cols: string[]) {
        super(TukanType.ColRichtext)

        this.cols = cols
    }
}