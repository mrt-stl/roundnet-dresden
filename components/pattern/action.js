import { string } from "prop-types"
import Link from "next/link"

const Action = (props) => {
    const backgroundColor = props.color !== undefined ? props.color : "var(--secondary)"

    return (
        <div className="action-container" style={{ backgroundColor: backgroundColor}}>
            <div className="grid">
                <div className="col-4">
                    <p>{props.content}</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-4">
                    <Link href={props.link !== undefined ? props.link : ""}>
                        <a>{props.linkContent}</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .action-container {
                    padding-top: 5em;
                    padding-bottom: 5em;
                    color: var(--white);
                }
                a {
                    color: var(--white);
                }
                p {
                    color: var(--white);
                    font-size: 1.5em;
                    letter-spacing: 0.2px;
                    line-height: 1.3;
                    margin-bottom: 0.6666666667em;
                    margin-top: 0.6666666667em;
                }
            `}</style>
        </div>
    )
}

Action.propTypes = {
    content: string,
    link: string,
    linkContent: string,
    color: string
}

export default Action