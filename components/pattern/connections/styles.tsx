import styled from "styled-components"
import { TCol } from "../../style/sc-grid"

export const ConnectionsContainer = styled.section`
    background-color: ${(props) => props.theme.color.cultured};
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
    line-height: ${(props) => props.theme.lineHeight.l};

    p {
        /* to make empty lines having an effect */
        min-height: 12px;
    }
`

export const Headline = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${(props) => props.theme.fontSize.s};
    margin-bottom: ${(props) => props.theme.spacing.m};
`

export const CardContainer = styled.div`
    display: flex;
    overflow: auto;

    /* hide scrollbar */
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`

export const ImageWrapper = styled.div<{ isActive: boolean }>`
    border: ${(props) => (props.isActive ? `2px solid ${props.theme.color.bitterlemon}` : "0px")};
    width: calc(25% - 2 * ${(props) => props.theme.spacing.s});
    min-width: 250px;
    margin-top: ${(props) => props.theme.spacing.m};
    margin-left: ${(props) => props.theme.spacing.s};
    margin-right: ${(props) => props.theme.spacing.s};
    padding-left: ${(props) => props.theme.spacing.s};
    padding-right: ${(props) => props.theme.spacing.s};
    height: 174px;
    background-color: ${(props) => props.theme.color.white};
    cursor: pointer;
    span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
`

export const Details = styled(TCol)<{ isActive: boolean }>`
    display: ${(props) => (props.isActive ? "block" : "none")};
    margin-top: ${(props) => props.theme.spacing.m};
    padding-top: ${(props) => props.theme.spacing.m};
    padding-bottom: ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.blackCoral};

    p {
        color: ${(props) => props.theme.color.white};
    }

    a {
        color: ${(props) => props.theme.color.bitterlemon};
    }
`
