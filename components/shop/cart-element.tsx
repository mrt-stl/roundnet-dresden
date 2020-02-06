interface ICartElementProps {
    ID: string
    imgSrc: string
    name: string
    amount: string
    total: string
    removeLineItem: (lineItemID: string) => void
}

const CartElement = (props: ICartElementProps) => {
    const { ID, imgSrc, name, amount, total, removeLineItem } = props

    const removeLineItemWithID = () => {
        removeLineItem(ID)
    }

    return (
        <div className="grid no-wrap cart-element-container">
            <div className="col">
                <img src={imgSrc} />
            </div>
            <div className="col-2">
                <p><b>{name}</b></p>
                <a onClick={removeLineItemWithID}
                    style={{ color: "var(--font-color)", cursor: "pointer" }}>Entfernen</a>
            </div>

            <div className="col-2">
                <p style={{ float: "right" }}>{amount} Stück</p>
            </div>

            <div className="col-2">
                <p style={{ float: "right" }}>{total}</p>
            </div>
        </div>
    )
}

export default CartElement