import { useRouter } from "next/router"
import Image from "next/image"
import Meta from "../components/meta"
import { TGrid, TCol } from "../components/style/sc-grid"
import styled, { keyframes } from "styled-components"
import Link from "next/link"

const CONTENTS = {
    meta: {
        en: {
            metaTitle: "404 | Page not found",
            metaDescription: "Queried page does not exist",
        },
        "de-de": {
            metaTitle: "404 | Seite nicht gefunden",
            metaDescription: "Angefragte Seite ist nicht verfügbar",
        },
    },
    buttonLabel: { en: "Page to homepage", "de-de": "Zurück zur Startseite" },
}

const Error = (props) => {
    const { locale } = useRouter()
    const meta = CONTENTS.meta[locale]

    return (
        <div>
            <Meta data={meta} />

            <ErrorGrid halign="center">
                <ImageWrapper>
                    <Image src="/logo.png" layout="fill" objectFit="contain" alt="" />
                </ImageWrapper>
                <TCol size={1} talign="center">
                    <Link href="/" passHref>
                        <Button>{CONTENTS.buttonLabel[locale]}</Button>
                    </Link>
                </TCol>
            </ErrorGrid>
        </div>
    )
}

const ErrorGrid = styled(TGrid)`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-content: center;
    background-color: ${(props) => props.theme.color.cultured};
`

const ImageWrapper = styled.div`
    position: relative;
    width: min(80vw, 300px);
    height: 200px;
`

const Button = styled.a`
    display: inline-block;
    padding: ${(props) => props.theme.spacing.s} ${(props) => props.theme.spacing.m};
    background-color: ${(props) => props.theme.color.blackCoral};
    border: 0px;
    cursor: pointer;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.color.white};

    :hover {
        transition: all 0.1s linear;
        background-color: ${(props) => props.theme.color.bitterlemon};
    }
`

export default Error
