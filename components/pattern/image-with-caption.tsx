import TukanImage from "../elements/tukan-image"
import { isColorLight } from "../../utils/color-utils"
import { isNullOrUndefined } from "util"

export interface IImageWithCaptionProps {
    videoSrc: string
    imgSrc: string
    imgAlt?: string
    caption?: string
    backgroundColor?: string
}

const ImageWithCaption = (props: IImageWithCaptionProps) => {
    const { videoSrc, imgSrc, imgAlt } = props

    const backgroundColor = props.backgroundColor ? props.backgroundColor : "var(--background)"
    const color = !isColorLight(backgroundColor) || backgroundColor === "var(--background)" ?
        "#FFFFFF" :
        "#121212"

    let centricElement: JSX.Element
    switch (true) {
        case !isNullOrUndefined(videoSrc):
            const videoWithoutYTBranding = videoSrc + "?modestbranding=1"
            centricElement =
                <div className="justify-content-center" style={{ height: "60vh" }}>
                    <iframe
                        src={videoWithoutYTBranding}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        width="100%"
                        height="100%"
                    />
                </div>
            break

        case !isNullOrUndefined(imgSrc):
            centricElement =
                <TukanImage
                    src={imgSrc}
                    alt={imgAlt}
                    height="auto"
                    width="auto" />
            break
    }

    return (
        <div className="image-with-caption-container">
            <div className="grid no-padding align-items-center h-100">
                <div className="col no-padding">
                    {centricElement}

                    <p className="text-center" style={{ color }}>
                        {props.caption}
                    </p>
                </div>
            </div>

            <style jsx>{`
                .image-with-caption-container {
                    background-color: ${backgroundColor};
                    height: calc(100vh - 48px);
                }

                p {
                    padding-top: 0.5em;
                }

            `}</style>
        </div>
    )
}

export default ImageWithCaption