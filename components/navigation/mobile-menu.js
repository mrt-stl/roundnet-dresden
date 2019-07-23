import { slide as Menu } from "react-burger-menu"

const MobileMenu = (props) => (
    <div className="mobile-menu">
        <Menu width={"80%"}
            customBurgerIcon={<img src="/static/icon/icon-menu-open.svg" alt="Open menu" />}
            customCrossIcon={<img src="/static/icon/icon-menu-close.svg" alt="Close menu" />}
            right>

            {props.links.map((element, index) => {
                return (
                    <div className="align-items-center" key={index}>
                        <a className="menu-item" href={element.link}>{element.name}</a>
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
            }

            @media only screen and (max-width: 768px) {
                .mobile-menu {
                    display: block;       
                }
            }
           
        `}</style>

    </div>
)

export default MobileMenu