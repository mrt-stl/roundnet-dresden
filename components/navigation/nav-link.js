import Link from "next/link"


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


export default NavLink
