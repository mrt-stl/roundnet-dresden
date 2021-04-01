import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IInstagramProps } from "../../components/pattern/instagram"

export default class InstagramModel extends TukanModel implements IInstagramProps {

    public links: string[]

    constructor(links: string[]) {
        super(TukanType.Instagram)

        this.links = links
    }
}