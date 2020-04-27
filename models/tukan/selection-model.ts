import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ISelectionProps, ISelectionCol } from "../../components/pattern/selection"

export default class SelectionModel extends TukanModel implements ISelectionProps {
    constructor(public cols: ISelectionCol[] ) {
        super(TukanType.Selection)
    }
}