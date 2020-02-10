import { useEffect } from "react"
import useCart from "../../src/hooks/cart-hook"
import { saveCheckoutID, getCheckoutID } from "../../utils/shop-utils"
import { client } from "../../models/config/shopify"

const CartLink = () => {
    const [total, setTotal] = useCart()

    useEffect(() => {
        setTotalFromShopify()
    }, [])

    // Get total sum from shopify and set it to state hook.
    const setTotalFromShopify = async () => {
        const totalFromShopify = await getTotalFromShopify()
        setTotal(totalFromShopify)
    }

    return (
        <div className="cart-link-container align-items-center">
            <a href="/cart">
                Warenkorb ({total.toFixed(2)} EUR)
            </a>
        </div>
    )
}
export default CartLink

const getTotalFromShopify = async () => {
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

    return total
}
