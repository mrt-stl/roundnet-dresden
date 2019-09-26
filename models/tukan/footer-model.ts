import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class FooterModel extends TukanModel {

    public rows: string[]

    constructor(rows: string[]) {
        super(TukanType.Footer)

        this.rows = rows
    }
}