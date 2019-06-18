import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const Richtext = ({ data }) => {
    const content = asHtml(data.richtext_content)

    return (
        <div className="richtext-container">
            <div className="grid">
                <div className="col">
                    {Parser(content)}
                </div>

            </div>
            <style jsx>{`
                .richtext-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                }
            `}</style>
        </div>

    )
}

Richtext.propTypes = {
    data: object
}

export default Richtext