import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"

export interface IRichtextProps {
    content: { content }[]
    headline: string
    multiColumns: boolean
    imageSize: boolean
}

const Richtext = (props: IRichtextProps) => {
    const { content, headline, multiColumns, imageSize } = props

    return (
        <RichtextContainer imageSize={imageSize}>
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

const RichtextContainer = styled.div<{ imageSize: boolean }>`
    margin-top: ${(props) => props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.xl};
    line-height: ${(props) => props.theme.lineHeight.l};

    p {
        padding-top: ${(props) => props.theme.spacing.xs};
        padding-bottom: ${(props) => props.theme.spacing.xs};
    }

    a {
        color: ${(props) => props.theme.color.bitterlemon};
        transition: all 0.2s linear;
        width: fit-content;
        display: inline-block;
        :hover {
            color: ${(props) => props.theme.color.blackCoral};
            transition: all 0.1s linear;
        }
    }

    .button {
        padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
        background-color: ${(props) => props.theme.color.blackCoral};
        color: ${(props) => props.theme.color.white};
        display: block;
        width: fit-content;
        margin-top: ${(props) => props.theme.spacing.m};
        transition: all 0.2s linear;

        :hover {
            transition: all 0.1s linear;
            background-color: ${(props) => props.theme.color.bitterlemon};
        }
    }

    img {
        width: ${(props) => (props.imageSize ? "auto" : "100%")};
        height: ${(props) => (props.imageSize ? "100px" : "auto")};
        margin-top: ${(props) => props.theme.spacing.m};
        margin-bottom: ${(props) => props.theme.spacing.m};
    }
`

const Headline = styled.p<{ accent?: boolean }>`
    text-transform: uppercase;
    letter-spacing: 2px;
`

export default Richtext
