export interface IProductProps {
    name: string
    price: string
    imgSrc: string
}

const Product = (props: IProductProps) => {
    const { name, price, imgSrc } = props
    return (
        <div className="product-container">
            <div className="grid">
                <div className="col-4">
                    <img src={imgSrc} />
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <p>{name} - {price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product