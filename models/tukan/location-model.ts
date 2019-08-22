import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ILocationProps } from "../../components/pattern/location"

export default class LocationModel extends TukanModel implements ILocationProps {

    public lat: number
    public lng: number

    constructor(lat: number, lng: number) {
        super(TukanType.Location)

        this.lat = lat
        this.lng = lng
    }
}