import parse from "html-react-parser"
import styled from "styled-components"
import Divider from "../elements/divider"
import { TGrid, TCol } from "../style/sc-grid"
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
                    <Divider />
                </TCol>
                <TCol size={2 / 3} collapse="md">
                    {parse(content)}
                </TCol>
            </TGrid>
        </RichtextContainer>
    )
}

const RichtextContainer = styled.div`
    padding-bottom: ${(props) => props.theme.spacing.small};
    background-color: ${(props) => props.theme.projectColors.background};
    p {
        color: ${props => isColorLight(props.theme.projectColors.background) ? "#000000" : "#FFFFFF"};
        line-height: 32px;
        padding-bottom: ${(props) => props.theme.spacing.small};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => isColorLight(props.theme.projectColors.background) ? "#000000" : "#FFFFFF"};
        font-family: "playfair-display", roboto, "sans-serif";
        font-style: normal;
        font-weight: normal;
        padding-bottom: ${(props) => props.theme.spacing.small};
    }

    .highlight {
        color: ${props => props.theme.projectColors.accent};
        font-weight: bold;
        padding-left: 14px;
    }
`

export default Richtext
