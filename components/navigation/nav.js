import NavLink from "./nav-link"

const Nav = () => (
    <div className="nav">
        <div className="grid h-100">
            <div className="col-1 align-items-center">
                <NavLink
                    href="#hero-image"
                    linkContent="Titelbild" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="#hero-text"
                    linkContent="Text" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="#card-deck"
                    linkContent="Karten" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="#preview"
                    linkContent="Preview" />
            </div>
            <div className="col-1 align-items-center">
                <NavLink
                    href="#action"
                    linkContent="Action" />
            </div>
        </div>

        <style jsx>{`
            .nav {
                z-index: 100;
                overflow: hidden;
                position: fixed;
                top: 0;
                width: 100%;
                height: 50px;
                background-color: var(--white);
            }

            .nav-link {
                color: var(--primary);
            }
            `}</style>

    </div>
)


export default Nav
