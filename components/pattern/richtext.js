import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const Richtext = ({ data }) => {
    const content = asHtml(data.richtext_content)

    return (
        <div className="grid">
            <div className="col">
                {Parser(content)}
            </div>


            <style jsx>{`
                
            `}</style>
        </div>
    )
}

Richtext.propTypes = {
    data: object
}

export default Richtext