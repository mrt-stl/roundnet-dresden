import { string } from "prop-types"
import Link from "next/link"

const Action = (props) => {
    return (
        <div id="action" className="action-container">
            <div className="grid">
                <div className="col-4">
                    <p>{props.content}</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-4">
                    <Link href={props.link}>
                        <a>{props.linkContent}</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .action-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                    background-color: var(--secondary);
                    color: var(--white);
                }
                a {
                    color: var(--white);
                }
                p {
                    color: var(--white);
                    font-size: 1.75em;
                    letter-spacing: 0.2px;
                    line-height: 1.3;
                    margin-bottom: 0.5714285714em;
                    margin-top: 0.5714285714em;
                }
            `}</style>
        </div>
    )
}

Action.propTypes = {
    content: string,
    link: string,
    linkContent: string
}

export default Action