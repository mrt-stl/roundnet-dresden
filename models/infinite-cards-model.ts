import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import CardModel from "./card-model"

export default class InfiniteCardsModel extends TukanModel {
    public cards: CardModel[]

    constructor(cards: CardModel[]) {
        super(TukanType.InfiniteCards)

        this.cards = cards
    }
}