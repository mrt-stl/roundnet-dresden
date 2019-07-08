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
    const linkIsBlank = data.hero_image_link.target === "_blank"

    return (
        <div className="hero-image-container">
            <div className="hero-image-content-container text-center">
                <h1>{title}</h1>
                {link !== "/undefined" ? 
                    <Link href={link}>
                        {linkIsBlank ?
                            <a className="link-content" target="blank" rel="noopener">{linkContent}</a> :
                            <a className="link-content">{linkContent}</a>
                        }
                    </Link>
                    :
                    <p className="link-content">{linkContent}</p>
                }
            </div>
            <LazyLoad height={"90vh"} offset={200}>
                <img src={img} alt={imgDescription}></img>
            </LazyLoad>
            
            <style jsx>{`
                h1 {
                    font-size: 3em;
                }
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
                .link-content {
                    color: var(--white);
                }
                h1 {
                    color: var(--white);
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </div>
    )
}

HeroImage.propTypes = {
    data: object
}

export default HeroImage