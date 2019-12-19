import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IHeadlineProps } from "../../components/pattern/headline"

export default class HeadlineModel extends TukanModel implements IHeadlineProps {
    public content: string

    constructor(content: string) {
        super(TukanType.Headline)

        this.content = content
    }
}
