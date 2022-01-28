import styled from "styled-components"
import { media } from "../style/tukan"
import { TGrid } from "../style/sc-grid"

export const Branding = styled.a`
    position: relative;
    display: block;
    height: 50px;
    width: 154px;
`

export const NavContainer = styled.div<{ mobile?: boolean }>`
    background-color: ${(props) => props.theme.color.white};
    height: 80px;
    width: 100%;
    z-index: 10;
    display: ${(props) => (props.mobile ? "none" : "block")};
    position: fixed;
    top: 0;
    left: 0;

    ${media.maxWidth("lg")`
        display: ${(props) => (props.mobile ? "flex" : "none")};
        align-items: center;
        ${Branding} {
            margin-left: ${(props) => props.theme.spacing.m};
            transform: translateY(5px);
        }
    `}
`

export const NavGrid = styled(TGrid)`
    height: 80px;
    padding-right: ${(props) => props.theme.spacing.m};
    padding-left: ${(props) => props.theme.spacing.m};
`

export const NavLink = styled.a`
    text-transform: uppercase;
    margin-right: ${(props) => props.theme.spacing.m};
    letter-spacing: 1px;
    transition: all 0.2s linear;

    :hover {
        transition: all 0.1s linear;
        opacity: 0.5;
    }
`

export const LanguageSwitch = styled.button`
    background-color: ${(props) => props.theme.color.bitterlemon};
    border: 0px;
    width: 60px;
    height: 40px;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
    transition: all 0.2s linear;

    :hover {
        transition: all 0.1s linear;
        background-color: ${(props) => props.theme.color.blackCoral};
        color: ${(props) => props.theme.color.white};
    }
`

export const StyledBurger = styled.button<{ open: boolean }>`
    ${media.minWidth("ls")`
        display: none;
    `};

    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-around;
    padding-bottom: 20px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
    position: absolute;
    right: 0px;
    top: ${(props) => props.theme.spacing.xs};
    transition: all 0.3s linear;
    width: 60px;
    z-index: 100;

    span {
        height: 2px;
        background: #ffffff;
        transition: all 0.2s linear;
        position: relative;
        transform-origin: 4.5px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
            width: ${({ open }) => (open ? "24px" : "24px")};
            background-color: ${(props) => props.theme.color.morningBlue};
        }
        :nth-child(2) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
            width: ${({ open }) => (open ? "24px" : "24px")};
            background-color: ${(props) => props.theme.color.morningBlue};
        }
    }
`

export const MenuContainer = styled.nav<{ open?: boolean }>`
    display: ${({ open }) => (open ? "flex" : "none")};

    ${NavLink} {
        color: ${(props) => props.theme.color.white};
        margin-bottom: ${(props) => props.theme.spacing.s};
        margin-top: ${(props) => props.theme.spacing.s};
        margin-right: 0;
        text-align: center;
        font-size: ${(props) => props.theme.fontSize.l};
        width: 100%;
    }

    ${LanguageSwitch} {
        margin-left: auto;
        margin-right: auto;
        margin-top: ${(props) => props.theme.spacing.s};
    }

    background: ${(props) => props.theme.color.blackCoral};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding-top: ${(props) => props.theme.spacing.s};
    padding-bottom: ${(props) => props.theme.spacing.s};
    flex-wrap: wrap;
    align-content: center;
`
export const Headline = styled.p`
    color: ${(props) => props.theme.color.bitterlemon};
    padding-bottom: ${(props) => props.theme.spacing.s};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 auto;
`
