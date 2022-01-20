import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IRichtextProps } from "../../components/pattern/richtext"

export default class RichtextModel extends TukanModel implements IRichtextProps {

    public headline: string
    public multiColumns: boolean
    public content: {content}[]

    constructor(headline: string,multiColumns: boolean, content: {content}[]) {
        super(TukanType.Richtext)

        this.headline = headline
        this.multiColumns = multiColumns
        this.content = content
    }
}