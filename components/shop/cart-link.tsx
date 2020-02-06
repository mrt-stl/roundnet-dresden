import { Component } from "react"
import { saveCheckoutID, getCheckoutID } from "../../utils/shop-utils"
import { client } from "../../models/config/shopify"

class CartLink extends Component {

    public state = {
        total: 0
    }

    public render() {
        const { total } = this.state

        return (
            <div className="cart-link-container align-items-center">
                <a href="/cart">
                    Warenkorb ({total.toFixed(2)} EUR)
                </a>
            </div>
        )
    }

    public async componentDidMount() {
        let checkout = null
        const savedCheckoutID = getCheckoutID()
        if (!savedCheckoutID) {
            checkout = await client.checkout.create()

            const checkoutID = checkout.id
            saveCheckoutID(checkoutID)

        } else {
            checkout = await client.checkout.fetch(savedCheckoutID)
        }

        const lineItems = checkout.lineItems
        let total = 0
        for (const lineItem of lineItems) {
            const amount = lineItem.quantity
            const price = lineItem.variant.priceV2.amount
            const parsedPrice = parseFloat(price)

            total += (amount * parsedPrice)
        }

        this.setState({ total })
    }
}

export default CartLink