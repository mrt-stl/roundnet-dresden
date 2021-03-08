import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import TukanImage from "../elements/tukan-image"
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

            <StyledBackground background={compositionBackground2.url} height="auto">
                <CompositionGrid valign="center" height="100%">
                    <CompositionCol size={1 / 2} collapse="md">

                        <Divider marginTop="100px" marginBottom="50px"/>
                        <div>{parse(compositionContent)}</div>
                    </CompositionCol>
                </CompositionGrid>

                <CompositionGrid valign="center" halign="center" height="100%" style={{ textAlign: "left" }}>

                    <Divider marginTop="250px" />
                    <CompositionCol size={1} collapse="md">
                        <div>{parse(compositionStatement)}</div>
                    </CompositionCol>

                    <CompositionCol size={2 / 3} collapse="md">
                        <div>{parse(compositionStatementContent)}</div>
                    </CompositionCol>
                </CompositionGrid>

                <GalleryGrid valign="center">
                    <GalleryCol01>
                        <TukanImage src={compositionGallery1.url} alt={compositionGallery1.alt} height="auto" />
                    </GalleryCol01>
                    <GalleryCol02>
                        <TukanImage src={compositionGallery2.url} alt={compositionGallery2.alt} height="auto" />
                    </GalleryCol02>
                    <GalleryCol03>
                        <TukanImage src={compositionGallery3.url} alt={compositionGallery3.alt} height="auto" />
                    </GalleryCol03>
                </GalleryGrid>
            </StyledBackground>
        </CompositionContainer>
    )
}

const CompositionContainer = styled.div`

    h1,
    h2,
    h3 {
        background: linear-gradient(45deg, rgba(85,219,212,1) 0%, rgba(51,131,127,1) 64%, rgba(85,219,212,0.2) 83%, rgba(68,175,169,1) 100%);
        animation: gradient 4s ease infinite;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 400% 400%;
        color: white;
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-size: calc(2 * ${(props) => props.theme.fontSize.xl});
        font-style: normal;
        font-weight: normal;
        letter-spacing: 0.04em;
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

const StageContainer = styled.div `
`

const StageContent = styled.div `
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
    ${media.maxWidth("md")`
        margin: 0px;`};
`

const GalleryCol01 = styled(TCol)`
    flex-basis: 40%;
    max-width: 40%;
    padding-right: 80px;
    padding-top: 230px;
    padding-left: 0px;

    img {
        height: 480px;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-left: 0px;
        padding-top: 60px;

        img {
            height: 200px;
        }
    `}
`

const GalleryCol02 = styled(TCol)`
    flex-basis: 50%;
    max-width: 50%;
    padding-left: 80px;
    margin-top: -150px;

    img {
        height: 260px;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-top: 0px;
        padding-left: 60px;

        img {
            height: 140px;
        }
    `}
`

const GalleryCol03 = styled(TCol)`
    flex-basis: 50%;
    max-width: 50%;
    margin-left: 60%;
    padding-right: 100px;
    margin-top: -250px;

    img {
        height: auto;
    }

    ${media.maxWidth("md")`
        padding-right: 0px;
        padding-top: 40px;
        margin-top: -140px;

        img {
            height: 200px;
        }
    `}
`

export default Composition
