import Card from "./card"
import { array } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"

const Details = ({ primary, items }) => {
    const backgroundColor = primary && primary.detail_background ? primary.detail_background : "var(--background)"

    const details = items.map((detail, index) => {
        const title = asHtml(detail.detail_title)
        const content = asHtml(detail.detail_content)

        return (
            <div key={index} className="col-2">
                <Card
                    title={title}
                    content={content} />
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

Details.propTypes = {
    data: array
}

export default Details