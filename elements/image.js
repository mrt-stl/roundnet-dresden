import { string } from "prop-types"
import LazyLoad from "react-lazyload"

const Image = (props) => {

    if (props.img !== undefined) {
        return (
            <div className="image-container">
                <div className="grid">
                    <div className="col">
                        <LazyLoad height={"100%"} offset={200}>
                            <img src={props.img} alt={props.imgDescription}></img>
                        </LazyLoad>
                    </div>
                </div>

                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }

    else {
        return (<div></div>)
    }
}

Image.propTypes = {
    img: string,
    imgDescription: string
}

export default Image