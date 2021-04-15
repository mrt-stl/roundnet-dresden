import { media } from "../style/tukan"
import styled from "styled-components"

export interface IAtmosphericProps {
    imgSrc: string
    imgAlt?: string
}

const AtmosphericImage = (props: IAtmosphericProps) => {
    const { imgSrc } = props

    return (
        <AtmosphericContainer background={imgSrc}>
            <></>
        </AtmosphericContainer>

    )
}

const AtmosphericContainer = styled.div<{ background: string }>`
    background-image: url(${(props) => props.background});
    height: 600px;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    ${media.maxWidth("md")`
        height: 240px;
        background-attachment: scroll;
    `}
`

export default AtmosphericImage