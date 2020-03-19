import { addToCart } from "../../utils/shop-utils"
import parse from "html-react-parser"
import useCart from "../../src/hooks/cart-hook"

export interface IShopifyProductProps {
    name: string
    description: string
    price: string
    imgSrc: string
    variantID: string
}

const ShopifyProduct = (props: IShopifyProductProps) => {
    const { name, price, imgSrc, variantID, description } = props
    const [total, setTotal] = useCart()

    const onBtnClick = () => {
        const successfullyAdded = addToCart(variantID)
        if (successfullyAdded) {
            // Add price to cart state.
            const parsedPrice = parseFloat(price)
            setTotal(total + parsedPrice)
        }
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

export default ShopifyProduct