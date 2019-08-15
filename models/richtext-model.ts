import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class RichtextModel extends TukanModel {

    public content: string

    constructor(content: string) {
        super(TukanType.Richtext)

        this.content = content
    }
}