import { useEffect } from "react"
import { client } from "../../models/config/shopify"

const ShopifyCart = () => {

    useEffect(() => {
        client.checkout.create().then((res: any) => {
            console.log(res.webUrl)
        })
    })

    return (
        <div>Cart</div>
    )
}

export default ShopifyCart