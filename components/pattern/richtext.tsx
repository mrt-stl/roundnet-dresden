import parse from "html-react-parser"
import styled from "styled-components"
import Divider from "../elements/divider"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import { isColorLight } from "../../utils/color-utils"

export interface IRichtextProps {
    content: string
}

const Richtext = (props: IRichtextProps) => {
    const content = props.content

    return (
        <RichtextContainer>
            <TGrid>
                <TCol size={2 / 3} collapse="md">
                    <Divider marginTop="100px" />
                </TCol>
                <TCol size={2 / 3} collapse="md">
                    {parse(content)}
                </TCol>
            </TGrid>
        </RichtextContainer>
    )
}

const RichtextContainer = styled.div`
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    background-color: #202020;
    p {
        color: ${(props) => (isColorLight(props.theme.projectColors.background) ? "#000000" : "#FFFFFF")};
        line-height: 32px;
        padding-bottom: ${(props) => props.theme.spacing.xs};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => (isColorLight(props.theme.projectColors.background) ? "#000000" : "#FFFFFF")};
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-size: ${(props) => props.theme.fontSize.xxxl};
        font-style: normal;
        font-weight: normal;
        padding-bottom: ${(props) => props.theme.spacing.xs};
    }

    .highlight {
        color: ${(props) => props.theme.projectColors.accent};
        font-weight: bold;
        padding-left: 14px;
    }

    .button a,
    a .button {
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        background-color: ${(props) => props.theme.projectColors.accent};
        display: inline-block;
        padding-left: ${(props) => props.theme.spacing.s};
        padding-right: ${(props) => props.theme.spacing.s};
        padding-top: 20px;
        padding-bottom: 21px;
        color: ${(props) => (props.color ? props.color : "#ffffff")};
        transition: all 0.15s ease-in-out;

        background-image: none;
        line-height: default;
        :hover {
            padding-left: calc(${(props) => props.theme.spacing.m});
            padding-right: calc(${(props) => props.theme.spacing.m});
            transition: all 0.25s ease-in-out;
        }

        ${media.maxWidth("md")`

        background-position: center;
        transition: background 0.3s;

        :hover {
            padding-left: 36px;
            padding-right: 36px;
        }
    `};
    }
`

export default Richtext
