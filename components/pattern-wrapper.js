import { array } from "prop-types"
import HeroImage from "./pattern/hero-image"


const PatternWrapper = ({ body }) => {
    const pattern = body.map((slice, index) => {
        return (createPattern(slice, index))
    })

    return (
        <div className="page-container">
            {pattern}
        </div>
    )
}

const createPattern = (slice, index) => {
    var pattern
    switch (slice.slice_type) {
        case "startbild":
            pattern = 
                <HeroImage 
                    key={index}
                    data={slice.primary} />
            break
    
        default:
            break
    }

    return pattern
}

PatternWrapper.propTypes = {
    body: array
}

export default PatternWrapper