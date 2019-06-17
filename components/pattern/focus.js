import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const Focus = ({ data }) => {
    const content = asHtml(data.focus_content)

    return (
        <div className="focus-container">
            <div className="grid">
                <div className="col">
                    {Parser(content)}
                </div>
            </div>
        </div>

    )
}

Focus.propTypes = {
    data: object
}

export default Focus