import styled from "styled-components"
import { TCol } from "../../style/sc-grid"
import { media } from "../../style/tukan"

export const ConnectionsContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.xl};
    line-height: ${(props) => props.theme.lineHeight.l};

    ${media.minWidth("lg")`
        padding-bottom: ${(props) => props.theme.spacing.xxl};
    `}

    p {
        /* to make empty lines having an effect */
        min-height: 12px;
    }
`

export const Headline = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${(props) => props.theme.fontSize.s};
    margin-bottom: ${(props) => props.theme.spacing.s};
`

export const CardContainer = styled.div`
    display: flex;
    overflow: auto;
    width: 100%;
    padding-left: ${(props) => props.theme.spacing.m};
    padding-right: ${(props) => props.theme.spacing.m};

    /* hide scrollbar */
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`

export const ImageWrapper = styled.div<{ isActive: boolean }>`
    border: ${(props) => (props.isActive ? `2px solid ${props.theme.color.bitterlemon}` : "0px")};
    width: 25%;
    min-width: 210px;
    margin-top: ${(props) => props.theme.spacing.m};
    margin-left: ${(props) => props.theme.spacing.s};
    margin-right: ${(props) => props.theme.spacing.s};
    padding-left: ${(props) => props.theme.spacing.s};
    padding-right: ${(props) => props.theme.spacing.s};
    height: 174px;
    background-color: ${(props) => props.theme.color.white};
    cursor: pointer;
    position: relative;
    span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    :first-child {
        margin-left: 0;
    }
    :first-child {
        margin-right: 0;
    }
`

export const Details = styled(TCol)<{ isActive: boolean }>`
    display: ${(props) => (props.isActive ? "block" : "none")};
    margin-top: ${(props) => props.theme.spacing.m};
    padding-top: ${(props) => props.theme.spacing.m};
    padding-bottom: ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.blackCoral};

    ${media.minWidth("lg")`
        margin-left: ${(props) => props.theme.spacing.m};
        margin-right: ${(props) => props.theme.spacing.m};
    `}

    p {
        color: ${(props) => props.theme.color.white};
    }

    a {
        color: ${(props) => props.theme.color.bitterlemon};
    }
`

export const StatusBadge = styled.p`
    position: absolute;
    top: ${(props) => props.theme.spacing.xs};
    left: ${(props) => props.theme.spacing.xs};
    background-color: ${(props) => props.theme.color.cultured};
    padding: 3px 10px;
    z-index: 1;
    font-size: ${(props) => props.theme.fontSize.s};
`
