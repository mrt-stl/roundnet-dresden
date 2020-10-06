import parse from "html-react-parser"

interface IBannerProps {
    content: string
}

const Banner = (props: IBannerProps) => {
    const content = props.content

    return (
        <div className="banner-container flex align-items-center justify-content-center">
            <p>{parse(content)}</p>
        </div>
    )
}

export default Banner