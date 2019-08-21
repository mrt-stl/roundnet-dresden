import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IFocusProps } from "../components/pattern/focus"

export default class FocusModel extends TukanModel implements IFocusProps {
    public content: string

    constructor(content: string) {
        super(TukanType.Focus)

        this.content = content
    }
}