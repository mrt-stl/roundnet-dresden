import NavLink from "./nav-link"
import MobileMenu from "./mobile-menu"
import Project from "../../models/config/project"
import { gridConfig } from "../style/binary-grid"
import { tukanConfig } from "../style/tukan"

const Nav = () => {
    const project = Project.getInstance()
    const navLinks = project.nav

    const firstNavLink = navLinks[0]

    return (
        <div>
            <div className="nav">
                <div className="grid no-wrap inner-nav h-100">
                    <div className="align-items-center h-100" key={0}>
                        <NavLink
                            href={firstNavLink.link}
                            linkContent={firstNavLink.name} />
                    </div>

                    {navLinks.map((element, index) => {
                        if (index === 0) {
                            return
                        }

                        return (
                            <div className="align-items-center desktop-nav" key={index}>
                                <NavLink
                                    href={element.link}
                                    linkContent={element.name} />
                            </div>
                        )
                    })}
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

        </div>
    )
}

export default Nav
