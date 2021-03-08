import LazyLoad from "react-lazyload"
import { useInView } from "react-hook-inview"
import styled from "styled-components"
import Divider from "../elements/divider"

export interface IHeroImageProps {
    imgSrc: string
    imgAlt?: string
    title?: string
    link?: string
    linkContent?: string
    linkIsBlank?: boolean
}

const HeroImage = (props: IHeroImageProps) => {
    const { imgSrc, imgAlt, title, link, linkContent, linkIsBlank } = props

    const titleContainer = title ? <h1 style={{ color: "var(--white)", fontSize: "3em" }}>{title}</h1> : <></>

    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
        threshold: 0.2,
    })

    const animationClassName = isVisible ? "fadeInUp" : ""

    return (
        <HeroImageContainer>
            <HeroImageContentContainer ref={ref}>
                {isVisible ? (
                    <div className={animationClassName}>
                        <Divider marginLeft="calc(50% - 60px)" marginBottom="40px" color="white"/>
                        {titleContainer}
                        {link ? (
                            <div>
                                {linkIsBlank ? (
                                    <LinkContent href={link} target="_blank" rel="noopener">
                                        {linkContent}
                                    </LinkContent>
                                ) : (
                                    <a href={link} className="link-content">
                                        {linkContent}
                                    </a>
                                )}
                            </div>
                        ) : (
                            <p className="link-content">
                                {linkContent}
                            </p>
                        )}
                    </div>
                ) : (
                    <div />
                )}
            </HeroImageContentContainer>
            <LazyLoad height={"90vh"} offset={200}>
                <HeroImageImg src={imgSrc} alt={imgAlt} />
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
        </HeroImageContainer>
    )
}

const HeroImageContainer = styled.div`
    position: relative;
    height: 90vh;
    width: 100%;
`

const HeroImageContentContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: ${(props) => props.theme.secondaryFont.name};

    h1 {
        background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 64%, rgba(255,255,255,0.2) 83%, rgba(255,255,255,0.5) 100%);
        animation: gradient 4s ease infinite;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 400% 400%;
        font-weight: ${(props) => props.theme.fontWeight.light};
    }
    `

const LinkContent = styled.a`
    color: var(--white);
`

const HeroImageImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export default HeroImage
