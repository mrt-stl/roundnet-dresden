import Card from "./card"

interface IDetailsCard {
    title?: string
    content?: string
}

export interface IDetailsProps {
    cards: IDetailsCard[]
    backgroundColor?: string
}

const Details = (props: IDetailsProps) => {
    const cards = props.cards
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "white"

    const details = cards.map((detail, index) => {

        return (
            <div key={index} className="col-2">
                <Card
                    title={detail.title}
                    content={detail.content} />
            </div>
        )
    })

    return (
        <div className="infinite-cards-container">
            <div className="grid">
                {details}
            </div>

            <style jsx>{`
                .infinite-cards-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                    background-color: ${backgroundColor};
                }

                @media (prefers-color-scheme: dark) {
                    .infinite-cards-container {
                        background-color: var(--background);
                    }
                }
            `}</style>
        </div>
    )
}

export default Details