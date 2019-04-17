import { string } from "prop-types"
import LazyLoad from "react-lazyload"

const AtmosphericImage = (props) => {
    return (
        <div className="atmo-image-container">
            <LazyLoad height={"60vh"} offset={200}>
                <img src={props.backgroundImg} alt={props.imgDescription}></img>
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
    backgroundImg: string,
    imgDescription: string
}

export default AtmosphericImage