import { Component } from "react"
import { saveCheckoutID, getCheckoutID } from "../../utils/shop-utils"
import { client } from "../../models/config/shopify"

class ShopifyCart extends Component {

    public render() {
        return (
            <a href="/cart">
                Warenkorb
            </a>
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

export default ShopifyCart