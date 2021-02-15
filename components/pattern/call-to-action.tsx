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
                <TCol size={2 / 3}>
                    {parse(content)}
                </TCol>
                <TCol>
                    <Button href={btnLink} label={btnLabel} />
                </TCol>
            </TGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div`
    background-color: ${(props) => props.theme.color.background};
    margin-bottom: ${(props) => props.theme.spacing.xxl};
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
    }

    p {
        font-size: ${(props) => props.theme.fontSize.l};
    }

    ${media.maxWidth("md")`
        padding-top: ${(props) => props.theme.spacing.m};
        padding-bottom: ${(props) => props.theme.spacing.m};
`};
`

export default CallToAction
