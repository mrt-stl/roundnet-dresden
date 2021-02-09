import NavLink from "./nav-link"
import MobileMenu from "./mobile-menu"
import Project from "../../models/config/project"
import { gridConfig } from "../style/binary-grid"
import { tukanConfig } from "../style/tukan"
import { linkResolver } from "../../utils/prismic-utils"
import styled from "styled-components"
import { TGrid } from "../style/sc-grid"
import TukanImage from "../elements/tukan-image"
{
    /* import CartLink from "../shop/cart-link" */
}

interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {
    const project = Project.getInstance()

    const { data } = props

    const navLinksNew = data.data.nav_links

    return (
        <nav>
            <StyledNav>
                <NavGrid halign="right">
                    <StyledLogo href="/">
                        <TukanImage src={data.data.nav_logo.url} alt={data.data.nav_logo.alt} height="48px" />
                    </StyledLogo>
                    {navLinksNew.map((element, index) => {
                        const hideMobileIndex = project.useShopView ? -1 : 0
                        const hideMobile = index !== hideMobileIndex ? "desktop-nav" : "h-100"
                        return (
                            <div className={"align-items-center " + hideMobile} key={index}>
                                <NavLink href={linkResolver(element.nav_link)} linkContent={element.nav_label} />
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

            <MobileMenu links={navLinksNew} />

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
    width: 90px;
    img {
        object-fit: contain;
    }
`

export default Nav
