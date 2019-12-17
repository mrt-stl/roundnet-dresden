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
            <div className="grid no-padding align-items-center h-100">
                <div className="col no-padding">
                    <TukanImage
                        src={props.imgSrc}
                        alt={props.imgAlt}
                        height="auto"
                        width="auto" />
                    <p className="text-center">{props.caption}</p>
                </div>
            </div>

            <style jsx>{`
                .image-with-caption-container {
                    background-color: ${backgroundColor};
                    height: calc(100vh - 48px);
                }

                p {
                    padding-top: 0.5em;
                    color: ${color};
                    font-size: 0.875em;
                }
            `}</style>
        </div>
    )
}

export default ImageWithCaption