import { slide as Menu } from "react-burger-menu"
import INavLink from "../../models/nav/nav-link"
import Project from "../../models/config/project"
interface IMobileMenuProps {
    links: INavLink[]
}

const MobileMenu = (props: IMobileMenuProps) => {
    const project = Project.getInstance()

    const { links } = props

    return (
        <div className="mobile-menu">
            <Menu width={"80%"}
                customBurgerIcon={<img src="/static/icon/icon-menu-open.svg" alt="Open menu" />}
                customCrossIcon={<img src="/static/icon/icon-menu-close.svg" alt="Close menu" />}
                right>

                {links.map((element, index) => {
                    const visibilitIndex = project.useShopView ? -1 : 0
                    const visibilityClass = index === visibilitIndex ? "hide" : ""

                    return (
                        <div className={"align-items-center " + visibilityClass} key={index}>
                            <a className="menu-item" href={element.href}>{element.linkContent}</a>
                        </div>
                    )
                })}

            </Menu>

            <style jsx>{`
                .mobile-menu {
                    display: none;
                }
                .menu-item {
                    padding-top: 1em;
                    color: var(--font-color);
                }

                a {
                    display: block;
                    background-image: none;
                }

                @media only screen and (max-width: 768px) {
                    .mobile-menu {
                        display: block;
                    }
                }
            `}</style>
        </div>
    )
}

export default MobileMenu