import parse from "html-react-parser"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"

export interface IServiceProps {
    headline?: string
    content?: string
    cols?: string[]
}

const Service = (props: IServiceProps) => {

    const contentCols = props.cols.map((col, index) => {

            return (
                <TCol collapse="md" key={index}>
                    {parse(col)}
                </TCol>
            )
    })

    return (
        <ServiceContainer>
            {props.headline ?
                <TGrid halign="left">
                    <TCol size={3 / 4}>
                        {parse(props.headline)}
                    </TCol>
                    <TCol size={2 / 4}>
                        {parse(props.content)}
                    </TCol>
                </TGrid> :
                <></>
            }

            <TGrid halign="center">
                {contentCols}
            </TGrid>
        </ServiceContainer>
    )
}

const ServiceContainer = styled.div`
.icon img {
    height: 50px;
    display: block;
    margin: 0 auto;
}
`

export default Service