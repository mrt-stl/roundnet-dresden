import parse from "html-react-parser"

export interface IFooterProps {
    rows: string[]
    backgroundColor?: string
}

const Footer = (props: IFooterProps) => {
    const backgroundColor = props.backgroundColor ? props.backgroundColor : "var(--background)"

    return (
        <footer className="footer-container" style={{ backgroundColor }}>
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
        </footer>
    )
}

export default Footer