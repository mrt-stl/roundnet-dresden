import LazyLoad from "react-lazyload"

export interface IHeroImageProps {
    imgSrc: string
    imgAlt?: string
    title?: string
    link?: string
    linkContent?: string
    linkIsBlank?: boolean
}

const HeroImage = (props: IHeroImageProps) => {
    const imgSrc = props.imgSrc
    const imgAlt = props.imgAlt
    const title = props.title
    const link = props.link
    const linkContent = props.linkContent
    const linkIsBlank = props.linkIsBlank

    const titleContainer = title ?
        <h1 style={{ color: "var(--white)", fontSize: "3em" }}>{title}</h1> :
        <></>

    return (
        <div className="hero-image-container">
            <div className="hero-image-content-container text-center">
                <div className="fadeInUp">
                    {titleContainer}
                    {link ?
                        <div>
                            {linkIsBlank ?
                                <a href={link} className="link-content" target="_blank" rel="noopener">{linkContent}</a> :
                                <a href={link} className="link-content">{linkContent}</a>
                            }
                        </div> :
                        <p className="link-content">{linkContent}</p>
                    }
                </div>

            </div>
            <LazyLoad height={"90vh"} offset={200}>
                <img src={imgSrc} alt={imgAlt} />
            </LazyLoad>

            <style jsx>{`
                .hero-image-container {
                    position: relative;
                    height: 90vh;
                    width: 100%;
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
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                @-webkit-keyframes fadeInUp {
                    from {
                    opacity: 0;
                    -webkit-transform: translate3d(0, 100%, 0);
                    transform: translate3d(0, 100%, 0);
                    }

                    to {
                    opacity: 1;
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                    opacity: 0;
                    -webkit-transform: translate3d(0, 100%, 0);
                    transform: translate3d(0, 100%, 0);
                    }

                    to {
                    opacity: 1;
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    }
                }

                .fadeInUp {
                    animation-name: fadeInUp;
                    animation-duration: 1.5s;
                    animation-fill-mode: both;
                    animation-delay: 0.6s;
                }
            `}</style>
        </div>
    )
}

export default HeroImage