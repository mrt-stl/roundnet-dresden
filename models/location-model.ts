import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"

export default class LocationModel extends TukanModel {

    public lat: number
    public lng: number

    constructor(lat: number, lng: number) {
        super(TukanType.Location)

        this.lat = lat
        this.lng = lng
    }
}