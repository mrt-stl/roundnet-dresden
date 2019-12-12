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
                <div className="grid no-padding">
                    <div className="col no-padding">
                        <TukanImage
                            src={props.imgSrc}
                            alt={props.imgAlt}
                            height="100%"
                            width="auto" />
                        <p className="text-center">{props.caption}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .image-with-caption-container {
                    background-color: ${backgroundColor};
                    height: calc(100vh - 48px);
                }

                p {
                    padding-top: 2em;
                    color: ${color};
                }
            `}</style>
        </div>
    )
}

export default ImageWithCaption