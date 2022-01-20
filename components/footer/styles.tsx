import styled from "styled-components"
import { TCol } from "../style/sc-grid"

export const FooterContainer = styled.footer`
    height: 480px;
    position: relative;
    padding-top: ${(props) => props.theme.spacing.xl};

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

    @media only screen and (max-width: 786px) {
        height: fit-content;
        :after {
            display: none;
        }
    }
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
`

export const FooterMainContentCol = styled(TCol)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    @media only screen and (max-width: 786px) {
        height: fit-content;
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
    }
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
