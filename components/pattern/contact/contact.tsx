import { useState } from "react"
import { useRouter } from "next/router"
import parse from "html-react-parser"
import { ContactContainer, Headline, Input, TextArea, Checkbox, SubmitButton } from "./styles"
import { TGrid, TCol } from "../../style/sc-grid"

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

const Contact = (props: IContactProps) => {
    const { contactHeadline, contactContent, privacyContent } = props

    const [form, setForm] = useState<IContactState>({
        name: "",
        email: "",
        content: "",
        privacy: false,
    })
    const { locale } = useRouter()

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = name === "privacy" ? target.checked : target.value

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
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
                            placeholder="Name"
                            onChange={handleChange}
                        />
                    </TCol>
                    <TCol size={1 / 2}>
                        <Input
                            type="text"
                            name="email"
                            value={form.email}
                            placeholder="E-Mail"
                            onChange={handleChange}
                        />
                    </TCol>
                    <TCol size={1}>
                        <TextArea
                            name="content"
                            value={form.content}
                            placeholder="Ihre persönliche Nachricht"
                            onChange={handleChange}
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
                    <TCol>
                        <SubmitButton type="submit">Senden</SubmitButton>
                    </TCol>
                </form>
            </TGrid>
        </ContactContainer>
    )
}

export default Contact
