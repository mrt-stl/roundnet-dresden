import { object } from "prop-types"

const HighlightText = (props) => {
    return (
        <div className="highlight-container">
            <div className="grid justify-content-center">
                <div className="col-6">{props.content}</div>
            </div>

            <style jsx>{`
                .highlight-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                }
            `}</style>
        </div>
    )
}

HighlightText.propTypes = {
    content: object
}

export default HighlightText