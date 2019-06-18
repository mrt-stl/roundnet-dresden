import Card from "./card"
import { array } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"

const Details = (props) => {

    const details = props.data.map((detail, index) => {
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
                    margin-top: var(--standard-spacing);
                    margin-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>
    )
}

Details.propTypes = {
    data: array
}

export default Details