import Card from "./card"
import { array } from "prop-types"
import { asHtml, linkResolver, asText } from "../../utils/prismic-utils"


const InfiniteCards = (props) => {

    const cards = props.data.map((card, index) => {
        const img = card.card_img.url
        const imgAlt = card.card_img.alt
        const title = asHtml(card.card_title)
        const content = asHtml(card.card_content)
        const link = linkResolver(card.card_link)

        return (
            <div key={index} className="col-4">
                <Card
                    img={img}
                    imgDescription={imgAlt}
                    title={title}
                    content={content}
                    link={link}
                    linkContent={linkContent} />
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
    data: array
}

export default InfiniteCards