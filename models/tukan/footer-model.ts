import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IFooterProps } from "../../components/pattern/footer"

export default class FooterModel extends TukanModel implements IFooterProps {
    public rows: string[]
    public backgroundColor?: string

    constructor(rows: string[], backgroundColor?: string) {
        super(TukanType.Footer)

        this.rows = rows
        this.backgroundColor = backgroundColor
    }
}