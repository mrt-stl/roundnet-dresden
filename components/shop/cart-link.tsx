import { Component } from "react"
import { saveCheckoutID, getCheckoutID } from "../../utils/shop-utils"
import { client } from "../../models/config/shopify"

class CartLink extends Component {

    public render() {
        return (
            <div className="cart-link-container align-items-center">
                <a href="/cart">
                    Warenkorb
                </a>
            </div>
        )
    }

    public async componentDidMount() {
        const savedCheckoutID = getCheckoutID()
        if (!savedCheckoutID) {
            const checkout = await client.checkout.create()

            const checkoutID = checkout.id
            saveCheckoutID(checkoutID)
        }
    }
}

export default CartLink