import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"

export interface IRichtextProps {
    content: string
    index?: number
}

const Richtext = (props: IRichtextProps) => {
    const {content, index} = props

    return (
        <RichtextContainer index={index}>
            <RichtextGrid halign="center">
                <TCol size={4/5} collapse="md">
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
`

const RichtextContent = styled.div `
    color: ${(props) => props.theme.projectColors.onBackground};
`

export default Richtext
