import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import Button from "../elements/button"
import parse from "html-react-parser"
import styled from "styled-components"
import { getGradientAnimation } from "../../utils/color-utils"
export interface IStageProps {
    headline: string
    content: string
    btnLabel: string
    btnLink: string
    backgroundImage: any
}

const Stage = (props: IStageProps) => {
    const { headline, content, btnLabel, btnLink, backgroundImage } = props

    return (
        <StageContainer background={backgroundImage.url}>
            <StageGrid>
                <TCol size={1}>
                    <StageContent>
                        <div>
                            <h1>{headline}</h1>
                        </div>
                        <div>{parse(content)}</div>
                        <Button href={btnLink} label={btnLabel} color="white" />
                    </StageContent>
                </TCol>
            </StageGrid>
        </StageContainer>
    )
}

const StageContainer = styled.div<{ background: string }>`
    background-image: url(${(props) => props.background});
    background-position: center center;
    height: 100vh;
    background-size: cover;
    display: flex;
    color: #ffffff;
    align-items: center;

    p {
        font-size: calc(2 * ${(props) => props.theme.fontSize.xl});
        margin-top: 0.25em;
        color: #ffffff;
    }

    ${media.maxWidth("md")`
            padding-top: 3em;
            padding-bottom: 1em;
            height: 440px;

        p {
            font-size: ${(props) => props.theme.fontSize.xl};
        }
    `};
`

const StageGrid = styled(TGrid)`
    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const StageContent = styled.div`
    h1 {
        font-size: ${(props) => props.theme.fontSize.s};
        color: white;
        font-weight: ${(props) => props.theme.fontWeight.light};
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    p {
        font-weight: 300 !important;
        ${(props) =>
            props.theme.projectColors.gradient
                ? getGradientAnimation(props.theme.projectColors.green)
                : `color: ${props.theme.projectColors.background};`}
    }

    ${media.maxWidth("md")`
        p {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        h1 {
            font-size: ${(props) => props.theme.fontSize.xs};
            color: white;
            font-weight: 300 !important;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
`}
`

export default Stage