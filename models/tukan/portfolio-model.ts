import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IPortfolioProps } from "../../components/pattern/portfolio"

export default class PortfolioModel extends TukanModel implements IPortfolioProps {

    public title: string
    public imgSrc01?: string
    public imgAlt01?: string
    public imgSrc02?: string
    public imgAlt02?: string
    public imgSrc03?: string
    public imgAlt03?: string
    public imgSrc04?: string
    public imgAlt04?: string
    public imgSrc05?: string
    public imgAlt05?: string
    public imgSrc06?: string
    public imgAlt06?: string
    public imgSrc07?: string
    public imgAlt07?: string
    public imgSrc08?: string
    public imgAlt08?: string

    constructor(title: string, imgSrc01?: string, imgAlt01?: string, imgSrc02?: string, imgAlt02?: string, imgSrc03?: string, imgAlt03?: string, imgSrc04?: string, imgAlt04?: string, imgSrc05?: string, imgAlt05?: string, imgSrc06?: string, imgAlt06?: string, imgSrc07?: string, imgAlt07?: string, imgSrc08?: string, imgAlt08?: string) {
        super(TukanType.Portfolio)

        this.title = title
        this.imgSrc01 = imgSrc01
        this.imgAlt01 = imgAlt01
        this.imgSrc02 = imgSrc02
        this.imgAlt02 = imgAlt02
        this.imgSrc03 = imgSrc03
        this.imgAlt03 = imgAlt03
        this.imgSrc04 = imgSrc04
        this.imgAlt04 = imgAlt04
        this.imgSrc05 = imgSrc05
        this.imgAlt05 = imgAlt05
        this.imgSrc06 = imgSrc06
        this.imgAlt06 = imgAlt06
        this.imgSrc07 = imgSrc07
        this.imgAlt07 = imgAlt07
        this.imgSrc08 = imgSrc08
        this.imgAlt08 = imgAlt08
    }
}