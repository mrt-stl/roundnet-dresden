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
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    padding-top: ${(props) => props.theme.spacing.xl};
    text-align: center;

    h2 {
        font-size: calc(2 * ${(props) => props.theme.fontSize.l});
    }

    h1,
    h2,
    h3 {
        background: linear-gradient(45deg, rgba(85,219,212,1) 5%, rgba(85,219,212,0.6) 30%, rgba(85,219,212,0.2) 60%, rgba(85,219,212,0.6) 70%, rgba(85,219,212,1) 95%);
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
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-style: normal;
        font-weight: 300;
        margin-bottom: ${(props) => props.theme.spacing.xxs};
        margin-top: ${(props) => props.theme.spacing.xxs};
    }

    p {
        font-size: ${(props) => props.theme.fontSize.l};
        color: #606060;
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
