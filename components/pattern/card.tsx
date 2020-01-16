import parse from "html-react-parser"
import TukanImage from "../elements/tukan-image"

export interface ICardProps {
    title?: string
    content?: string
    imgSrc?: string
    imgAlt?: string
    link?: string
    linkIsBlank?: boolean
}

const Card = (props: ICardProps) => {
    const { title, content, imgSrc, imgAlt, link } = props

    const { target, rel } = props.linkIsBlank ? { target: "_blank", rel: "noopener" } : { target: "", rel: "" }

    // Image
    const imgContainer = imgSrc ?
        <TukanImage
            src={imgSrc}
            alt={imgAlt}
            height="320px" /> :
        <div />

    // Title
    const titleContainer = title && title !== "" ?
        parse(title) :
        <div />

    // Content
    const contentContainer = content && content !== "" ?
        parse(content) :
        <div />

    const cardContentContainer = title || content ?
        <div>
            {titleContainer}
            {contentContainer}
        </div> :
        <></>

    return (
        <div className="card-container">
            {link ?
                <div className="link-container">
                    <a href={link} target={target} rel={rel}>
                        {imgContainer}
                        {cardContentContainer}

                    </a>
                </div> :
                <div>
                    {imgContainer}
                    {cardContentContainer}
                </div>
            }

            <style jsx>{`
                .link-container:hover {
                    opacity: 0.4;
                    transition: 0.3s ease-out;
                }

                a {
                    color: var(--primary);
                    background-image: none;
                }

                .card-content-container {
                    padding-bottom: 16px;
                    padding-left: 16px;
                    padding-right: 16px;
                }
            `}</style>
        </div>

    )
}

export default Card