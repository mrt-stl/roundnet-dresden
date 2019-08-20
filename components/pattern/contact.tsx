import { Component } from "react"
import parse from "html-react-parser"
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../../networking/mail-api"

interface IContactProps {
    targetMail: string
    title?: string
    content?: string
}

class Contact extends Component<IContactProps, {}> {

    public state = {
        formButtonDisabled: false,
        formButtonText: "Senden",
        name: "",
        mail: "",
        formContent: ""
    }

    public render() {
        const { title, content } = this.props
        const { formButtonText, formButtonDisabled, name, mail, formContent } = this.state

        const contactTitle = title ? title : ""
        const contactContent = content ? content : ""
        const btnClass = formButtonDisabled ? "disabled" : ""

        return (
            <div className="contact-container">
                {title || content ?
                    <div className="grid">
                        <div className="col-8">
                            {parse(contactTitle)}
                            {parse(contactContent)}
                        </div>
                    </div> :
                    <div />
                }

                <div className="grid">
                    <div className="col-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={this.onNameChange} />
                    </div>
                    <div className="col-4">
                        <input
                            type="email"
                            placeholder="Mail-Adresse"
                            value={mail}
                            onChange={this.onMailChange} />
                    </div>
                </div>
                <div className="grid">
                    <div className="col-8">
                        <TextareaAutosize
                            name="text"
                            placeholder="Nachricht"
                            value={formContent}
                            onChange={this.onFormContentChange}
                            style={{
                                minHeight: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "0px",
                                borderBottom: "1px solid var(--primary)",
                                margin: "8px 0px",
                                resize: "none",
                                padding: "0px",
                                paddingBottom: "14px",
                                backgroundColor: "var(--background)",
                                color: "var(--font-color)",
                                WebkitAppearance: "none",
                                MozAppearance: "none"
                            }} />

                    </div>
                    <div className="col-8">
                        <button
                            className={btnClass}
                            type="submit"
                            onClick={this.submitContactForm}
                            disabled={formButtonDisabled}>{formButtonText}</button>
                    </div>
                </div>

                <style jsx>{`
                    .contact-container {
                        padding-top: var(--standard-spacing);
                        padding-bottom: var(--standard-spacing);
                    }

                    input[type=text], input[type=email] {
                        height: 48px;
                        width: 100%;
                        border: none;
                        border-radius: 0px;
                        border-bottom: 1px solid var(--primary);
                        margin: 8px 0px;
                        background-color: var(--background);
                        color: var(--font-color);
                        box-shadow: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        padding: 0px;
                    }

                    :focus {
                        outline: none;
                    }

                    ::placeholder {
                        color: var(--all-gray-30);
                    }

                    ::-ms-input-placeholder {
                        color: var(--all-gray-30);
                    }

                    button {
                        padding: 0px 24px;
                        height: 48px;
                        background-color: var(--accent);
                        margin: 16px 0px;
                        border: none;
                        border-radius: 0px;
                        cursor: pointer;
                        color: var(--white);
                    }

                    .disabled {
                        background-color: var(--background);
                        color: var(--font-color);
                        cursor: auto;
                        padding-left: 0px;
                    }
                `}</style>
            </div>
        )
    }

    private onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    private onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    private onFormContentChange = (event) => {
        this.setState({ formContent: event.target.value })
    }

    private submitContactForm = async (event) => {
        event.preventDefault()

        const recipientMail = this.props.targetMail
        const { name, mail, formContent } = this.state

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if (res.status < 300) {
            this.setState({
                formButtonDisabled: true,
                formButtonText: "Perfekt! Vielen Dank für deine Nachricht.",
                name: "",
                mail: "",
                formContent: ""
            })

        } else {
            this.setState({ formButtonText: "Fülle alle Felder aus!" })
        }
    }
}

export default Contact