import TukanImage from "../elements/tukan-image"
import { isColorLight } from "../../utils/color-utils"

export interface IImageWithCaptionProps {
    imgSrc: string
    imgAlt?: string
    caption?: string
    backgroundColor?: string
}

const ImageWithCaption = (props: IImageWithCaptionProps) => {
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "var(--background)"
    const color = !isColorLight(backgroundColor) || backgroundColor === "var(--background)" ?
        "#FFFFFF" :
        "var(--font-color)"

    return (
        <div className="image-with-caption-container">
            <div className="grid">
                <div className="col">
                    <TukanImage
                        src={props.imgSrc}
                        alt={props.imgAlt}
                        height="auto" />
                </div>
            </div>
            <div className="grid justify-content-center">
                <div className="col-4 text-center">
                    <p>{props.caption}</p>
                </div>
            </div>

            <style jsx>{`
                .image-with-caption-container {
                    background-color: ${backgroundColor};
                    padding-top: var(--large-spacing);
                    padding-bottom: var(--large-spacing);
                }

                p {
                    color: ${color};
                }
            `}</style>
        </div>
    )
}

export default ImageWithCaption