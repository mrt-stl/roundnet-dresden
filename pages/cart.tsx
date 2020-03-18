import { Component } from "react"
import { client } from "../models/config/shopify"
import { getCheckoutID } from "../utils/shop-utils"
import Meta from "../components/meta"
import { IMetaData } from "../models/config/meta-data"
import Nav from "../components/navigation/nav"
import CartElement from "../components/shop/cart-element"
import { routeTo } from "../utils/link-utils"

class Cart extends Component {
    public state = {
        checkoutUrl: null,
        lineItems: [],
    }

    public render() {
        const { lineItems } = this.state
        const metaData: IMetaData = {
            metaAuthor: null,
            metaTitle: "Warenkorb",
            metaDescription: null,
            metaOgImg: null
        }

        let total = 0
        const lineItemDivs = lineItems.map((lineItem, index) => {
            const amount = lineItem.quantity
            const currencyCode = lineItem.variant.priceV2.currencyCode

            const price = lineItem.variant.priceV2.amount
            const parsedPrice = parseFloat(price)
            const totalPrice = (amount * parsedPrice).toFixed(2) + " " + currencyCode

            total += (amount * parsedPrice)

            return (
                <CartElement
                    ID={lineItem.id}
                    key={index}
                    imgSrc={lineItem.variant.image.src}
                    name={lineItem.title}
                    amount={amount}
                    total={totalPrice}
                    removeLineItem={this.removeLineItem}
                />
            )
        })

        return (
            <div className="gemacht-mit-stadtteilliebe">
                <Meta
                    data={metaData} />

                <Nav />

                <div className="tukan-container">
                    <div className="cart-container">

                        <div className="grid" style={{ paddingTop: "3em", paddingBottom: "2em" }}>
                            <div className="col">
                                <h2>Einkaufswagen</h2>
                                <a href="/" style={{ color: "var(--font-color)" }}>Zurück zum Shop</a>
                            </div>
                        </div>

                        <div className="grid no-wrap cart-head-container">
                            <div className="col-4">
                                <p>Artikel</p>
                            </div>

                            <div className="col-2">
                                <p style={{ float: "right" }}>Menge</p>
                            </div>
                            <div className="col-2">
                                <p style={{ float: "right" }}>Gesamt</p>
                            </div>
                        </div>

                        {lineItemDivs}

                        <div className="grid justify-content-end" style={{ paddingTop: "1em" }}>
                            <div className="col-2">
                                <p style={{ float: "right" }}>Summe</p>
                            </div>
                            <div className="col-2">
                                <p style={{ float: "right" }}>{total.toFixed(2)} EUR</p>
                            </div>
                        </div>

                        <div className="grid justify-content-end">
                            <div className="col-2">
                                <button style={{ float: "right" }} onClick={this.onCheckoutBtnClick}>Zur Kasse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    public componentDidMount() {
        const checkoutID = getCheckoutID()
        if (checkoutID) {
            client.checkout.fetch(checkoutID).then((checkout) => {
                this.setState({
                    checkoutUrl: checkout.webUrl,
                    lineItems: checkout.lineItems
                })
            })
        }
    }

    private onCheckoutBtnClick = () => {
        routeTo("https://shop.stadtteilliebe.de/checkout")
    }

    private removeLineItem = (lineItemID: string) => {
        const lineItemIdsToRemove = []
        lineItemIdsToRemove.push(lineItemID)

        const checkoutID = getCheckoutID()
        if (checkoutID) {
            client.checkout.removeLineItems(checkoutID, lineItemIdsToRemove).then((checkout) => {
                this.setState({
                    lineItems: checkout.lineItems
                })
            })
        }
    }
}

export default Cart