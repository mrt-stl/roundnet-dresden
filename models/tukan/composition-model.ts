import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { ICompositionProps } from "../../components/pattern/composition"

export default class CompositionModel extends TukanModel implements ICompositionProps {
    public compositionBackground1: any
    public compositionBackground2: any
    public compositionGallery1: object
    public compositionGallery2: object
    public compositionGallery3: object
    public compositionHeadline: string
    public compositionSubtitle: string
    public compositionContent: string
    public compositionStatement: string
    public compositionStatementContent: string

    constructor(compositionBackground1: any, compositionBackground2: any, compositionGallery1: object, compositionGallery2: object, compositionGallery3: object, compositionHeadline: string, compositionSubtitle: string, compositionContent: string, compositionStatement: string, compositionStatementContent: string) {
        super(TukanType.Composition)

        this.compositionBackground1 = compositionBackground1
        this.compositionBackground2 = compositionBackground2
        this.compositionGallery1 = compositionGallery1
        this.compositionGallery2 = compositionGallery2
        this.compositionGallery3 = compositionGallery3
        this.compositionHeadline = compositionHeadline
        this.compositionSubtitle = compositionSubtitle
        this.compositionContent = compositionContent
        this.compositionStatement = compositionStatement
        this.compositionStatementContent = compositionStatementContent
    }
}