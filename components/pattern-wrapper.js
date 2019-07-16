import { array } from "prop-types"
import HeroImage from "./pattern/hero-image"
import InfiniteCards from "./pattern/infinite-cards"
import AtmosphericImage from "./pattern/atmospheric-image"
import Details from "./pattern/details"
import Action from "./pattern/action"
import Preview from "./pattern/preview"
import HighlightText from "./pattern/highlight-text"
import Richtext from "./pattern/richtext"
import Location from "./pattern/location"
import Focus from "./pattern/focus"
import ImageAndText from "./pattern/image-and-text"


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
    let pattern
    switch (slice.slice_type) {
        case "startbild":
            pattern =
                <HeroImage
                    key={index}
                    data={slice.primary} />
            break

        case "karte":
            pattern =
                <InfiniteCards
                    key={index}
                    data={slice.items} />
            break

        case "atmospheric":
            pattern =
                <AtmosphericImage
                    key={index}
                    data={slice.primary} />
            break

        case "details":
            pattern =
                <Details
                    key={index}
                    primary={slice.primary}
                    items={slice.items} />
            break

        case "action":
            pattern =
                <Action
                    key={index}
                    data={slice.primary} />
            break

        case "preview":
            pattern =
                <Preview
                    key={index}
                    data={slice.primary} />
            break

        case "highlight":
            pattern =
                <HighlightText
                    key={index}
                    data={slice.primary} />
            break

        case "richtext":
            pattern =
                <Richtext
                    key={index}
                    data={slice.primary} />
            break

        case "focus":
            pattern =
                <Focus
                    key={index}
                    data={slice.primary} />
            break

        case "location":
            pattern =
                <Location
                    key={index}
                    data={slice.primary} />
            break

        case "image_and_text":
            pattern =
                <ImageAndText
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