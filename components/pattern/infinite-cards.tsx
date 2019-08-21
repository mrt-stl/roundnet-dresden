import Card, { ICardProps } from "./card"

export interface IInfiniteCardProps {
    cards: ICardProps[]
}

const InfiniteCards = (props: IInfiniteCardProps) => {
    const cards = props.cards.map((card, index) => {
        const imgSrc = card.imgSrc
        const imgAlt = card.imgAlt
        const title = card.title
        const content = card.content
        const link = card.link
        const linkIsBlank = card.linkIsBlank

        return (
            <div key={index} className="col-4">
                <Card
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    title={title}
                    content={content}
                    link={link}
                    linkIsBlank={linkIsBlank} />
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
                    margin-top: var(--standard-spacing);
                    margin-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>
    )
}

export default InfiniteCards