import { isUndefinedOrNullOrEmpty } from "../../utils/object-utils"
import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import Button from "../elements/button"
import parse from "html-react-parser"
import Project from "../../models/config/project"
import styled from "styled-components"
import { getGradientAnimation } from "../../utils/color-utils"

export interface ICallToActionProps {
    headline: string
    content: string
    btnLabel: string
    btnLink: string
}

const CallToAction = (props: ICallToActionProps) => {
    const project = Project.getInstance()

    const projectId = !isUndefinedOrNullOrEmpty(project.projectId) ? project.projectId : "standard"

    const headline = props.headline
    const content = props.content
    const btnLabel = props.btnLabel
    const btnLink = props.btnLink

    return (
        <CallToActionContainer
            background={"https://s3.eu-central-1.amazonaws.com/tukan-frontend/" + projectId + "/assets/" + "call-to-action-background.svg"}
        >
            <CallToActionGrid valign="center" halign="center">
                <TCol size={2 / 3} collapse="md">
                    <CallToActionContent>
                        <div>{parse(headline)}</div>
                        <div>{parse(content)}</div>
                    </CallToActionContent>
                    <Button href={btnLink} label={btnLabel} />
                </TCol>
            </CallToActionGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div<{ background: string }>`
    padding-bottom: calc(2 * ${(props) => props.theme.spacing.xl});
    padding-top: calc(2 * ${(props) => props.theme.spacing.xl});
    text-align: center;
    background: ${(props) => props.theme.projectColors.background};
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;
    overflow: hidden;

    h2 {
        font-size: calc(2 * ${(props) => props.theme.fontSize.l});
    }

    h1,
    h2,
    h3 {
        ${(props) =>
            props.theme.projectColors.gradient
                ? getGradientAnimation(props.theme.projectColors.green)
                : `color: ${props.theme.projectColors.green};`}
        font-family: ${(props) => props.theme.secondaryFont.name};
        font-style: normal;
        font-size: ${(props) => props.theme.fontSize.s};
        font-weight: ${(props) => props.theme.fontWeight.light};
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    p {
        font-size: ${(props) => props.theme.fontSize.xxl};
        color: ${(props) => props.theme.projectColors.onBackground};
    }

    ${media.maxWidth("md")`
        padding-top: ${(props) => props.theme.spacing.xl};
        padding-bottom: ${(props) => props.theme.spacing.xl};

        h1,
        h2,
        h3 {
            font-size: ${(props) => props.theme.fontSize.m};
        }

        p {
            font-size: ${(props) => props.theme.fontSize.s};
        }
`};
`

const CallToActionGrid = styled(TGrid)`
    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const CallToActionContent = styled.div`
    margin-bottom: ${(props) => props.theme.spacing.m};
`

export default CallToAction
