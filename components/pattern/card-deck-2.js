import Card from "./card"
import { object, string } from "prop-types"

const CardDeck2 = (props) => {
    const cardDeckColor = props.cardDeckColor !== undefined ? props.cardDeckColor : "var(--white)"

    return (
        <div className="card-deck-2-container" style={{ backgroundColor: cardDeckColor }}>
            <div className="grid">
                <div className="col-4">
                    <Card
                        img={props.card1.img}
                        imgDescription={props.card1.imgDescription}
                        title={props.card1.title}
                        content={props.card1.content}
                        link={props.card1.link}
                        linkContent={props.card1.linkContent} />
                </div>
                <div className="col-4">
                    <Card
                        img={props.card2.img}
                        imgDescription={props.card2.imgDescription}
                        title={props.card2.title}
                        content={props.card2.content}
                        link={props.card2.link}
                        linkContent={props.card2.linkContent} />
                </div>
            </div>

            <style jsx>{`
                .card-deck-2-container {
                    margin-top: 5em;
                    margin-bottom: 5em;
                }
            `}</style>
        </div>
    )
}

CardDeck2.propTypes = {
    cardDeckColor: string,
    card1: object,
    card2: object
}

export default CardDeck2