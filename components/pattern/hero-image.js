import { string } from "prop-types"
import Link from "next/link"
import LazyLoad from "react-lazyload"

const HeroImage = (props) => {
    return (
        <div id="hero-image" className="hero-image-container">
            <div className="hero-image-content-container text-center">
                <h1>{props.title}</h1>
                <Link href={props.link !== undefined ? props.link : ""}>
                    <a>{props.linkContent}</a>
                </Link>
            </div>
            <LazyLoad height={"90vh"} offset={200}>
                <img src={props.backgroundImg} alt={props.imgDescription}></img>
            </LazyLoad>
            <style jsx>{`
                .hero-image-container {
                    position: relative;
                    height: 90vh;
                    width: 100vw;
                }
                .hero-image-content-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%); 
                }
                h1 {
                    color: var(--white);
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                a {
                    color: var(--white);
                }
            `}</style>
        </div>
    )
}

HeroImage.propTypes = {
    title: string,
    backgroundImg: string,
    imgDescription: string,
    link: string,
    linkContent: string
}

export default HeroImage