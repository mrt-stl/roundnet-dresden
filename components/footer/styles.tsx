import styled from "styled-components"
import { TCol } from "../style/sc-grid"
import { media } from "../style/tukan"

export const FooterContainer = styled.footer`
    position: relative;
    margin-top: ${(props) => props.theme.spacing.xl};
    padding-top: ${(props) => props.theme.spacing.s};
    padding-bottom: ${(props) => props.theme.spacing.s};
    background-color: ${(props) => props.theme.color.blackCoral};

    a {
        transition: all 0.2s linear;
    }

    a:hover {
        transition: all 0.1s linear;
        color: ${(props) => props.theme.color.bitterlemon};
    }

    ${media.maxWidth("lg")`
        height: fit-content;
        padding-top: ${(props) => props.theme.spacing.s};
        padding-bottom:0;
    `}
`

export const Headline = styled.p<{ accent?: boolean }>`
    color: ${(props) => (props.accent ? props.theme.color.bitterlemon : null)};
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const Content = styled.div<{ social?: boolean }>`
    margin-top: ${(props) => props.theme.spacing.s};
    p,
    a {
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.s};
    }

    a {
        display: ${(props) => (props.social ? "flex" : "initial")};
        align-items: ${(props) => (props.social ? "center" : null)};
        margin-right: ${(props) => (props.social ? "inherit" : props.theme.spacing.s)};
        width: fit-content;

        span {
            margin-left: ${(props) => props.theme.spacing.xs};
        }
    }
`
export const LegalsCol = styled(TCol)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${media.maxWidth("lg")`
        flex-direction: column-reverse;
    `}
`
