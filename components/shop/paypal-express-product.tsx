import parse from "html-react-parser"

export interface IPaypalExpressProductProps {
    name: string
    description: string
    price: string
    imgSrc: string
}

const PaypalExpressProduct = (props: IPaypalExpressProductProps) => {
    const { imgSrc, name, price, description } = props

    return (
        <div className="product-container">
            <div className="grid">
                <div className="col-4">
                    <img src={imgSrc} />
                </div>

                <div className="col-4">
                    <p><b>{name}</b></p>
                    <p>{price} EUR</p>

                    {parse(description)}

                    <button>Express Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default PaypalExpressProduct