import { string, bool } from "prop-types"
import Parser from "html-react-parser"
import LazyLoad from "react-lazyload"

const Card = (props) => {
    const { title, content, img, imgDescription, link } = props

    const href = link && link !== "/undefined" ? link : ""
    const { target, rel } = props.linkIsBlank ? { target: "_blank", rel: "noopener" } : { target: "", rel: "" }

    // Image
    const imgContainer = img ?
        <LazyLoad height={"256px"} offset={200}>
            <img src={img} alt={imgDescription} />
        </LazyLoad> :
        <div />

    // Title
    const titleContainer = title !== "" ?
        Parser(title) :
        <div />

    // Content
    const contentContainer = content !== "" ?
        Parser(content) :
        <div />


    return (
        <div className="card-container">
            {href !== "" ?
                <a href={href} target={target} rel={rel}>
                    {imgContainer}
                    {titleContainer}
                    {contentContainer}
                </a> :
                <div>
                    {imgContainer}
                    {titleContainer}
                    {contentContainer}
                </div>
            }

            <style jsx>{`
                img {
                    height: 256px;
                    width: 100%;
                    object-fit: cover;
                }

                a {
                    color: var(--primary);
                }
                
                a:hover {
                    opacity: 0.4; 
                    transition: .3s ease-out;
                }
            `}</style>
        </div>

    )
}

Card.propTypes = {
    title: string,
    content: string,
    img: string,
    imgDescription: string,
    link: string,
    linkIsBlank: bool
}

export default Card