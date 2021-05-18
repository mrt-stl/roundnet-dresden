import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IAccordionProps } from "../../components/pattern/accordion"

export default class AccordionModel extends TukanModel implements IAccordionProps {

    public headline: string
    public items: any

    constructor(title: string, items: any) {
        super(TukanType.Accordion)

        this.headline = title
        this.items = items
    }
}