import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IServiceProps } from "../../components/pattern/service"

export default class ServiceModel extends TukanModel implements IServiceProps {

    public headline?: string
    public content?: string
    public background?: boolean
    public cols?: {data, background?}[]


    constructor(headline?: string, content?: string, background?: boolean, cols?: {data, background?}[]) {
        super(TukanType.Service)

        this.headline = headline
        this.content = content
        this.background = background
        this.cols = cols
    }
}