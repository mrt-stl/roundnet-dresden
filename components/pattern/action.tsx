
export interface IActionProps {
    backgroundColor: string
    content: string
    link?: string
    linkContent?: string
    linkIsBlank?: boolean
}

const Action = (props: IActionProps) => {
    const backgroundColor = props.backgroundColor
    const content = props.content
    const link = props.link
    const linkContent = props.linkContent
    const linkIsBlank = props.linkIsBlank

    return (
        <div className="action-container" style={{ backgroundColor }}>
            <div className="grid">
                <div className="col-4">
                    <p className="content">{content}</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-4">
                    {link ?
                        <div>
                            {linkIsBlank ?
                                <a href={link} className="link-content" target="blank" rel="noopener">{linkContent}</a> :
                                <a href={link} className="link-content">{linkContent}</a>
                            }
                        </div> :
                        <p className="link-content">{linkContent}</p>
                    }
                </div>
            </div>

            <style jsx>{`
                .action-container {
                    padding-top: var(--standard-spacing);
                    padding-bottom: var(--standard-spacing);
                    color: var(--white);
                }
                .content {
                    color: var(--white);
                    font-size: 1.5em;
                    letter-spacing: 0.2px;
                    line-height: 1.3;
                    margin-bottom: 0.6666666667em;
                    margin-top: 0.6666666667em;
                }
                .link-content {
                    color: var(--white);
                }
            `}</style>
        </div>
    )
}

export default Action