import { addToCart } from "../../utils/shop-utils"

export interface IProductProps {
    name: string
    price: string
    imgSrc: string
    variantID: string
}

const Product = (props: IProductProps) => {
    const { name, price, imgSrc, variantID } = props

    const onBtnClick = () => {
        addToCart(variantID)
    }

    return (
        <div className="product-container">
            <div className="grid">
                <div className="col-4">
                    <img src={imgSrc} />
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <p>{name} - {price}</p>
                </div>
            </div>
            <div className="grid">
                <div className="col-2">
                    <button onClick={onBtnClick}>Zum Warenkorb</button>
                </div>
            </div>
        </div>
    )
}

export default Product