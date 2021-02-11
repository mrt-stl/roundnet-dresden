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
                <StyledBackground background={compositionBackground1.url} height="800px">
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

            <StyledBackground background={compositionBackground2.url} height="100%">
                <CompositionGrid valign="center" height="100%">
                    <CompositionCol size={1 / 2} collapse="md">

                        <Divider marginTop="100px" marginBottom="50px" marginLeft="20px"/>
                        <div>{parse(compositionContent)}</div>
                    </CompositionCol>
                </CompositionGrid>

                <CompositionGrid valign="center" halign="center" height="100%" style={{ textAlign: "center" }}>

                    <Divider marginTop="250px" />
                    <CompositionCol size={1} collapse="md">
                        <div>{parse(compositionStatement)}</div>
                    </CompositionCol>

                    <CompositionCol size={2 / 3} collapse="md">
                        <div>{parse(compositionStatementContent)}</div>
                    </CompositionCol>
                </CompositionGrid>

                <CompositionGrid valign="center" height="660px">
                    <GalleryCol01>
                        <TukanImage src={compositionGallery1.url} alt={compositionGallery1.alt} height="auto" />
                    </GalleryCol01>
                    <GalleryCol02>
                        <TukanImage src={compositionGallery2.url} alt={compositionGallery2.alt} height="auto" />
                    </GalleryCol02>
                    <GalleryCol03>
                        <TukanImage src={compositionGallery3.url} alt={compositionGallery3.alt} height="auto" />
                    </GalleryCol03>
                </CompositionGrid>
            </StyledBackground>
        </CompositionContainer>
    )
}

const CompositionContainer = styled.div`

    h1,
h2 {
    color: white;
    font-family: "playfair-display", roboto, "sans-serif";
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 104px;
    letter-spacing: 0.04em;
    background: linear-gradient(-45deg, #55DBD4, #000000);
    animation: gradient 10s ease infinite;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-size: 800% 800%;
}
h2 {
    font-size: 60px;
}
p {
    color: white;
}

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
`

const StyledBackground = styled.div<{ background: string; height: string }>`
    background-image: url(${(props) => props.background});
    background-size: cover;
    height: ${(props) => props.height};
`

const CompositionGrid = styled(TGrid)<{ height: string; alignContent?: string }>`
    height: ${(props) => props.height};
    align-content: ${(props) => props.alignContent};
`

const CompositionCol = styled(TCol)`
    padding: 0;
`

const GalleryCol01 = styled(TCol)`
    flex-basis: 40%;
    max-width: 40%;
    padding-right: 80px;
    padding-top: 230px;

    img {
        height: 480px;
    }

    ${media.maxWidth("md")`
        padding-right: 20px;
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
        padding-right: 20px;
        padding-top: 40px;
        margin-top: -140px;

        img {
            height: 160px;
        }
    `}
`

export default Composition
