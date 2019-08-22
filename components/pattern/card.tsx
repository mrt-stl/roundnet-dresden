import parse from "html-react-parser"
import LazyLoad from "react-lazyload"

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
        <LazyLoad height={"256px"} offset={200}>
            <img src={imgSrc} alt={imgAlt} />
            <style jsx>{`
                img {
                    height: 256px;
                    width: 100%;
                    object-fit: cover;
                }
            `}</style>
        </LazyLoad> :
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
        <div style={{ paddingBottom: "16px", paddingLeft: "16px", paddingRight: "16px" }}>
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
                    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 24px 0px;
                    transition: 0.8s ease-out;
                }

                a {
                    color: var(--primary);
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