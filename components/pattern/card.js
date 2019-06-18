import { string } from "prop-types"
import Link from "next/link"
import Parser from "html-react-parser"
import LazyLoad from "react-lazyload"

const Card = (props) => {
    return (
        <div className="card-container">
            {/* Image */}
            {props.img !== undefined ?
                <LazyLoad height={"256px"} offset={200}>
                    {props.link !== undefined ?
                        <Link href={props.link}>
                            <a target="_blank" rel="noopener">
                                <img src={props.img} alt={props.imgDescription}></img>
                            </a>
                        </Link> :
                        <img src={props.img} alt={props.imgDescription}></img>
                    }
                </LazyLoad> :
                <div />
            }

            {/* Title */}
            {Parser(props.title)}

            {/* Content */}
            {Parser(props.content)}


            <style jsx>{`
                img {
                    height: 256px;
                    width: 100%;
                    object-fit: cover;
                }

                a {
                    color: var(--primary);
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
    link: string
}

export default Card