import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IAccordionProps } from "../../components/pattern/accordion"

export default class AccordionModel extends TukanModel implements IAccordionProps {

    public headline: string
    public showMoreBtn: boolean
    public items: any

    constructor(title: string, showMoreBtn: boolean, items: any) {
        super(TukanType.Accordion)

        this.headline = title
        this.showMoreBtn = showMoreBtn
        this.items = items
    }
}