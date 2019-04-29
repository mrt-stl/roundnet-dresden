import { object } from "prop-types"
import LazyLoad from "react-lazyload"
import { asText, asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const Preview = ({ data }) => {
    const title = asText(data.preview_title)
    const content = asHtml(data.preview_content)
    const img = data.preview_image.url
    const alt = data.preview_image.alt

    return (
        <div id="preview" className="preview-container">
            <div className="grid">
                <div className="col-4">
                    <h2>{title}</h2>
                    {Parser(content)}
                </div>
            </div>

            <div className="grid">
                <div className="col">
                    <LazyLoad height={"512px"} offset={200}>
                        <img src={img} alt={alt}></img>
                    </LazyLoad>
                </div>
            </div>

            <style jsx>{`
                img {
                    width: 100%;
                    height: 512px;
                    object-fit: cover;
                }
                .preview-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                    background-color: #f7f7f7;
                }
            `}</style>
        </div>

    )
}

Preview.propTypes = {
    data: object
}

export default Preview