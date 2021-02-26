import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import Button from "../elements/button"
import Divider from "../elements/divider"
import parse from "html-react-parser"
import styled from "styled-components"

export interface ICallToActionProps {
    headline: string
    content: string
    btnLabel: string
    btnLink: string
}

const CallToAction = (props: ICallToActionProps) => {
    const headline = props.headline
    const content = props.content
    const btnLabel = props.btnLabel
    const btnLink = props.btnLink

    return (
        <CallToActionContainer>
            <TGrid valign="center" halign="center">
                <Divider marginTop="150px" marginBottom="20px" />
                <TCol size={1}>
                    {parse(headline)}
                </TCol>
                <TCol size={2 / 3} collapse="md">
                    {parse(content)}
                </TCol>
                <TCol>
                    <Button href={btnLink} label={btnLabel}/>
                </TCol>
            </TGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div`
    background-color: ${(props) => props.theme.color.background};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    padding-top: ${(props) => props.theme.spacing.xl};
    text-align: center;

    h1,
    h2,
    h3 {
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-size: calc(2 * ${(props) => props.theme.fontSize.xxl});
        font-weight: ${(props) => props.theme.fontWeight.regular};
        margin-bottom: ${(props) => props.theme.spacing.none};
        margin-top: ${(props) => props.theme.spacing.none};
        background: linear-gradient(45deg, rgba(85,219,212,1) 0%, rgba(51,131,127,1) 64%, rgba(85,219,212,0.2) 83%, rgba(68,175,169,1) 100%);
        animation: gradient 4s ease infinite;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 400% 400%;

    }

    p {
        font-size: ${(props) => props.theme.fontSize.l};
        color: #606060;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    ${media.maxWidth("md")`
        padding-top: ${(props) => props.theme.spacing.m};
        padding-bottom: ${(props) => props.theme.spacing.m};

        h1,
        h2,
        h3 {
            font-size: 2.5em;
        }

        p {
            font-size: ${(props) => props.theme.fontSize.s};
        }
`};
`

export default CallToAction
