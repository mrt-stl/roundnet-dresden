import { object } from "prop-types"
import LazyLoad from "react-lazyload"
import { asText, asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"

const Preview = ({ data }) => {
    const title = asText(data.preview_title)
    const content = asHtml(data.preview_content)
    const img = data.preview_image.url
    const alt = data.preview_image.alt

    console.log(img)

    return (
        <div className="preview-container">
            <div className="grid">
                <div className="col-4">
                    <h2>{title}</h2>
                    {Parser(content)}
                </div>
            </div>

            {img !== undefined ?
            <div className="grid">
                <div className="col">
                    <LazyLoad height={"512px"} offset={200}>
                        <img src={img} alt={alt}></img>
                    </LazyLoad>
                </div>
            </div>
            :
            <div/>
            }

            <style jsx>{`
                img {
                    width: 100%;
                    height: 512px;
                    object-fit: cover;
                }
                .preview-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                    background-color: var(--all-gray-10);
                }
            `}</style>
        </div>

    )
}

Preview.propTypes = {
    data: object
}

export default Preview