import parse from "html-react-parser"

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
                    <img
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
        </div>
    )
}

export default ImageAndText