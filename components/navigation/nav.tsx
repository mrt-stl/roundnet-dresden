import { linkResolver } from "../../utils/prismic-utils"
import { media } from "../style/tukan"
import { TGrid } from "../style/sc-grid"
import { useState, useEffect } from "react"
import NavLink from "./nav-link"
import styled from "styled-components"
import TukanImage from "../elements/tukan-image"

interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const body = document.querySelector("body")
        if (open) {
            body.style.height = "100vh"
            body.style.overflow = "hidden"
        } else {
            body.style.height = null
            body.style.overflow = null
        }
    }, [open])

    const handleClick = () => {
        setOpen(!open)
    }

    if (props.data) {
        const { nav_alignment, nav_links, nav_logo } = props.data
        return (
            <nav>
                <MobileHeader>
                    <Branding1 href="/">
                        <TukanImage src={nav_logo.url} alt={nav_logo.alt} height="auto" width="auto" />
                    </Branding1>
                    <StyledBurger open={open} onClick={handleClick}>
                        <span />
                        <span />
                    </StyledBurger>
                </MobileHeader>
                <MenuContainer
                    open={open}
                    background={"https://s3.eu-central-1.amazonaws.com/tukan-frontend/" + (process.env.NEXT_PUBLIC_PROJECT_NAME ? process.env.NEXT_PUBLIC_PROJECT_NAME : null) + "/assets/" + "menu-background.svg"}
                >
                    <MenuContent>
                        <p className="menu-title">Übersicht</p>

                        {nav_links.map((element, index) => {
                            return (
                                <div className="menu-item" key={index}>
                                    <NavLink href={linkResolver(element.nav_link)} linkContent={element.nav_label} />
                                </div>
                            )
                        })}
                    </MenuContent>
                </MenuContainer>

                <NavContainer>
                    <NavGrid halign={nav_alignment ? "right" : "left"} valign="center">
                        <Branding href="/" halign={nav_alignment}>
                            <TukanImage src={nav_logo.url} alt={nav_logo.alt} height="100px" width="auto" />
                        </Branding>
                        {nav_links.map((element, index) => {
                            return (
                                <div key={index}>
                                    <NavLink href={linkResolver(element.nav_link)} linkContent={element.nav_label} />
                                </div>
                            )
                        })}
                    </NavGrid>
                </NavContainer>
            </nav>
        )
    }
    return null
}

const NavContainer = styled.div`
    background-color: white;

    // .tukan-container gets nav-height applied as margin-top
    height: 118px;
    overflow: hidden;
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px -30px 60px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 768px) {
        display: none;
    }
`



const NavGrid = styled(TGrid)`
    max-width: 1024px;
    height: 80px;
`

const Branding = styled.a<{ halign: boolean }>`
    margin-right: ${(props) => (props.halign ? "auto" : "20px")};
    width: auto;
    max-height: 40px;
    padding-left: 20px;

    img {
        height: auto;
        object-fit: contain;
    }
`

const MobileHeader = styled.div`
    ${media.minWidth("md")`
        display: none;
    `};

    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 85px;
    z-index: 11;
`

const Branding1 = styled.a`
    ${media.minWidth("md")`
        display: none;
    `};

    position: absolute;
    top: 33px;
    left: 60px;

    img {
        height: 32px;
    }
`

const StyledBurger = styled.button<{ open: boolean }>`
    ${media.minWidth("md")`
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
    top: ${(props) => props.theme.spacing.s};
    transition: all 0.3s linear;
    width: 60px;
    z-index: 100;

    &:focus {
        outline: none;
        background: transparent;
    }

    span {
        height: 2px;
        background: #ffffff;
        transition: all 0.2s linear;
        position: relative;
        transform-origin: 4.5px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
            width: ${({ open }) => (open ? "24px" : "24px")};
            background-color: ${(props) => props.theme.color.blackCoral};
        }
        :nth-child(2) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
            width: ${({ open }) => (open ? "24px" : "24px")};
            background-color: ${(props) => props.theme.color.blackCoral};
        }
    }
`

const MenuContainer = styled.nav<{ background: string; open?: boolean }>`
    ${media.minWidth("md")`
        display: none;
    `};

    a {
        color: ${(props) => props.theme.color.white};
    }

    background: ${(props) => props.theme.color.morningBlue};
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    align-items: center;
    display: flex;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};

    .menu-title {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }

    .menu-item {
        color: ${(props) => props.theme.color.blackCoral};
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: ${({ open }) => (open ? "1" : "0")};
        transform: ${({ open }) => (open ? "translateY(0px)" : "translateY(-8px)")};
    }

    .menu-item:nth-child(2) {
        transition: transform 0.25s ease-in-out 0.15s, opacity 0.25s ease-in-out 0.15s;
    }

    .menu-item:nth-child(3) {
        transition: transform 0.25s ease-in-out 0.25s, opacity 0.25s ease-in-out 0.25s;
    }

    .menu-item:nth-child(4) {
        transition: transform 0.25s ease-in-out 0.35s, opacity 0.25s ease-in-out 0.35s;
    }

    .menu-item:nth-child(5) {
        transition: transform 0.25s ease-in-out 0.45s, opacity 0.25s ease-in-out 0.45s;
    }

    .menu-item:nth-child(6) {
        transition: transform 0.25s ease-in-out 0.55s, opacity 0.25s ease-in-out 0.55s;
    }

    opacity: ${({ open }) => (open ? "1" : "0")};
`

const MenuContent = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;
`

export default Nav
