import Card from "./card"
import { array } from "prop-types"


const InfiniteCards = (props) => {

    const cards = props.cards.map((card, index) => {
        return (
            <div key={index} className="col-4">
                <Card
                    img={card.img}
                    imgDescription={card.imgDescription}
                    title={card.title}
                    content={card.content}
                    link={card.link}
                    linkContent={card.linkContent} />
            </div>
        )
    })

    return (
        <div className="infinite-cards-container">
            <div className="grid">
                {cards}
            </div>

            <style jsx>{`
                .infinite-cards-container {
                    margin-top: 5em;
                    margin-bottom: 5em;
                }
            `}</style>
        </div>
    )
}

InfiniteCards.propTypes = {
    cards: array
}

export default InfiniteCards