import styled from "styled-components"
import { media } from "../style/tukan"

export interface IStageProps {
    image: any
    parallax: boolean
}

const Stage = (props: IStageProps) => {
    const { parallax, image } = props

    return <StageContainer background={image.url} parallax={parallax}></StageContainer>
}

const StageContainer = styled.div<{ background: string; parallax: boolean }>`
    background-image: url(${(props) => props.background});
    background-position: center center;
    min-height: 480px;
    height: 60vh;
    background-size: cover;
    background-attachment: ${(props) => (props.parallax ? "fixed" : "initial")};

    ${media.maxWidth("lg")`
        min-height: 0;
        height: 240px;
        background-attachment: scroll;
    `}
`
export default Stage
