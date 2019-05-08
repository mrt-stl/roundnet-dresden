import { slide as Menu } from "react-burger-menu"
import Link from "next/link"

const MobileMenu = (props) => (
    <div className="mobile-menu">
        <Menu width={"80%"}
            customBurgerIcon={<img src="/static/icon/icon-menu-open.svg" />}
            customCrossIcon={<img src="/static/icon/icon-menu-close.svg" />}
            right>

            {props.links.map((element, index) => {
                return (<div className="align-items-center" key={index}>
                    <Link href={element.link}>
                        <a className="menu-item">{element.name}</a>
                    </Link>
                </div>)
            })}

        </Menu>

        <style jsx>{`
            .mobile-menu {
                display: none;       
            }
            .menu-item {
                padding-top: 1em;
                color: var(--white);
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