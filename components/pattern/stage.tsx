import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"

export interface IStageProps {
    headline: string
    content: string
    backgroundImage: any
}

const Stage = (props: IStageProps) => {

    const {
        headline,
        content,
        backgroundImage,
    } = props

    return (
        <StageContainer background={backgroundImage.url}>
            <TGrid valign="center">
                <TCol size={6 / 8} >
                    <div>
                        <h1>{headline}</h1>
                    </div>
                </TCol>
                <TCol>
                    <div>
                        {parse(content)}
                    </div>
                </TCol>
            </TGrid>
        </StageContainer>
    )
}

const StageContainer = styled.div<{ background: string }>`
    background-image: url(${(props) => props.background});
    padding-top: ${(props) => props.theme.spacing.m};
    margin-bottom: ${(props) => props.theme.spacing.m};
    background-color: var(--background) !important;
    background-position: center;
    height: 100vh;
    background-size: cover;
    align-items: center;
    display: flex;

        ${media.maxWidth("md")`
            padding-top: 3em;
            padding-bottom: 1em;
            height: 400px;
    `};

`

export default Stage