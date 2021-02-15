import parse from "html-react-parser"
import styled from "styled-components"
import { isColorLight } from "../../utils/color-utils"
import { media } from "../style/tukan"

export interface IColRichtextProps {
    cols: string[]
}

const ColRichtext = (props: IColRichtextProps) => {
    return (
        <ColRichtextContainer>
            {props.cols.map((col, index) => {
                return (
                    <ColRichtextCol className="" key={index}>
                        {parse(col)}
                    </ColRichtextCol>
                )
            })}
        </ColRichtextContainer>
    )
}

const ColRichtextContainer = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.projectColors.background};
    flex-wrap: wrap;
    p:not(.block-img) {
        padding-left: ${props => props.theme.spacing.l};
        padding-right: ${props => props.theme.spacing.l};
        color: ${(props) => (isColorLight(props.theme.projectColors.background) ? "#000000" : "#FFFFFF")};
        position: relative;
        bottom: 130px;
    }
    div:nth-child(2):before {
        content: "";
        display: block;
        width: 100%;
        height: 50px;
        background-color: white;
    }

    ${media.maxWidth("md")`
    div:nth-child(2):before {
        display: none;
    }
    `};
`

const ColRichtextCol = styled.div`
    flex-basis: 50%;
    max-width: 50%;

    ${media.maxWidth("md")`
    flex-basis: 100%;
    max-width: 100%;
    `};
`

export default ColRichtext
