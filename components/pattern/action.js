import { object } from "prop-types"
import Link from "next/link"
import { asText, linkResolver } from "../../utils/prismic-utils"

const Action = ({ data }) => {
    const backgroundColor = data.action_color ? data.action_color : "var(--secondary)"
    const content = asText(data.action_content)
    const link = linkResolver(data.action_link)
    const linkContent = asText(data.action_link_text)

    return (
        <div className="action-container" style={{ backgroundColor: backgroundColor }}>
            <div className="grid">
                <div className="col-4">
                    <p>{content}</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-4">
                    <Link href={link? link : ""}>
                        <a>{linkContent}</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .action-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
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
    data: object
}

export default Action