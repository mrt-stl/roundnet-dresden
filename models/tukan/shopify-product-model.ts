import TukanModel from "./tukan-model"
import { IShopifyProductProps } from "../../components/shop/shopify-product"
import { TukanType } from "./tukan-types"

export default class ShopifyProductModel extends TukanModel implements IShopifyProductProps {
    public name: string
    public price: string
    public imgSrc: string
    public variantID: string
    public description: string

    constructor(name: string, price: string, imgSrc: string, variantID: string, description: string) {
        super(TukanType.ShopifyProduct)

        this.name = name
        this.price = price
        this.imgSrc = imgSrc
        this.variantID = variantID
        this.description = description
    }
}