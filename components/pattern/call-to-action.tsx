import parse from "html-react-parser"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import Divider from "../elements/divider"
import Button from "../elements/button"

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
                    <div>{parse(headline)}</div>
                </TCol>
                <TCol size={2 / 3}>
                    <div>{parse(content)}</div>
                </TCol>
                <TCol>
                    <Button href={btnLink} label={btnLabel}/>
                </TCol>
            </TGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div`
    padding-top: ${(props) => props.theme.spacing.standard};
    margin-bottom: ${(props) => props.theme.spacing.standard};
    background-color: var(--background) !important;
    text-align: center;

    h1 {
        font-family: "playfair-display", roboto, "sans-serif";
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 104px;
        letter-spacing: 0.04em;
        margin: 0;
    }

    ${media.maxWidth("md")`
    padding-top: 3em;
    padding-bottom: 1em;
`};
`

export default CallToAction
