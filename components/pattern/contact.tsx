import { Component } from "react"
import parse from "html-react-parser"
import TextareaAutosize from "react-autosize-textarea"
import { sendContactMail } from "../../networking/mail-api"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"
// this is a context provider to get theme colors outside a styled component declaration to pass it to package
import { withTheme } from 'styled-components'

export interface IContactProps {
  targetMail: string
  title?: string
  content?: string
  theme?: any
}

class Contact extends Component<IContactProps, {}> {
  public state = {
    formButtonDisabled: false,
    formButtonText: "Senden",
    name: "",
    mail: "",
    formContent: "",
    textareaIsFocused: false,
  }

  public render() {
    const { title, content, theme } = this.props
    const { formButtonText, formButtonDisabled, name, mail, formContent, textareaIsFocused } = this.state

    const projectColors = theme.projectColors
    const contactTitle = title ? title : ""
    const contactContent = content ? content : ""
    const btnClass = formButtonDisabled ? "disabled" : ""
    const borderBottom = textareaIsFocused ? `2px solid ${projectColors.green}` : `1px solid ${projectColors.blue}`

    return (
      <ContactContainer>
        {title || content ? (
          <TGrid>
            <TCol size={3 / 4}>
              {parse(contactTitle)}
              {parse(contactContent)}
            </TCol>
          </TGrid>
        ) : (
          <div />
        )}

        <TGrid className="grid">
          <TCol size={1 / 2}>
            <input type="text" placeholder="Name" value={name} name="fname" onChange={this.onNameChange} />
          </TCol>
          <TCol size={1 / 2}>
            <input type="email" placeholder="Mail-Adresse" value={mail} name="email" onChange={this.onMailChange} />
          </TCol>
        </TGrid>
        <TGrid>
          <TCol size={1}>
            <TextareaAutosize
              name="text"
              placeholder="Nachricht"
              value={formContent}
              onChange={this.onFormContentChange}
              onFocus={this.onTextareaFocus}
              onBlur={this.onTextareaBlur}
              style={{
                minHeight: "48px",
                width: "100%",
                border: "none",
                borderRadius: "0px",
                borderBottom,
                margin: "8px 0px",
                resize: "none",
                padding: "0px",
                paddingBottom: "14px",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            />
          </TCol>
          <TCol size={3 / 4}>
            <button className={btnClass} type="submit" onClick={this.submitContactForm} disabled={formButtonDisabled}>
              {formButtonText}
            </button>
          </TCol>
        </TGrid>
      </ContactContainer>
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
        formContent: "",
      })
    } else {
      this.setState({ formButtonText: "Fülle alle Felder aus!" })
    }
  }

  private onTextareaFocus = () => {
    this.setState({ textareaIsFocused: true })
  }

  private onTextareaBlur = () => {
    this.setState({ textareaIsFocused: false })
  }
}

const ContactContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.l};
  margin-bottom: ${(props) => props.theme.spacing.l};

  input[type="text"],
  input[type="email"] {
    height: 48px;
    width: 100%;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid ${props => props.theme.projectColors.blue};
    margin: 8px 0px;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0px;
    outline: none;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-bottom: 2px solid ${props => props.theme.projectColors.green};
    outline: none;
  }

  ::placeholder {
    color: #C8CBCE;
  }

  ::-ms-input-placeholder {
    color: #C8CBCE;
  }

  button {
    padding: 0px 24px;
    height: 48px;
    background-color: ${props => props.theme.projectColors.green};
    margin: 16px 0px;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    color: white;
  }

  .disabled {
    background-color: ${props => props.theme.projectColors.background};
    color: var(--font-color);
    cursor: auto;
    padding-left: 0px;
  }
`

export default withTheme(Contact)
