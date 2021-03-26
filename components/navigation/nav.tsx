import { isUndefinedOrNullOrEmpty } from "../../utils/object-utils"
import { linkResolver } from "../../utils/prismic-utils"
import { media } from "../style/tukan"
import { TGrid } from "../style/sc-grid"
import { useState, useEffect } from "react"
import NavLink from "./nav-link"
import Project from "../../models/config/project"
import styled from "styled-components"
import TukanImage from "../elements/tukan-image"

interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {
    const project = Project.getInstance()

    const projectId = !isUndefinedOrNullOrEmpty(project.projectId) ? project.projectId : "standard"

    const [navLinks, setNavLinks] = useState([{ href: "/", linkContent: "Loading..." }])
    const [navLogo, setNavLogo] = useState({ src: "", alt: "Logo" })
    const [navAlignment, setNavAlignment] = useState(true)
    const [navLoading, setNavLoading] = useState(true)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const navLinksArr = []
        let navLogoObject: any = {}
        let navAlign: boolean

        if (props.data) {
            const navData = props.data.data.nav_links
            navData.map((element) => {
                const link = {
                    href: linkResolver(element.nav_link),
                    linkContent: element.nav_label,
                }
                navLinksArr.push(link)
            })

            const navLogoData = props.data.data.nav_logo
            navLogoObject = {
                src: navLogoData.url,
                alt: navLogoData.alt,
            }

            navAlign = props.data.data.nav_alignment
        }
        setNavLinks(navLinksArr)
        setNavLogo(navLogoObject)
        setNavAlignment(navAlign)
        setNavLoading(false)
    }, [props])

    return (
        <nav>
            <Branding1 href="/">
                <TukanImage src={navLogo.src} alt={navLogo.alt} height="auto" width="auto" />
            </Branding1>
            <StyledBurger open={open} onClick={handleClick}>
                <span />
                <span />
            </StyledBurger>
            <MenuContainer open={open} background={"https://s3.eu-central-1.amazonaws.com/tukan-frontend/" + projectId + "/assets/" + "menu-background.svg"}>
                <MenuContent>
                        <p className="menu-title">Übersicht</p>

                        {navLoading ? "" : navLinks.map((element, index) => {
                        return (
                            <div className="menu-item" key={index}>
                                <NavLink href={element.href} linkContent={element.linkContent} />
                            </div>
                        )
                    })}
                </MenuContent>
            </MenuContainer>

            <NavContainer>
                <NavGrid halign={navAlignment ? "right" : "left"}>
                        <Branding href="/" halign={navAlignment}>
                            <TukanImage src={navLogo.src} alt={navLogo.alt} height="48px" width="auto" />
                        </Branding>
                        {navLoading ? "" : navLinks.map((element, index) => {
                            const hideMobileIndex = project.useShopView ? -1 : 0
                            const hideMobile = index !== hideMobileIndex ? "desktop-nav" : "h-100"
                            return (
                                <div className={"align-items-center " + hideMobile} key={index}>
                                    <NavLink href={element.href} linkContent={element.linkContent} />
                                </div>
                            )
                        })}
                </NavGrid>
            </NavContainer>
        </nav>
    )
}

const NavContainer = styled.div`
    /* background-color: ${(props) => props.color ? props.color : props.theme.projectColors.secondary}; */
    overflow: hidden;
    top: 64px;
    position: absolute;
    width: 100%;
    z-index: 100;

    a {
        background-image: none;
        color: #ffffff;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const NavGrid = styled(TGrid)`
    max-width: 1024px;
    height: 100%;
`

const Branding = styled.a<{ halign: boolean }>`
    margin-right: ${props => props.halign ? "auto" : "20px"};
    width: auto;

    img {
        object-fit: contain;
    }
`

const Branding1 = styled.a `
    ${media.minWidth("md")`
        display: none;
    `};

        position: absolute;
        top: 62px;
        left: 60px;

    img {
        height: 32px;
    }
`

const StyledBurger = styled.button<{ open?: boolean }>`
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
    position: fixed;
    right: 0px;
    top: ${(props) => props.theme.spacing.m};
    transition: all 0.3s linear;
    width: 60px;
    z-index: 11;

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
          transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
          width: ${({ open }) => open ? "24px" : "24px"}
        }
        :nth-child(2) {
          transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
          width: ${({ open }) => open ? "24px" : "24px"}
        }
    }
`

const MenuContainer = styled.nav<{ background: string; open?: boolean }>`
    ${media.minWidth("md")`
        display: none;
    `};

    background: #000000;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    align-items: center;
    display: flex;
    visibility: ${({open}) => open ? "visible" : "hidden"};

    .menu-title {
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }

    .menu-item:nth-child(2) {
        transition: transform 0.25s ease-in-out 0.15s, opacity 0.25s ease-in-out 0.15s;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: ${({ open }) => open ? "1" : "0"};
        transform: ${({ open }) => open ? "translateY(0px)" : "translateY(-8px)"};
    } 

    .menu-item:nth-child(3) {
        transition: transform 0.25s ease-in-out 0.25s, opacity 0.25s ease-in-out 0.25s;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: ${({ open }) => open ? "1" : "0"};
        transform: ${({ open }) => open ? "translateY(0px)" : "translateY(-8px)"};
    }

    .menu-item:nth-child(4) {
        transition: transform 0.25s ease-in-out 0.35s, opacity 0.25s ease-in-out 0.35s;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: ${({ open }) => open ? "1" : "0"};
        transform: ${({ open }) => open ? "translateY(0px)" : "translateY(-8px)"};
    }

    .menu-item:nth-child(5) {
        transition: transform 0.25s ease-in-out 0.45s, opacity 0.25s ease-in-out 0.45s;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: ${({ open }) => open ? "1" : "0"};
        transform: ${({ open }) => open ? "translateY(0px)" : "translateY(-8px)"};
    }

    opacity: ${({ open }) => open ? "1" : "0"};
`

const MenuContent = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;
`

export default Nav
