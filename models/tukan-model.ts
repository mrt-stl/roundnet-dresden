import { TukanType } from "./tukan-types"

export default class TukanModel {
    public type: TukanType

    constructor(type: TukanType) {
        this.type = type
    }
}
