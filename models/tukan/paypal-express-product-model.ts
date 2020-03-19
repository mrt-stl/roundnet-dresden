import TukanModel from "./tukan-model"
import { TukanType } from "./tukan-types"
import { IPaypalExpressProductProps } from "../../components/shop/paypal-express-product"

export default class PaypalExpressProductModel extends TukanModel implements IPaypalExpressProductProps {
    public name: string
    public price: string
    public imgSrc: string
    public description: string

    constructor(name: string, price: string, imgSrc: string, description: string) {
        super(TukanType.PaypalExpressProduct)

        this.name = name
        this.price = price
        this.imgSrc = imgSrc
        this.description = description
    }
}