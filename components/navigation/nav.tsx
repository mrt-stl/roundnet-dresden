import NavLink from "./nav-link"
import Project from "../../models/config/project"
import { tukanConfig } from "../style/tukan"
import { linkResolver } from "../../utils/prismic-utils"
import styled from "styled-components"
import { TGrid } from "../style/sc-grid"
import TukanImage from "../elements/tukan-image"
import { useState, useEffect } from "react"
import { media } from "../style/tukan"

interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {
    const project = Project.getInstance()

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
            <StyledBurger open={open} onClick={handleClick}>
                <span />
                <span />
            </StyledBurger>
            <MenuContainer open={open}>
                <MenuContent>
                    
                <p className="test">Menu</p>

                        {navLinks.map((element) => {
                            return (
                    
                                <NavLink href={element.href} linkContent={element.linkContent} />
                                )
                            })
                        }

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
    z-index: 100;
    overflow: hidden;
    top: 0;
    width: 100%;
    height: ${tukanConfig.navHeight};
    background-color: #000000;
    padding-top: 60px;
    padding-bottom: 60px;
    position: absolut;

    a {
        background-image: none;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const NavGrid = styled(TGrid)`
    max-width: 1024px;
    height: 100%;
`

const Branding = styled.a<{ halign: boolean; }>`
    margin-right: ${props => props.halign ? "auto" : "10px"};
    width: auto;
    img {
        object-fit: contain;
    }
`

const StyledBurger = styled.button<{ open?: boolean }>`
    ${media.minWidth("md")`
        display: none;
    `};

    align-items: center;
    background: none;
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
    top: 20px;
    top: var(--standard-spacing);
    transition: all 0.3s linear;
    width: 60px;
    z-index: 11;

    &:focus {
        outline: none;
    }

    span {
        height: 2px;
        background: ${(props) => props.theme.color.background};
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

const MenuContainer = styled.nav<{ open?: boolean }>`
    ${media.minWidth("md")`
        display: none;
    `};

    background: #333333;
    background-image: url(../static/img/bg.svg);
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

    transform: ${({ open }) => open ? "translateX(0)" : "translateX(0)"};
    opacity: ${({ open }) => open ? "1" : "0"};
`

const MenuContent = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;

    .test {
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`

export default Nav
