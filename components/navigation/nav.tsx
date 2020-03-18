import NavLink from "./nav-link"
import MobileMenu from "./mobile-menu"
import Project from "../../models/config/project"
import { gridConfig } from "../style/binary-grid"
import { tukanConfig } from "../style/tukan"
import CartLink from "../shop/cart-link"

const Nav = () => {
    const project = Project.getInstance()
    const navLinks = project.nav

    return (
        <nav>
            <div className="nav">
                <div className="grid no-wrap inner-nav h-100">
                    {navLinks.map((element, index) => {
                        const hideMobileIndex = project.useShopView ? -1 : 0
                        const hideMobile = index !== hideMobileIndex ? "desktop-nav" : "h-100"
                        return (
                            <div className={"align-items-center " + hideMobile} key={index}>
                                <NavLink
                                    href={element.link}
                                    linkContent={element.name} />
                            </div>
                        )
                    })}

                    {project.useShopView ?
                        <CartLink /> :
                        <></>
                    }

                </div>

            </div>

            <MobileMenu
                links={navLinks} />

            <style jsx>{`
                .nav {
                    z-index: 100;
                    overflow: hidden;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    height: ${tukanConfig.navHeight};
                    background-color: var(--background);
                }

                .inner-nav {
                    padding-left: calc(${gridConfig.colPadding} + ${gridConfig.gridPadding});
                    padding-right: calc(${gridConfig.colPadding} + ${gridConfig.gridPadding});
                }

                .nav-link {
                    color: var(--primary);
                }

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

export default Nav
