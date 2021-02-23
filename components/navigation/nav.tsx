import NavLink from "./nav-link"
import MobileMenu from "./mobile-menu"
import Project from "../../models/config/project"
import { tukanConfig } from "../style/tukan"
import { linkResolver } from "../../utils/prismic-utils"
import styled from "styled-components"
import { TGrid } from "../style/sc-grid"
import TukanImage from "../elements/tukan-image"
import { useState, useEffect } from "react"
{
    /* import CartLink from "../shop/cart-link" */
}

interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {
    const project = Project.getInstance()

    const [navLinks, setNavLinks] = useState([{ href: "/", linkContent: "Loading..." }])
    const [navLogo, setNavLogo] = useState({ src: "", alt: "Logo" })
    const [navAlignment, setNavAlignment] = useState(true)
    const [navLoading, setNavLoading] = useState(true)

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

            <MobileMenu links={navLinks} />
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

export default Nav
