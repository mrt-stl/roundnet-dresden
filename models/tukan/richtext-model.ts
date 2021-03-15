import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IRichtextProps } from "../../components/pattern/richtext"

export default class RichtextModel extends TukanModel implements IRichtextProps {

    public content: string
    public index?: number

    constructor(content: string, index?: number) {
        super(TukanType.Richtext)

        this.content = content
        this.index = index
    }
}