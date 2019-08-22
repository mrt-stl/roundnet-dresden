import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import CardModel from "./card-model"
import { IInfiniteCardProps } from "../../components/pattern/infinite-cards"

export default class InfiniteCardsModel extends TukanModel implements IInfiniteCardProps {
    public cards: CardModel[]

    constructor(cards: CardModel[]) {
        super(TukanType.InfiniteCards)

        this.cards = cards
    }
}