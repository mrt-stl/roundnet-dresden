import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const HighlightText = ({ data }) => {
    const content = asHtml(data.highlight_content)
    
    return (
        <div className="highlight-container">
            <div className="grid justify-content-center">
                <div className="col-6">{Parser(content)}</div>
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
    data: object
}

export default HighlightText