import { object } from "prop-types"
import Link from "next/link"
import LazyLoad from "react-lazyload"
import { asText, linkResolver } from "../../utils/prismic-utils"

const HeroImage = ({ data }) => {
    const title = asText(data.hero_image_title)
    const link = linkResolver(data.hero_image_link)
    const linkContent = asText(data.hero_image_link_content)
    const img = data.hero_image_img.url
    const imgDescription = data.hero_image_img.alt

    return (
        <div id="hero-image" className="hero-image-container">
            <div className="hero-image-content-container text-center">
                <h1>{title}</h1>
                <Link href={link? link : ""}>
                    <a>{linkContent}</a>
                </Link>
            </div>
            <LazyLoad height={"90vh"} offset={200}>
                <img src={img} alt={imgDescription}></img>
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
    data: object
}

export default HeroImage