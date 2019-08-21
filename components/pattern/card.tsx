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

    return (
        <div className="card-container">
            {link ?
                <div className="link-container">
                    <a href={link} target={target} rel={rel}>
                        {imgContainer}
                        {titleContainer}
                        {contentContainer}
                    </a>
                </div> :
                <div>
                    {imgContainer}
                    {titleContainer}
                    {contentContainer}
                </div>
            }

            <style jsx>{`
                .link-container:hover {
                    opacity: 0.4;
                    transition: .3s ease-out;
                }

                a {
                    color: var(--primary);
                }
            `}</style>
        </div>

    )
}

export default Card