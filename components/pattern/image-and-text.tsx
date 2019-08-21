import { object } from "prop-types"
import parse from "html-react-parser"
import LazyLoad from "react-lazyload"

interface IImageAndTextProps {
    content: string
    imgSrc: string
    imgAlt?: string
    imgHeight?: string | number
}

const ImageAndText = (props: IImageAndTextProps) => {
    const content = props.content
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt
    const imgHeight = props.imgHeight ? props.imgHeight.toString() + "px" : "auto"

    return (
        <div className="image-and-text-container">
            <div className="grid align-items-center">
                <div className="col-4">
                    <LazyLoad height={imgHeight} offset={200}>
                        <img src={imgSrc} alt={imgAlt} />
                    </LazyLoad>
                </div>
                <div className="col-4">
                    <div className="text-container">
                        {parse(content)}
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