import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import TukanImage from "../elements/tukan-image"

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
            <StyledBackground background={compositionBackground1.url} height="100vh">
                <StyledCompositionGrid valign="bottom" height="100vh" alignContent="flex-end">
                    <StyledCompositionCol size={1 / 2} collapse="md">
                        <div>{parse(compositionHeadline)}</div>
                    </StyledCompositionCol>
                    <StyledCompositionCol size={2 / 3} collapse="md">
                        <div>{parse(compositionSubtitle)}</div>
                    </StyledCompositionCol>
                </StyledCompositionGrid>
            </StyledBackground>

            <StyledBackground background={compositionBackground2.url} height="200vh">
                <StyledCompositionGrid valign="center" height="80vh">
                    <StyledCompositionCol size={1 / 2} collapse="md">
                        <StyledDivider />
                        <div>{parse(compositionContent)}</div>
                    </StyledCompositionCol>
                </StyledCompositionGrid>

                <StyledCompositionGrid valign="center" halign="center" height="20vh" style={{ textAlign: "center" }}>
                    <StyledDivider />
                    <StyledCompositionCol size={1} collapse="md">
                        <div>{parse(compositionStatement)}</div>
                    </StyledCompositionCol>

                    <StyledCompositionCol size={2 / 3} collapse="md">
                        <div>{parse(compositionStatementContent)}</div>
                    </StyledCompositionCol>
                </StyledCompositionGrid>

                <StyledCompositionGrid valign="center" height="60vh">
                    <GalleryCol01>
                        <TukanImage src={compositionGallery1.url} alt={compositionGallery1.alt} height="auto" />
                    </GalleryCol01>
                    <GalleryCol02>
                        <TukanImage src={compositionGallery2.url} alt={compositionGallery2.alt} height="auto" />
                    </GalleryCol02>
                    <GalleryCol03>
                        <TukanImage src={compositionGallery3.url} alt={compositionGallery3.alt} height="auto" />
                    </GalleryCol03>
                </StyledCompositionGrid>
            </StyledBackground>
        </CompositionContainer>
    )
}

const CompositionContainer = styled.div`
    ${media.maxWidth("md")`
        padding-top: 3em;
        padding-bottom: 1em;
    `};
    h1,
    h2 {
        color: white;
        font-family: "playfair-display", roboto, "sans-serif";
        font-style: normal;
        font-weight: normal;
        font-size: 80px;
        line-height: 104px;
        letter-spacing: 0.04em;
    }
    h2 {
        font-size: 60px;
    }
    p {
        color: white;
    }
`

const StyledBackground = styled.div<{ background: string; height: string }>`
    background-image: url(${(props) => props.background});
    background-size: cover;
    height: ${(props) => props.height};
`

const StyledCompositionGrid = styled(TGrid)<{ height: string; alignContent?: string }>`
    height: ${(props) => props.height};
    align-content: ${(props) => props.alignContent};
`

const StyledCompositionCol = styled(TCol)`
    padding: 0;
`

const GalleryCol01 = styled(TCol)`
    flex-basis: 40%;
    max-width: 40%;
    padding-right: 80px;
    padding-top: 120px;

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
    padding-left: 130px;

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
    margin-left: 40%;
    padding-right: 160px;
    margin-top: -120px;

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

const StyledDivider = styled.span`
    display: block;
    width: 120px;
    height: 2px;
    margin-bottom: ${(props) => props.theme.spacing.medium};
    margin-left: ${(props) => props.theme.spacing.small};
    background-color: ${(props) => props.theme.projectColors.accent};
`

export default Composition
