import { LazyLoadImage } from "react-lazy-load-image-component"

interface ITukanImageProps {
    src: string
    height: string
    alt?: string
}

const TukanImage = (props: ITukanImageProps) => {
    return (
        <LazyLoadImage
            src={props.src}
            alt={props.alt}
            effect="opacity"
            height={props.height}
            width="100%" />
    )
}

export default TukanImage