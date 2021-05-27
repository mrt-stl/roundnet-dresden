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
            <RichtextGrid halign="center">
                <TCol size={4/5}>
                    <RichtextContent>
                        {parse(content)}
                    </RichtextContent>
                </TCol>
            </RichtextGrid>
        </RichtextContainer>
    )
}

const RichtextContainer = styled.div<{index: number}>`
    margin-top: ${(props) => props.index === 0 ? "240px" : props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.xl};
`

const RichtextGrid = styled(TGrid)`
    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const RichtextContent = styled.div `
    color: ${(props) => props.theme.projectColors.onBackground};

    ${media.maxWidth("md")`
        p {
            font-size: ${(props) => props.theme.fontSize.xs};
        }
    `}
`

export default Richtext
