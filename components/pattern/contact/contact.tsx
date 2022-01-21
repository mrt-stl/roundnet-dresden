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
    privacyContent: string
}

export interface IContactState {
    name: string
    email: string
    content: string
    privacy: boolean
}

const CONTENTS = {
    placeholder: {
        en: "Content of your message*",
        "de-de": "Ihre persönliche Nachricht*",
    },
    missingPrivacy: {
        "de-de": "Bitte akzeptieren Sie die Datenschutzerklärung",
        er: "Please check checkbox to accept terms of privacy",
    },
    missingCaptcha: {
        "de-de": "Die hCaptcha Validierung hat sie nicht als Mensch erkannt",
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
    const { contactHeadline, contactContent, privacyContent } = props

    const { locale } = useRouter()
    const [status, setStatus] = useState("")
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

        captchaRef.current
            .execute({ async: true })
            .then(async () => {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                if (res.ok) {
                    setForm({
                        name: "",
                        email: "",
                        content: "",
                        privacy: false,
                    })
                    setStatus("success")
                } else {
                    setStatus("error")
                }
            })
            .catch((err) => {
                console.error(err)
                return setStatus("missingCaptcha")
            })
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
                            placeholder="Name*"
                            onChange={handleChange}
                            required
                        />
                    </TCol>
                    <TCol size={1 / 2}>
                        <Input
                            type="text"
                            name="email"
                            value={form.email}
                            placeholder="E-Mail*"
                            onChange={handleChange}
                            required
                        />
                    </TCol>
                    <TCol size={1}>
                        <TextArea
                            name="content"
                            value={form.content}
                            placeholder={CONTENTS.placeholder[locale]}
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
