import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import parse from "html-react-parser"
import styled from "styled-components"
import { getGradientAnimation } from "../../utils/color-utils"

export interface IServiceProps {
    headline?: string
    content?: string
    cols?: string[]
}

const Service = (props: IServiceProps) => {

    const contentCols = props.cols.map((col, index) => {

            return (
                <TCol collapse="md" key={index}>
                    <ServiceContent>
                        {parse(col)}
                    </ServiceContent>
                </TCol>
            )
    })

    return (
        <ServiceContainer>
            {props.headline ?
                <ServiceGrid halign="left">
                    <TCol size={3 / 4}>
                        <ServiceStage>
                            {parse(props.headline)}
                            {parse(props.content)}
                        </ServiceStage>
                    </TCol>
                </ServiceGrid> :
                <></>
            }

            <ServiceGrid halign="center">
                {contentCols}
            </ServiceGrid>
        </ServiceContainer>
    )
}

const ServiceContainer = styled.div`
    margin-bottom: ${(props) => props.theme.spacing.xxl};
    margin-top: ${(props) => props.theme.spacing.xl};

    ${media.maxWidth("md")`
        margin-bottom: ${(props) => props.theme.spacing.l};
    `}
`

const ServiceGrid = styled(TGrid)`
    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const ServiceStage = styled.div `
    h1, h2, h3 {
        ${(props) =>
            props.theme.projectColors.gradient
                ? getGradientAnimation(props.theme.projectColors.secondary)
                : `color: ${props.theme.projectColors.secondary};`}
        font-size: ${(props) => props.theme.fontSize.s};
        font-weight: ${(props) => props.theme.fontWeight.light};
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    ${media.maxWidth("md")`
        h1, h2, h3 {
            font-size: ${(props) => props.theme.fontSize.xs};
        }
    `}
`

const ServiceContent = styled.div `
    h1, h2, h3 {
        font-size: ${(props) => props.theme.fontSize.l};
        font-weight: ${(props) => props.theme.fontWeight.light};
        letter-spacing: 1px;
        margin-bottom: ${(props) => props.theme.spacing.xs};
        margin-top: ${(props) => props.theme.spacing.xs};
        text-transform: uppercase;
    }

    p {
        font-size: ${(props) => props.theme.fontSize.s};
        line-height: 1.5;
    }

    .icon img {
        height: 50px;
        display: block;
        margin: 0 auto;
    }

    ${media.maxWidth("md")`
        margin-bottom: ${(props) => props.theme.spacing.s};

        h1, h2, h3 {
            font-size: ${(props) => props.theme.fontSize.m};
        }

        p {
            font-size: ${(props) => props.theme.fontSize.xs};
        }
    `}

`

export default Service