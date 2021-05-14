import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import parse from "html-react-parser"
import styled from "styled-components"

export interface ICallToActionProps {
    headline: string
    subtitle: string
    contentLeft: string
    contentRight: string
}

const CallToAction = (props: ICallToActionProps) => {
    const headline = props.headline
    const subtitle = props.subtitle
    const contentLeft = props.contentLeft
    const contentRight = props.contentRight

    return (
        <CallToActionContainer>
            <CallToActionGrid valign="center" halign="center">
                <TCol size={3 / 4} collapse="md" talign="center">
                    {parse(headline)}
                    {parse(subtitle)}
                </TCol>
                <CallToActionCard size={3 / 4}>
                    <TCol size={1 / 3}>{parse(contentLeft)}</TCol>
                    <TCol size={1 / 3}>{parse(contentRight)}</TCol>
                </CallToActionCard>
            </CallToActionGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div`
    margin-top: ${(props) => props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.xxl};

    ${media.maxWidth("md")`
        padding-top: ${(props) => props.theme.spacing.xl};
        padding-bottom: ${(props) => props.theme.spacing.xl};

        p {
            font-size: ${(props) => props.theme.fontSize.s};
        }
`};
`

const CallToActionGrid = styled(TGrid)`
    p {
        color: ${(props) => props.theme.projectColors.grey70};
    }
    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const CallToActionCard = styled(TCol)`
    display: flex;
    justify-content: space-around;
    margin-top: ${(props) => props.theme.spacing.m};
    padding-top: ${(props) => props.theme.spacing.m};
    box-shadow: 0px 1px 16px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export default CallToAction
