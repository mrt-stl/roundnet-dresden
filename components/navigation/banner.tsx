interface IBannerProps {
    content: string
}

const Banner = (props: IBannerProps) => {
    return (
        <div className="banner-container flex align-items-center justify-content-center">
            <p>{props.content}</p>
        </div>
    )
}

export default Banner