import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ILocationProps } from "../../components/pattern/location"

export default class LocationModel extends TukanModel implements ILocationProps {

    public items: any

    constructor(items: any) {
        super(TukanType.Location)

        this.items = items
    }
}