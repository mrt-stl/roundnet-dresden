import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"

export interface IStageProps {
    title: string
    content: string
}

const StageContainer = styled.div`
    padding-top: ${(props) => props.theme.spacing.m};
    margin-bottom: ${(props) => props.theme.spacing.m};
    background-color: var(--background) !important;

        ${media.maxWidth("md")`
        padding-top: 3em;
        padding-bottom: 1em;
    `};

`
const Stage = (props: IStageProps) => {

    const title = props.title
    const content = props.content

    return (
        <StageContainer>
                <TGrid valign="center">
                    <TCol size={6 / 8} >
                        <div>
                            <h1>{title}</h1>
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

export default Stage