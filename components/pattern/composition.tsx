import parse from "html-react-parser"
import { useInView } from "react-hook-inview"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import Divider from "../elements/divider"

export interface ICompositionProps {
    compositionBackground1: any
    compositionBackground2: any
    compositionGallery1: any
    compositionGallery2: any
    compositionGallery3: any
    compositionHeadline: string
    compositionSubtitle: string
    compositionContent: string
    compositionStatement: string
    compositionStatementContent: string
}

const Composition = (props: ICompositionProps) => {
    const {
        compositionBackground1,
        compositionBackground2,
        compositionGallery1,
        compositionGallery2,
        compositionGallery3,
        compositionHeadline,
        compositionSubtitle,
        compositionContent,
        compositionStatement,
        compositionStatementContent,
    } = props

    const [ref, isVisible] = useInView({
        unobserveOnEnter: true,
        threshold: 0.2,
    })

    return (
        <CompositionContainer>
            <StageContainer>
                <StyledBackground background={compositionBackground1.url} height="600px">
                    <CompositionGrid valign="center" height="100%" alignContent="flex-center">
                        <CompositionCol size={1 / 1} collapse="md">
                            <StageContent>
                                {parse(compositionHeadline)}
                                {parse(compositionSubtitle)}
                            </StageContent>
                        </CompositionCol>
                    </CompositionGrid>
                </StyledBackground>
            </StageContainer>

            <CompositionGrid height="100%">
                <CompositionCol size={1 / 2} collapse="md">
                    <Divider marginTop="8em" marginBottom="3em" />
                    <div>{parse(compositionContent)}</div>
                </CompositionCol>
            </CompositionGrid>

            <XBackground background={compositionBackground2.url} height="800px" style={{ marginTop: "4em" }} />

            <CompositionGrid height="100%" style={{ textAlign: "left" }}>
                <Divider marginTop="20em" marginBottom="2em" />
                <CompositionCol size={1} collapse="md">
                    <div>{parse(compositionStatement)}</div>
                </CompositionCol>

                <CompositionCol size={2 / 3} collapse="md">
                    <div>{parse(compositionStatementContent)}</div>
                </CompositionCol>
            </CompositionGrid>

            {/* Gallery Pattern */}

            <GalleryGrid valign="center">
                <GalleryCol01 ref={ref} size={1 / 2}>
                    {isVisible ? (
                        <div className="fadeInUp">
                            <img src={compositionGallery1.url} alt={compositionGallery1.alt} height="auto" />
                        </div>
                    ) : (
                        <div style={{ display: "none" }}>
                            <img src={compositionGallery1.url} alt={compositionGallery1.alt} height="auto" />
                        </div>
                    )}
                </GalleryCol01>
                <GalleryCol02 ref={ref} size={1 / 2}>
                    {isVisible ? (
                        <div className="fadeInUp1">
                            <img src={compositionGallery2.url} alt={compositionGallery2.alt} height="auto" />
                        </div>
                    ) : (
                        <div style={{ display: "none" }}>
                            <img src={compositionGallery2.url} alt={compositionGallery2.alt} height="auto" />
                        </div>
                    )}
                </GalleryCol02>
                <GalleryCol03 ref={ref} size={1 / 2} collapse="md">
                    {isVisible ? (
                        <div className="fadeInUp2">
                            <img src={compositionGallery3.url} alt={compositionGallery3.alt} height="auto" />
                        </div>
                    ) : (
                        <div style={{ display: "none" }}>
                            <img src={compositionGallery3.url} alt={compositionGallery3.alt} height="auto" />
                        </div>
                    )}
                </GalleryCol03>
            </GalleryGrid>
        </CompositionContainer>
    )
}

