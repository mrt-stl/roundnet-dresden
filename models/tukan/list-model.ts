import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IListProps } from "../../components/pattern/list"

export default class ServiceModel extends TukanModel implements IListProps {
    public listHeadline: string
    public content: { content }[]

    constructor(listHeadline: string, content: { content }[]) {
        super(TukanType.List)

        this.listHeadline = listHeadline
        this.content = content
    }
}
