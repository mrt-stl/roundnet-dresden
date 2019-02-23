import Link from "next/link"
import { string } from "prop-types"

const NavLink = (props) => (
    <div className="nav-link">
        <Link href={props.href}>
            <a>{props.linkContent}</a>
        </Link>
        <style jsx>{`
            .nav-link a {
                color: var(--primary);
            }
        `}</style>
    </div>

)

NavLink.propTypes = {
    href: string,
    linkContent: string
}

export default NavLink
