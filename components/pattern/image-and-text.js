import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const ImageAndText = ({ data }) => {
    const content = asHtml(data.content)
    
    return (
        <div className="image-and-text-container">
            <div className="grid align-items-center">
                <div className="col-4">
                    <img src={data.image.url} alt={data.image.alt} />
                </div>
                <div className="col-4">
                    <div className="text-container">
                        {Parser(content)}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .image-and-text-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                }
                .text-container {
                    padding: 32px;
                }
            `}</style>
        </div>
    )
}

ImageAndText.propTypes = {
    data: object
}

export default ImageAndText