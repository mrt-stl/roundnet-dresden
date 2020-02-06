interface ICartElementProps {
    imgSrc: string
    name: string
    price: string
    amount: string
    total: string
}

const CartElement = (props: ICartElementProps) => {
    const { imgSrc, name, price, amount, total } = props

    return (
        <div className="grid no-wrap cart-element-container">
            <div className="col-2">
                <img src={imgSrc} />
            </div>
            <div className="col-2">
                <p><b>{name}</b></p>
                <a style={{ color: "var(--font-color)" }}>Entfernen</a>
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