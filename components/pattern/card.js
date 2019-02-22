import { string } from "prop-types"

const Card = (props) => {
    return (
        <div className="card-container">
            <img className="" src={props.img} alt={props.description}></img>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>

    )
}

Card.propTypes = {
    title: string,
    content: string
}

export default Card