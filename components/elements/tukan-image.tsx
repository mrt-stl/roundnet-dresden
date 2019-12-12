import { LazyLoadImage } from "react-lazy-load-image-component"

interface ITukanImageProps {
    src: string
    height: string | null
    alt?: string
    width?: string
}

const TukanImage = (props: ITukanImageProps) => {
    const width = props.width ?? "100%"

    return (
        <LazyLoadImage
            src={props.src}
            alt={props.alt}
            effect="opacity"
            height={props.height}
            width={width} />
    )
}

export default TukanImage