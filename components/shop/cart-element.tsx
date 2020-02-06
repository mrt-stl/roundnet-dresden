interface ICartElementProps {
    ID: string
    imgSrc: string
    name: string
    price: string
    amount: string
    total: string
    removeLineItem: (lineItemID: string) => void
}

const CartElement = (props: ICartElementProps) => {
    const { ID, imgSrc, name, price, amount, total, removeLineItem } = props

    const removeLineItemWithID = () => {
        removeLineItem(ID)
    }

    return (
        <div className="grid no-wrap cart-element-container">
            <div className="col-2">
                <img src={imgSrc} />
            </div>
            <div className="col-2">
                <p><b>{name}</b></p>
                <a onClick={removeLineItemWithID}
                    style={{ color: "var(--font-color)", cursor: "pointer" }}>Entfernen</a>
            </div>
            <div className="col-1">
                <p>{price}</p>
            </div>
            <div className="col-1">
                <p>{amount} Stück</p>
            </div>
            <div className="col-2">
                <p style={{ float: "right" }}>{total}</p>
            </div>
        </div>
    )
}

export default CartElement