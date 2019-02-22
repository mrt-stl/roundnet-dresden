import { string } from "prop-types"

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={props.img} alt={props.imgDescription}></img>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <a href={props.link}>{props.linkContent}</a>

            {cardStyle}
        </div>

    )
}

const cardStyle = <style jsx>{`
img {
    width: 100%;
    height: auto;
}
`}</style>

Card.propTypes = {
    title: string,
    content: string,
    img: string,
    imgDescription: string,
    link: string,
    linkContent: string
}

export default Card