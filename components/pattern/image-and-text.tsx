import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface IImageAndTextProps {
    content: string
    imgSrc: string
    imgAlt?: string
}

const ImageAndText = (props: IImageAndTextProps) => {
    const content = props.content
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <div className="image-and-text-container">
            <div className="grid align-items-center">
                <div className="col-4">
                    <TukanImage
                        src={imgSrc}
                        alt={imgAlt}
                        height="auto" />
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

export default ImageAndText