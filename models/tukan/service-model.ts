import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IServiceProps } from "../../components/pattern/service"

export default class ServiceModel extends TukanModel implements IServiceProps {

    public headline?: string
    public content?: string
    public cols?: string[]


    constructor(headline?: string, content?: string, cols?: string[]) {
        super(TukanType.Service)

        this.headline = headline
        this.content = content
        this.cols = cols
    }
}