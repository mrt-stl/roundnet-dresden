import NavLink from "./nav-link"
import MobileMenu from "./mobile-menu"
import Project from "../../models/config/project"
import { gridConfig } from "../style/binary-grid"
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

    const [navLinks, setNavLinks] = useState([{ href: "/", linkContent: "Start" }])

    useEffect(() => {
        const navLinksArr = []
        if (props.data) {
            const navData = props.data.data.nav_links
            navData.map((element) => {
                const link = {
                    href: linkResolver(element.nav_link),
                    linkContent: element.nav_label,
                }
                navLinksArr.push(link)
            })
        }
        setNavLinks(navLinksArr)
    }, [props])

    return (
        <nav>
            <StyledNav>
                <NavGrid halign="right">
                    <StyledLogo href="/">
                        <TukanImage
                            // src={props ? props.data.data.nav_logo.url : ""}
                            // alt={props ? props.data.data.nav_logo.alt : ""}
                            src={""}
                            alt={""}
                            height="48px"
                            width="auto"
                        />
                    </StyledLogo>
                    {navLinks.map((element, index) => {
                        const hideMobileIndex = project.useShopView ? -1 : 0
                        const hideMobile = index !== hideMobileIndex ? "desktop-nav" : "h-100"
                        return (
                            <div className={"align-items-center " + hideMobile} key={index}>
                                <NavLink href={element.href} linkContent={element.linkContent} />
                            </div>
                        )
                    })}
                    {/*
                    {project.useShopView ?
                        <CartLink /> :
                        <></>
                    }
 */}
                </NavGrid>
            </StyledNav>

            <MobileMenu links={navLinks} />

            <style jsx>{`
                @media only screen and (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }

                    .inner-nav {
                        padding-left: ${gridConfig.gridPadding};
                    }
                }
            `}</style>
        </nav>
    )
}

const StyledNav = styled.div`
    z-index: 100;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: ${tukanConfig.navHeight};
    background-color: transparent;
`

const NavGrid = styled(TGrid)`
    max-width: 1024px;
    height: 100%;
`

const StyledLogo = styled.a`
    margin-right: auto;
    width: auto;
    img {
        object-fit: contain;
    }

    @media only screen and (max-width: 768px) {
        img {
            display: none;
        }
`

export default Nav
