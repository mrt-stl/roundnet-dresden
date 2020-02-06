import TukanModel from "./tukan-model"
import { IProductProps } from "../../components/shop/product"
import { TukanType } from "./tukan-types"

export default class ProductModel extends TukanModel implements IProductProps {
    public name: string
    public price: string
    public imgSrc: string
    public variantID: string
    public description: string

    constructor(name: string, price: string, imgSrc: string, variantID: string, description: string) {
        super(TukanType.Product)

        this.name = name
        this.price = price
        this.imgSrc = imgSrc
        this.variantID = variantID
        this.description = description
    }
}