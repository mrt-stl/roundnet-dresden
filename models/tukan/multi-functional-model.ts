import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IMultiFunctionalProps, IMultiFunctionalCol } from "../../components/pattern/multi-functional"


export default class MultiFunctionalModel extends TukanModel implements IMultiFunctionalProps {
    constructor(public cols: IMultiFunctionalCol[], public title?: string){
        super(TukanType.MultiFunctional)
    }
}