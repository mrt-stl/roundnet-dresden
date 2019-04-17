import Card from "./card"
import { object } from "prop-types"


const CardDeck4 = (props) => {

    return (
        <div className="card-deck-4-container">
            <div className="grid">
                <div className="col-2">
                    <Card
                        img={props.card1.img}
                        imgDescription={props.card1.imgDescription}
                        title={props.card1.title}
                        content={props.card1.content}
                        link={props.card1.link}
                        linkContent={props.card1.linkContent} />
                </div>
                <div className="col-2">
                    <Card
                        img={props.card2.img}
                        imgDescription={props.card2.imgDescription}
                        title={props.card2.title}
                        content={props.card2.content}
                        link={props.card2.link}
                        linkContent={props.card2.linkContent} />
                </div>
                <div className="col-2">
                    <Card
                        img={props.card3.img}
                        imgDescription={props.card3.imgDescription}
                        title={props.card3.title}
                        content={props.card3.content}
                        link={props.card3.link}
                        linkContent={props.card3.linkContent} />
                </div>
                <div className="col-2">
                    <Card
                        img={props.card4.img}
                        imgDescription={props.card4.imgDescription}
                        title={props.card4.title}
                        content={props.card4.content}
                        link={props.card4.link}
                        linkContent={props.card4.linkContent} />
                </div>
            </div>

            <style jsx>{`
                .card-deck-4-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                    background-color: var(--all-gray-10);
                }
            `}</style>
        </div>
    )
}

CardDeck4.propTypes = {
    card1: object,
    card2: object,
    card3: object,
    card4: object
}

export default CardDeck4