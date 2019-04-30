import NavLink from "./nav-link"

const Nav = () => {
    const navArray = process.env.NAV ? JSON.parse(process.env.NAV) : []

    return (
        <div className="nav">
            <div className="grid-nav h-100">
                {navArray.map((element, index) => {
                    return (<div className="align-items-center" key={index}>
                        <NavLink
                            href={element.link}
                            linkContent={element.name} />
                    </div>)
                })}

            </div>

            <style jsx>{`
                .nav {
                    z-index: 100;
                    overflow: hidden;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    height: 48px;
                    background-color: var(--white);
                }

                .grid-nav {
                    display: flex;
                    flex-direction: row;
                    max-width: 1024px;
                    width: 100%;
                    margin-right: auto;
                    margin-left: auto;
                }

                .nav-link {
                    color: var(--primary);
                }
        `}</style>

        </div>
    )
}


export default Nav
