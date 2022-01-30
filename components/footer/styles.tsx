import styled from "styled-components"
import { TCol } from "../style/sc-grid"
import { media } from "../style/tukan"

export const FooterContainer = styled.footer`
    height: 440px;
    position: relative;
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.m};

    a {
        transition: all 0.2s linear;
    } 

    a:hover {
        transition: all 0.1s linear;
        color: ${(props) => props.theme.color.bitterlemon};
    }


    :after {
        content: "";
        display: block;
        width: 50vw;
        background-color: ${(props) => props.theme.color.blackCoral};
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        z-index: -1;
    }

    ${media.maxWidth("lg")`
        height: fit-content;
        padding-top: ${(props) => props.theme.spacing.s};
        :after {
            display: none;
        }
    `}
`

export const Headline = styled.p<{ accent?: boolean }>`
    color: ${(props) => (props.accent ? props.theme.color.bitterlemon : null)};
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const News = styled.div`
    border-left: 2px solid ${(props) => props.theme.color.bitterlemon};
    margin-top: ${(props) => props.theme.spacing.s};
    padding-left: ${(props) => props.theme.spacing.s};
    font-size: ${(props) => props.theme.fontSize.s};
    line-height: ${(props) => props.theme.lineHeight.l};

    ${media.minWidth("lg")`
    padding-right: ${(props) => props.theme.spacing.s};
    `}
`

export const FooterMainContentCol = styled(TCol)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    ${media.maxWidth("lg")`
        height: fit-content;
        padding-left: 0;
        margin-top: ${(props) => props.theme.spacing.m};
        padding-top: ${(props) => props.theme.spacing.m};
        padding-bottom: ${(props) => props.theme.spacing.m};
        :after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-color: ${(props) => props.theme.color.blackCoral};
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
        }
    `}
`

export const Content = styled.div`
    margin-top: ${(props) => props.theme.spacing.s};
    p,
    a {
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.s};
    }

    a {
        display: flex;
        align-items: center;
        width: fit-content;

        span {
            margin-left: ${(props) => props.theme.spacing.xs};
        }
    }
`
