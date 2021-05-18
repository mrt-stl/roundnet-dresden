import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import parse from "html-react-parser"
import styled from "styled-components"

export interface IServiceProps {
    headline?: string
    content?: string
    background?: boolean
    cols?: { data; link?, background? }[]
}

const Service = (props: IServiceProps) => {
    const contentCols = props.cols.map((col, index) => {
        return (
            <ServiceContent collapse="md" key={index} singleCol={props.cols.length === 1} background={col.background}>
                <a href={col.link}>{parse(col.data)}</a>
            </ServiceContent>
        )
    })

    return (
        <ServiceContainer background={props.background}>
            {props.headline ? (
                <ServiceGrid halign="center">
                    <TCol size={2 / 3} talign="center" collapse="md">
                        <ServiceStage>
                           {parse(props.headline)}
                            {parse(props.content)}
                        </ServiceStage>
                    </TCol>
                </ServiceGrid>
            ) : (
                <></>
            )}

            <ServiceGrid halign={props.cols.length === 1 ? "center" : "left"}>{contentCols}</ServiceGrid>
        </ServiceContainer>
    )
}

const ServiceContainer = styled.div<{background?: boolean}>`
    margin-bottom: ${(props) => props.theme.spacing.xxl};
    margin-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    padding-top: ${(props) => props.theme.spacing.xxl};
    background-color: ${props => props.background ? props.theme.projectColors.lighterGray : null};

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

const ServiceStage = styled.div`
    margin-bottom: ${(props) => props.theme.spacing.xl};


    h1 {
        color: ${(props) => props.theme.projectColors.darkGray};
    }

    p {
        color: ${(props) => props.theme.projectColors.lightGray};
    }
`

const ServiceContent = styled(TCol)<{ singleCol?: boolean; background?: string }>`
    padding: 0;
    margin-left: 15px;
    margin-right: 15px;
    overflow: hidden;
    background-color: white;

    ${(props) =>
        props.background
            ? `background-color: ${props.theme.projectColors[props.background]};
    color: white;`
            : null}

    ${(props) =>
        props.singleCol
            ? `padding-top: ${props.theme.spacing.l};
                    padding-bottom: ${props.theme.spacing.l};
                    text-align: center;
                    
                    p, ul {
                        max-width: 60%;
                        margin: 0 auto !important;
                    };`
            : `p {color: ${props.theme.projectColors.grey70}}`}

        box-shadow: ${(props) => props.theme.shadow.standard};
    border-radius: 8px;
    transition: all 0.25s ease-in-out;

    h1, h2, h3, h4, h5 {
        font-size: ${props => props.theme.fontSize.m};
        margin-left: 0;
        color: ${(props) => props.theme.projectColors.darkGray};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        margin-top: ${(props) => props.theme.spacing.s};
    }

    p:not(.block-img), h1, h2, h3, h4, h5 {
        line-height: 1.5;
        margin-left: ${(props) => props.theme.spacing.m};
        margin-right: ${(props) => props.theme.spacing.m};
    }

    p:not(.block-img) {
        color: ${(props) => props.theme.projectColors.lightGray};
        margin-bottom: ${(props) => props.theme.spacing.m};
    }

    .block-img {
        margin-top: 0;
    }

    b, strong {
        color: ${(props) => props.theme.projectColors.blue};
    } 

    .icon img {
        height: 50px;
        display: block;
        margin: 0 auto;
    }

    ul {
        margin-top: ${(props) => props.theme.spacing.m};
        text-align: left;
        line-height: 2;
    }

    :hover {
        transform: translate(0px,-10px);
        box-shadow: ${(props) => props.theme.shadow.onHover};
        transition: all 0.15s ease-in-out;
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
