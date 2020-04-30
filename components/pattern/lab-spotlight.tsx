import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface ILabSpotlightProps {
    content: string
    link: string
    imgSrc?: string
    imgAlt?: string
}

const LabSpotlight = (props: ILabSpotlightProps) => {
    const content = props.content
    const link = props.link
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt

    return (
        <div className="lab-container">
            <a href={link}>
                <div className="grid-lab">
                    <div className="height">
                        <TukanImage
                            src={imgSrc}
                            alt={imgAlt}
                            height="auto" />
                    </div>
                </div>
                <div className="lab-spotlight-content">
                    {parse(content)}
                </div>
            </a>
        </div>
    )
}

export default LabSpotlight