import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IRichtextProps } from "../../components/pattern/richtext"

export default class RichtextModel extends TukanModel implements IRichtextProps {

    public content: string

    constructor(content: string) {
        super(TukanType.Richtext)

        this.content = content
    }
}