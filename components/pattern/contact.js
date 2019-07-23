import { Component } from "react"
import { asHtml } from "../../utils/prismic-utils"
import Parser from "html-react-parser"
import TextareaAutosize from "react-autosize-textarea"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formButtonDisabled: false,
            formButtonText: "Senden"
        }
    }

    submitFunction = (event) => {
        event.preventDefault()

        const data = {
            name: event.target[0].value,
            email: event.target[1].value,
            content: event.target[2].value,
            targetmail: event.target[3].value
        }
    
        fetch("api/mailer",
            {
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            }).then(
                () => {
                    document.getElementById("formButton").style.backgroundColor = "var(--background)"
                    document.getElementById("formButton").style.color = "var(--font-color)"
                    document.getElementById("formButton").style.cursor = "auto"
                    document.getElementById("formButton").style.paddingLeft = "0px"
                    this.setState({
                        formButtonDisabled: true,
                        formButtonText: "Perfekt! Vielen Dank für deine Nachricht."
                    })
                }
            )
    }

    render() {
        const title = asHtml(this.props.data.contact_title)
        const content = asHtml(this.props.data.contact_content)
        const targetmail = this.props.data.contact_targetmail

        return (
            <div className="focus-container">
                <div className="grid">
                    <div className="col-8">
                        {Parser(title)}

                        {Parser(content)}
                    </div>
                </div>

                <div>
                    <form autoComplete="on" onSubmit={this.submitFunction}>
                        <div className="grid">
                            <div className="col-4">
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className="col-4">
                                <input type="email" name="email" placeholder="Mail-Adresse" required />
                            </div>
                            <div className="col-8">
                                <TextareaAutosize name="text" placeholder="Nachricht" required
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

                                <input type="hidden" value={targetmail} name="targetmail" />
                            </div>
                            <div className="col-8">
                                <input className="btn" id="formButton" type="submit" value={this.state.formButtonText} disabled={this.state.formButtonDisabled} />
                            </div>
                        </div>
                    </form>
                </div>

                <style jsx>{`
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
                .btn {   
                    padding: 0px 24px;
                    height: 48px;
                    background-color: var(--secondary);
                    margin: 16px 0px;
                    border: none;
                    border-radius: 0px;
                    cursor: pointer;
                    color: var(--white);
                }
            `}</style>
            </div >
        )
    }
}

export default Contact