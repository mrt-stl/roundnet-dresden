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

    const calcHeight = () => {
        if ((!content || content.length < 10) && !btnLink) {
            return true
        } else {
            return false
        }
    }

    const isNarrow = calcHeight()

    return (
        <StageContainer background={backgroundImage.url} isNarrow={isNarrow}>
            <StageGrid>
                <TCol size={1 / 2}>
                    <StageContent>
                        <div>
                            <h1>{headline}</h1>
                        </div>
                        {content && content.length > 7 ? <div>{parse(content)}</div> : null}
                        {btnLink ? <Button href={btnLink} label={btnLabel} /> : null}
                    </StageContent>
                </TCol>
            </StageGrid>
        </StageContainer>
    )
}

const StageContainer = styled.div<{ background: string; isNarrow: boolean }>`
    background-image: url(${(props) => props.background});
    background-position: center center;
    height: ${(props) => (props.isNarrow ? "360px" : "100vh")};
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
            height: ${(props) => (props.isNarrow ? "240px" : "100vh")};

        p {
            font-size: ${(props) => props.theme.fontSize.xl};
        }
    `};
`

const StageGrid = styled(TGrid)``

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
                : `color: ${props.theme.projectColors.background};
                display: inline;
                background-color: ${props.theme.projectColors.blue};
                box-decoration-break: clone;
                padding-left: 10px;
                padding-right: 10px;`}
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
