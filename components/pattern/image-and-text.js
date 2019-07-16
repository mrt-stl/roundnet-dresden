import { object } from "prop-types"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"
import LazyLoad from "react-lazyload"

const ImageAndText = ({ data }) => {
    const content = asHtml(data.content)

    // Get height or die tryin
    const height = data.image ? data.image.dimensions.height.toString() + "px" : "0"

    return (
        <div className="image-and-text-container">
            <div className="grid align-items-center">
                <div className="col-4">
                    <LazyLoad height={height} offset={200}>
                        <img src={data.image.url} alt={data.image.alt} />
                    </LazyLoad>
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