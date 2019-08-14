import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import CardModel from "./card-model"
import { isUndefinedOrNullOrEmpty } from "../utils/object-utils"

export default class DetailsModel extends TukanModel {
    public cards: CardModel[]
    public backgroundColor: string

    constructor(cards: CardModel[], backgroundColor?: string) {
        super(TukanType.Details)

        this.cards = cards
        this.backgroundColor = !isUndefinedOrNullOrEmpty(backgroundColor) ? backgroundColor : "var(--background)"
    }
}