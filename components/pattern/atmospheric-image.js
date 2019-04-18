import { object } from "prop-types"
import LazyLoad from "react-lazyload"

const AtmosphericImage = ({ data }) => {
    const img = data.atmospheric_img.url
    const alt = data.atmospheric_img.alt

    return (
        <div className="atmo-image-container">
            <LazyLoad height={"60vh"} offset={200}>
                <img src={img} alt={alt}></img>
            </LazyLoad>
            
            <style jsx>{`
                .atmo-image-container {
                    position: relative;
                    height: 60vh;
                    width: 100vw;
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

AtmosphericImage.propTypes = {
    data: object
}

export default AtmosphericImage