import { string } from "prop-types"
import Link from "next/link"

const HeroImage = (props) => {
    return (
        <div className="hero-image-container">
            <div className="hero-image-content-container text-center">
                <h1>{props.title}</h1>
                <Link href={props.link}>
                    <a>{props.linkContent}</a>
                </Link>
            </div>
            
            <img src={props.backgroundImg} alt={props.imgDescription}></img>
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