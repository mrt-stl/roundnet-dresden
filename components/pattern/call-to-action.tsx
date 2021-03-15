import { isUndefinedOrNullOrEmpty } from "../../utils/object-utils"
import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import Button from "../elements/button"
import parse from "html-react-parser"
import Project from "../../models/config/project"
import styled from "styled-components"

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
        <CallToActionContainer background={"https://s3.eu-central-1.amazonaws.com/tukan-frontend/" + projectId + "/assets/" + "call-to-action-background.svg"}>
            <CallToActionGrid valign="center" halign="center">
                <TCol size={2 / 3} collapse="md">
                    <CallToActionContent>
                        <div>
                            {parse(headline)}
                        </div>
                        <div>
                            {parse(content)}
                        </div>
                    </CallToActionContent>
                    <Button href={btnLink} label={btnLabel}/>
                </TCol>
            </CallToActionGrid>
        </CallToActionContainer>
    )
}

const CallToActionContainer = styled.div<{ background: string }>`
    padding-bottom: calc( 2 * ${(props) => props.theme.spacing.xl});
    padding-top: calc( 2 * ${(props) => props.theme.spacing.xl});
    text-align: center;
    background: ${(props) => props.theme.color.background};
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;

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
text-transform: uppercase;    }

    p {
        font-size: ${(props) => props.theme.fontSize.l};
        color: ${(props) => props.theme.color.onBackground};
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
