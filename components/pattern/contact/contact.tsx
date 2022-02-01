import { useState, useRef } from "react"
import { useRouter } from "next/router"
import parse from "html-react-parser"
import {
    ContactContainer,
    Headline,
    Input,
    TextArea,
    Checkbox,
    SubmitButton,
    Message,
} from "./styles"
import { TGrid, TCol } from "../../style/sc-grid"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export interface IContactProps {
    contactHeadline: string
    contactContent: string
    contactPlaceholderName: string
    contactPlaceholderEmail: string
    contactPlaceholderContent: string
    privacyContent: string
}

export interface IContactState {
    name: string
    email: string
    content: string
    privacy: boolean
}

const CONTENTS = {
    missingPrivacy: {
        "de-de": "Bitte akzeptieren Sie die Datenschutzerklärung",
        er: "Please check checkbox to accept terms of privacy",
    },
    missingCaptcha: {
        "de-de": "Die hCaptcha Validierung hat Sie nicht als Mensch erkannt",
        er: "The hCaptcha validation didn't recognize you as a human",
    },
    generell: {
        "de-de": "Etwas ist schiefgegangen, bitte versuchen Sie es später erneut",
        en: "Something went wrong, please try again later",
    },
    success: {
        "de-de": "Ihre Nachricht wurde erfolgreich versendet",
        en: "Message sent successfully",
    },
}

const Contact = (props: IContactProps) => {
    const {
        contactHeadline,
        contactContent,
        privacyContent,
        contactPlaceholderName,
        contactPlaceholderEmail,
        contactPlaceholderContent,
    } = props

    const { locale } = useRouter()
    const [status, setStatus] = useState("")
    const [token, setToken] = useState("")
    const [form, setForm] = useState<IContactState>({
        name: "",
        email: "",
        content: "",
        privacy: false,
    })
    const captchaRef = useRef(null)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = name === "privacy" ? target.checked : target.value

        if (status) {
            setStatus("")
        }

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.privacy) {
            return setStatus("missingPrivacy")
        }

        try {
            // user gets validated with captcha
            const captchaRes = await captchaRef.current.execute({ async: true })

            if (!captchaRes.response) {
                throw new Error("Failed to validate captcha")
            }

            // response token gets validate serverside
            const verifyRes = await fetch("/api/verify", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(captchaRes.response),
            })

            if (!verifyRes.ok) {
                console.log(token)
                throw new Error("Failed to validate captcha on server")
            }

            // if captcha token is valid, send mail
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })

            // reset form state and inform user about success
            if (res.ok) {
                setForm({
                    name: "",
                    email: "",
                    content: "",
                    privacy: false,
                })
                setStatus("success")
            } else {
                setStatus("generell")
            }
        } catch (err) {
            console.error(err)
            return setStatus("missingCaptcha")
        }
    }

    return (
        <ContactContainer>
            <TGrid>
                <TCol size={1}>
                    <Headline>{contactHeadline}</Headline>
                    <div>{parse(contactContent)}</div>
                </TCol>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
                >
                    <TCol size={1 / 2}>
                        <Input
                            type="text"
                            name="name"
                            value={form.name}
                            placeholder={contactPlaceholderName}
                            onChange={handleChange}
                            required
                        />
                    </TCol>
                    <TCol size={1 / 2}>
                        <Input
                            type="text"
                            name="email"
                            value={form.email}
                            placeholder={contactPlaceholderEmail}
                            onChange={handleChange}
                            required
                        />
                    </TCol>
                    <TCol size={1}>
                        <TextArea
                            name="content"
                            value={form.content}
                            placeholder={contactPlaceholderContent}
                            onChange={handleChange}
                            required
                        />
                    </TCol>
                    <TCol size={1} style={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                            type="checkbox"
                            checked={form.privacy}
                            name="privacy"
                            onChange={handleChange}
                        />
                        {parse(privacyContent)}
                    </TCol>
                    <TCol size={1}>
                        <HCaptcha
                            sitekey="b686418b-20fa-43a2-9426-311bb8f19c53"
                            ref={captchaRef}
                            size="invisible"
                            onVerify={setToken}
                        />
                    </TCol>
                    <TCol>
                        <SubmitButton type="submit">Senden</SubmitButton>
                        {status ? (
                            <Message status={status}>{CONTENTS[status][locale]}</Message>
                        ) : null}
                    </TCol>
                </form>
            </TGrid>
        </ContactContainer>
    )
}

export default Contact
