import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"

export interface IRichtextProps {
    content: string
    index?: number
}

const Richtext = (props: IRichtextProps) => {
    const {content, index} = props

    return (
        <RichtextContainer index={index}>
            <RichtextGrid>
                <RichtextCol size={ 1 } collapse="md">
                    <RichtextContent>
                        {parse(content)}
                    </RichtextContent>
                </RichtextCol>
            </RichtextGrid>
        </RichtextContainer>
    )
}

const RichtextContainer = styled.div<{index: number}>`
    padding-top: ${(props) => props.theme.spacing.l};
    margin-bottom: ${(props) => props.theme.spacing.m};

    ${media.maxWidth("md")`
        padding-top: ${(props) => props.index === 0 ? "400px" : props.theme.spacing.m};
    `}
`

const RichtextGrid = styled(TGrid)`
`

const RichtextCol = styled(TCol)`
    padding-left: 0px;
    padding-right: 0px;

    ${media.maxWidth("md")`
        padding-left: 20px;
        padding-right: 20px;
    `}
`

const RichtextContent = styled.div `
    color: ${(props) => props.theme.projectColors.onBackground};

    ${media.maxWidth("md")`
        p {
            font-size: ${(props) => props.theme.fontSize.xxs};
        }
    `}
`

export default Richtext
