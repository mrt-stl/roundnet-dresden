import { Component } from "react"
import { client } from "../models/config/shopify"
import { getCheckoutID } from "../utils/shop-utils"

class Cart extends Component {
    public state = {
        checkoutUrl: null
    }

    public render() {
        const { checkoutUrl } = this.state
        return (
            <div>
                <a href={checkoutUrl}>Zur Kasse</a>
            </div>
        )
    }

    public componentDidMount() {
        const checkoutID = getCheckoutID()
        if (checkoutID) {
            client.checkout.fetch(checkoutID).then((checkout) => {
                this.setState({ checkoutUrl: checkout.webUrl })
            })
        }
    }
}

export default Cart