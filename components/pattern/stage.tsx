import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import Button from "../elements/button"
import parse from "html-react-parser"
import styled from "styled-components"

export interface IStageProps {
    headline: string
    content: string
    btnLabel: string
    btnLink: string
    backgroundImage: any
}

const Stage = (props: IStageProps) => {

    const {
        headline,
        content,
        btnLabel,
        btnLink,
        backgroundImage,
    } = props

    return (
        <StageContainer background={backgroundImage.url}>
            <StageGrid>
                <TCol size={ 1 } >
                    <StageContent>
                        <div>
                            <h1>{headline}</h1>
                        </div>
                        <div>
                            {parse(content)}
                        </div>
                        <Button href={btnLink} label={btnLabel}/>
                    </StageContent>
                </TCol>
            </StageGrid>
        </StageContainer>
    )
}

const StageContainer = styled.div<{ background: string }>`
    background-image: url(${(props) => props.background});
    background-color: var(--background) !important;
    background-position: center;
    height: 100vh;
    background-size: cover;
    display: flex;
    color: #ffffff;
    align-items: center;

    p {        font-size: calc( 2 * ${(props) => props.theme.fontSize.xl});
    margin-top: 0.25em;

            color: #ffffff;
    }
        ${media.maxWidth("md")`
            padding-top: 3em;
            padding-bottom: 1em;
            height: 400px;

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

const StageContent = styled.div `
    h1 {
        font-size: ${(props) => props.theme.fontSize.s};
        color: white;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    p {
        background: linear-gradient(
            45deg,
            rgba(85, 219, 212, 1) 5%,
            rgba(85, 219, 212, 0.6) 30%,
            rgba(85, 219, 212, 0.2) 60%,
            rgba(85, 219, 212, 0.6) 70%,
            rgba(85, 219, 212, 1) 95%
        );
        background-size: 200% 200%;
        animation: gradient 12s ease infinite;

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            25% {
                background-position: 100% 50%;
            }
            50% {
                background-position: 100% 0%;
            }
            75% {
                background-position: 50% 100%;
            }
            100% {
                background-position: 50% 0%;
            }
        }
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 400% 400%;
        color: white;
        font-weight: 300 !important;
        text-transform: uppercase;
    }

    ${media.maxWidth("md")`
        p {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        h1 {
            font-size: ${(props) => props.theme.fontSize.xxs};
            color: white;
            font-weight: 300 !important;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
`}
`

export default Stage