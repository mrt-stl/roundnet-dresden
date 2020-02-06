import { addToCart } from "../../utils/shop-utils"
import parse from "html-react-parser"

export interface IProductProps {
    name: string
    description: string
    price: string
    imgSrc: string
    variantID: string
}

const Product = (props: IProductProps) => {
    const { name, price, imgSrc, variantID, description } = props

    const onBtnClick = () => {
        addToCart(variantID)
    }

    return (
        <div className="product-container">
            <div className="grid">
                <div className="col-4">
                    <img src={imgSrc} />
                </div>
                <div className="col-4">
                    <p><b>{name}</b></p>
                    <p>{price} EUR</p>

                    {parse(description)}

                    <button onClick={onBtnClick}>Zum Warenkorb</button>
                </div>
            </div>
        </div>
    )
}

export default Product