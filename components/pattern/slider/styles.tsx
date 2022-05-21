import { media } from "../../style/tukan"
import { TGrid } from "../../style/sc-grid"
import Icon from "../../../public/icon-arrow.svg"
import styled from "styled-components"

export const SliderGrid = styled(TGrid)`
    align-items: center;
    max-width: 100%;
    position: relative;

    img::selection {
        background: none;
    }

    img {
        display: block;
    }

    ${media.maxWidth("md")`
        margin-left: 0px;
        margin-right: 0px;

        span {
            display: none;
        }
    `}
`

export const Indicator = styled.div<{ project: boolean }>`
    align-items: center;
    position: absolute;
    left: max(20px, calc((100vw - 1120px) / 2 + 20px));
    bottom: ${(props) => (props.project ? "0px" : "0px")};
    display: flex;
    height: 80px;
    justify-content: center;
    width: 160px;
    z-index: 90;
    background: white;

    ${media.maxWidth("md")`
        display: none;
    `}
`

export const IconArrow = styled(Icon)<{ left?: boolean }>`
    border-radius: 20px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    transform: rotate(${(props) => (props.left ? "0deg" : "180deg")});
    width: 40px;
    z-index: 90;

    path,
    circle {
        stroke: black;
    }

    :hover {
        cursor: pointer;
    }

    ${media.maxWidth("md")`
        margin-left: 0px;
        margin-right: 20px;
    `}
`

export const SliderContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow: auto;
    padding-left: 20px;
    width: 100%;

    /* hide scrollbar */
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`

export const Wrapper = styled.div`
    height: auto;
    margin-right: 40px;
    position: relative;

    :first-child {
        padding-left: calc((100vw - 1120px) / 2);
    }

    img {
        max-height: 480px;
        max-width: fit-content;
    }

    a {
        height: 0px;
    }

    ${media.maxWidth("md")`
        :first-child {
            padding-left: 20px;
        }

        img {
            max-height: 240px;
            max-width: fit-content;
        }
    `}
`

export const ProjectInfo = styled.div`
    height: 100px;
    display: flex;
    align-items: center;

    p {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ${media.maxWidth("md")`
        display: none;
    `}
`
