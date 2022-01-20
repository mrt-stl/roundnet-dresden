import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"

export interface IRichtextProps {
    content: { content }[]
    headline: string
    multiColumns: boolean
}

const Richtext = (props: IRichtextProps) => {
    const { content, headline, multiColumns } = props

    return (
        <RichtextContainer>
            <TGrid halign="center">
                <TCol size={1}>
                    <Headline>{headline}</Headline>
                </TCol>
                {content.map((col, index) => (
                    <TCol size={multiColumns ? 1 / 2 : 1} key={index}>
                        {parse(col.content)}
                    </TCol>
                ))}
            </TGrid>
        </RichtextContainer>
    )
}

const RichtextContainer = styled.div`
    margin-top: ${(props) => props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.xl};

    .button {
        padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
        background-color: ${(props) => props.theme.color.blackCoral};
        color: ${(props) => props.theme.color.white};
        display: block;
        width: fit-content;
        margin-top: ${(props) => props.theme.spacing.m};
    }
`

const Headline = styled.p<{ accent?: boolean }>`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${(props) => props.theme.fontSize.s};
`

export default Richtext
