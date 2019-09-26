import parse from "html-react-parser"

export interface IFooterProps {
    rows: string[]
}

const Footer = (props: IFooterProps) => {
    return (
        <div className="footer-container">
            <div className="grid">
                {props.rows.map((row, index) => {
                    return (
                        <div className="col" key={index}>
                            {parse(row)}
                        </div>
                    )
                })}
            </div>

            <style jsx>{`
                .footer-container {
                    padding-top: var(--large-spacing);
                    padding-bottom: var(--large-spacing);
                }
            `}</style>
        </div>
    )
}

export default Footer