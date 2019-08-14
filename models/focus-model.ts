import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class FocusModel extends TukanModel {
    public content: string

    constructor(content: string) {
        super(TukanType.Focus)

        this.content = content
    }
}