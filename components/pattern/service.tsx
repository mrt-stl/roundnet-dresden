import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import parse from "html-react-parser"
import styled from "styled-components"

export interface IServiceProps {
    headline?: string
    content?: string
    background?: boolean
    cols?: { data; link?; background? }[]
}

const Service = (props: IServiceProps) => {
    const contentCols = props.cols.map((col, index) => {
        return (
            <ServiceContent collapse="md" key={index} singleCol={props.cols.length === 1} link={col.link} background={col.background}>
                {col.link ? <a href={col.link}>{parse(col.data)}</a> : <div>{parse(col.data)}</div>}
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

const ServiceContainer = styled.div<{ background?: boolean }>`
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    padding-top: ${(props) => props.theme.spacing.xl};
    background-color: ${(props) => (props.background ? props.theme.projectColors.lighterGray : null)};

    ${media.maxWidth("md")`
    `}
`

const ServiceGrid = styled(TGrid)``

const ServiceStage = styled.div`
    margin-bottom: ${(props) => props.theme.spacing.xl};

    h1 {
        color: ${(props) => props.theme.projectColors.darkGray};
    }

    p {
        color: ${(props) => props.theme.projectColors.mediumGray};
    }
`

const ServiceContent = styled(TCol)<{ singleCol?: boolean; background?: string; link?: boolean }>`
    span.contact {
        display: inline-block;
        width: 20px;
    }
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
                    
                    p:not(.block-img), ul {
                        max-width: 90%;
                        column-count: 2;
                        column-gap: 80px;
                        text-align: left;
                        margin: ${props.theme.spacing.m} auto !important;
                    };
                    * {
                        color: white !important;
                    }

                    @media only screen and (max-width: 768px) {
                        p:not(.block-img), ul {
                            column-count: 1;
                        };
                    }
                    `
            : `p {color: ${props.theme.projectColors.mediumGray}}`}

        box-shadow: ${(props) => props.theme.shadow.standard};
    border-radius: 8px;
    transition: all 0.25s ease-in-out;

    a {
        display: block;
        height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-size: ${(props) => props.theme.fontSize.m};
        margin-left: 0;
        color: ${(props) => props.theme.projectColors.darkGray};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        margin-top: ${(props) => props.theme.spacing.s};
    }

    p:not(.block-img),
    h1,
    h2,
    h3,
    h4,
    h5 {
        line-height: 1.5;
        margin-left: ${(props) => props.theme.spacing.m};
        margin-right: ${(props) => props.theme.spacing.m};
    }

    p:not(.block-img) {
        color: ${(props) => props.theme.projectColors.mediumGray};
        margin-bottom: ${(props) => props.theme.spacing.m};
    }

    .block-img {
        margin-top: 0;
    }

    b,
    strong {
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

    ${(props) =>
        !props.link
            ? null
            : `:hover {
            transform: translate(0px, -10px);
            box-shadow: ${(props) => props.theme.shadow.onHover};
            transition: all 0.15s ease-in-out;
        }`}

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
