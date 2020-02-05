import * as ls from "local-storage"
import { client } from "../models/config/shopify"

const LS_ID = "CHECKOUT_ID"

export const addToCart = async (variantID: number) => {
    const checkoutID = getCheckoutID()
    const lineItemsToAdd = [{
        variantId: variantID,
        quantity: 1,
    }]

    try {
        const checkout = await client.checkout.addLineItems(checkoutID, lineItemsToAdd)
        console.log(checkout)
    } catch (e) {
        console.log(e)
    }
}

export const saveCheckoutID = (checkoutID: string) => {
    ls.set(LS_ID, checkoutID)
}

export const getCheckoutID = () => {
    const checkoutID: string = ls.get(LS_ID)
    return checkoutID
}
