export interface IFooterProps {
    content: string
    backgroundColor?: string
}

const Footer = (props: IFooterProps) => {
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "white"

    return (
        <div className="footer-container" style={{ backgroundColor }}>
            <div className="grid">
                <div className="col-2">
                    <p className="content">Stadtteilliebe</p>
                    <p className="content">Leistungen</p>
                    <p className="content">Projekte</p>
                    <p className="content">Kontakt</p>
                </div>
                <div className="col-2">
                    <p className="content">Instagram</p>
                    <p className="content">Behance</p>
                    <p className="content">Twitter</p>
                </div>
                <div className="col-2">
                    <p className="content">Datenschutz</p>
                    <p className="content">Impressum</p>
                </div>
            </div>

            <style jsx>{`
                .footer-container {
                    padding-top: var(--large-spacing);
                    padding-bottom: var(--large-spacing);
                    color: var(--white);
                }
                .footer-container img {
                    height: 60px;
                }
                .content {
                    color: var(--primary);
                    font-size: 0.875em;
                    letter-spacing: 0.2px;
                    line-height: 1.3;
                    margin-bottom: 0.6666666667em;
                    margin-top: 0.6666666667em;
                }
                .content:hover{
                    color: var(--accent);
                }
                .link-content {
                    color: var(--white);
                }
            `}</style>
        </div>
    )
}

export default Footer