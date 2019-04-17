import { string } from "prop-types"
import Link from "next/link"

const Overview = (props) => {
    return (
        <div className="blog-overview-container">
            <Link href={props.link} prefetch>
                <a>
                    <img src={props.img} alt={props.imgDescription}></img>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                </a>
            </Link>


            <style jsx>{`
                img {
                    height: 320px;
                    width: 100%;
                    object-fit: cover;
                }
            `}</style>
        </div>

    )
}

Overview.propTypes = {
    title: string,
    content: string,
    img: string,
    imgDescription: string,
    link: string
}

export default Overview