const CompositionContainer = styled.div`
    h1 {
        font-size: calc(2 * ${(props) => props.theme.fontSize.xl});
    }

    h2 {
        font-size: calc(2 * ${(props) => props.theme.fontSize.l});
    }

    h3 {
        font-size: calc(${(props) => props.theme.fontSize.l});
    }

    h1,
    h2,
    h3 {
        background: linear-gradient(
            45deg,
            rgba(85, 219, 212, 1) 5%,
            rgba(85, 219, 212, 0.6) 30%,
            rgba(85, 219, 212, 0.2) 60%,
            rgba(85, 219, 212, 0.6) 70%,
            rgba(85, 219, 212, 1) 95%
        );
        background-size: 200% 200%;
        animation: gradient 12s ease infinite;

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            25% {
                background-position: 100% 50%;
            }
            50% {
                background-position: 100% 0%;
            }
            75% {
                background-position: 50% 100%;
            }
            100% {
                background-position: 50% 0%;
            }
        }
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 400% 400%;
        color: white;
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-style: normal;
        font-weight: 300;
        margin-bottom: ${(props) => props.theme.spacing.xxs};
        margin-top: ${(props) => props.theme.spacing.xxs};
    }
    p {
        font-family: ${(props) => props.theme.primaryFont.name}, sans-serif;
        color: ${(props) => props.theme.color.onBackground};
        font-size: ${(props) => props.theme.fontSize.m};
    }

    ${media.maxWidth("md")`
    h1,
    h2,
    h3 {

        font-size: ${(props) => props.theme.fontSize.xxl};
    }

        p {
            font-size: ${(props) => props.theme.fontSize.s};
        }
    `}

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`

const StageContainer = styled.div`
    display: none;
`

const StageContent = styled.div`
    h1 {
        font-size: calc(2 * ${(props) => props.theme.fontSize.xxl});
    }

    p {
        font-size: ${(props) => props.theme.fontSize.l};
    }

    ${media.maxWidth("md")`
        h1 {
            font-size: calc(2 * ${(props) => props.theme.fontSize.s});
        }
        p {
            font-size: ${(props) => props.theme.fontSize.m};
        }
    `};
`

const StyledBackground = styled.div<{ background: string; height: string }>`
    background-image: url(${(props) => props.background});
    background-color: ${({ theme }) => theme.projectColors.background};
    background-size: cover;
    background-position: center;
    height: ${(props) => props.height};
`

const XBackground = styled.div<{ background: string; height: string }>`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 95%), url(${(props) => props.background});
    background-color: ${({ theme }) => theme.projectColors.background};
    background-size: cover;
    background-position: bottom center;
    width: 100%;
    height: ${(props) => props.height};

    ${media.maxWidth("md")`
        height: 340px;
    `}
`

const CompositionGrid = styled(TGrid)<{ height: string; alignContent?: string }>`
    height: ${(props) => props.height};
    align-content: ${(props) => props.alignContent};

    ${media.maxWidth("md")`
        margin-left: 60px;
        margin-right: 60px;
    `}
`

const CompositionCol = styled(TCol)`
    padding: 0;
`

const GalleryGrid = styled(TGrid)`
    .fadeInUp {
        animation-name: fadeInUp;
        animation-duration: 1.5s;
        animation-fill-mode: both;
        animation-delay: 0.6s;
    }

    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 40%, 0);
            transform: translate3d(0, 40%, 0);
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
            -webkit-transform: translate3d(0, 40%, 0);
            transform: translate3d(0, 40%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @-webkit-keyframes fadeInUp1 {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 20%, 0);
            transform: translate3d(0, 20%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInUp1 {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 20%, 0);
            transform: translate3d(0, 20%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInUp1 {
        animation-name: fadeInUp;
        animation-duration: 1.5s;
        animation-fill-mode: both;
        animation-delay: 0.8s;
    }

    @-webkit-keyframes fadeInUp2 {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 600%, 0);
            transform: translate3d(0, 600%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInUp2 {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 60%, 0);
            transform: translate3d(0, 60%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInUp2 {
        animation-name: fadeInUp;
        animation-duration: 1.5s;
        animation-fill-mode: both;
        animation-delay: 0.2s;
    }

    ${media.maxWidth("md")`
        margin: 0px;`};
`

const GalleryCol01 = styled(TCol)`
    padding-right: 80px;
    padding-top: 230px;
    padding-left: 0px;

    img {
        height: 480px;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 120px;

        img {
            height: 200px;
        }
    `}
`

const GalleryCol02 = styled(TCol)`
    padding-left: 80px;
    margin-top: -150px;

    img {
        height: 260px;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-top: 0px;
        padding-left: 60px;
        margin-top: 0px;


        img {
            height: 140px;
        }
    `}
`

const GalleryCol03 = styled(TCol)`
    margin-left: 60%;
    padding-right: 100px;
    margin-top: -250px;

    img {
        height: auto;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-top: 20px;
        margin-top: 0px;
        margin-left: 20px;
        margin-right: 20px;

        img {
            height: 220px;
            width: 100%;
        }
    `}
`

export default Composition
