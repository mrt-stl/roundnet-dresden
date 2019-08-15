import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import Card from "../components/pattern/card"

export default class InfiniteCardsModel extends TukanModel {
    public cards: Card[]

    constructor(cards: Card[]) {
        super(TukanType.InfiniteCards)

        this.cards = cards
    }
}