import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { linkResolver } from "../../utils/prismic-utils"
import {
    StyledBurger,
    MenuContainer,
    NavContainer,
    NavGrid,
    Branding,
    NavLink,
    LanguageSwitch,
    Headline,
} from "./styles"
interface INavProps {
    data: any
}

const Nav = (props: INavProps) => {
    const [open, setOpen] = useState(false)

    const router = useRouter()
    const { locale, query, asPath, pathname, events } = router

    useEffect(() => {
        const body = document.querySelector("body")
        if (open) {
            body.style.height = "100vh"
            body.style.overflow = "hidden"
        } else {
            body.style.height = null
            body.style.overflow = null
        }
    }, [open])

    useEffect(() => {
        events.on("routeChangeStart", () => setOpen(false))
    }, [events])

    const handleClick = () => {
        setOpen(!open)
    }

    const handleLanguageSwitch = async () => {
        return router.push({ pathname, query }, asPath, {
            locale: locale === "de-de" ? "en" : "de-de",
        })
    }

    if (props.data) {
        const { nav_language_switch, nav_links, nav_logo } = props.data
        return (
            <header style={{ height: "80px" }}>
                <NavContainer>
                    <NavGrid valign="center" halign="space-between">
                        <Link href="/" passHref>
                            <Branding>
                                <Image
                                    src={nav_logo.url}
                                    alt="Logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </Branding>
                        </Link>
                        <nav>
                            {nav_links.map((element, index) => {
                                return (
                                    <Link
                                        href={linkResolver(element.nav_link)}
                                        passHref
                                        key={index}
                                    >
                                        <NavLink target={element.nav_link.target ?? null}>{element.nav_label}</NavLink>
                                    </Link>
                                )
                            })}
                        </nav>

                        {nav_language_switch ? (
                            <LanguageSwitch onClick={handleLanguageSwitch}>
                                {locale === "de-de" ? "EN" : "DE"}
                            </LanguageSwitch>
                        ) : null}
                    </NavGrid>
                </NavContainer>

                {/* START MOBILE NAV */}
                <NavContainer mobile>
                    <Link href="/" passHref>
                        <Branding>
                            <Image
                                src={nav_logo.url}
                                alt="Logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </Branding>
                    </Link>
                    <StyledBurger open={open} onClick={handleClick}>
                        <span />
                        <span />
                    </StyledBurger>
                    <MenuContainer open={open}>
                        <Headline>MENU</Headline>
                        {nav_links.map((element, index) => {
                            return (
                                <Link href={linkResolver(element.nav_link)} passHref key={index}>
                                    <NavLink>{element.nav_label}</NavLink>
                                </Link>
                            )
                        })}
                        {nav_language_switch ? (
                            <LanguageSwitch onClick={handleLanguageSwitch}>
                                {locale === "de-de" ? "EN" : "DE"}
                            </LanguageSwitch>
                        ) : null}
                    </MenuContainer>
                </NavContainer>
                {/* END MOBILE NAV */}
            </header>
        )
    }
    return null
}

export default Nav
