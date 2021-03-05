import { linkResolver } from "../../utils/prismic-utils"
import { media } from "../style/tukan"
import { TGrid, TCol } from "../style/sc-grid"
import { useState, useEffect } from "react"
import styled from "styled-components"
import TukanImage from "../elements/tukan-image"
import Typewriter from "../elements/typewriter"

interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    const [footerLinks, setFooterLinks] = useState([{ href: "/", linkContent: "Loading..." }])
    const [footerSM, setFooterSM] = useState([{ href: "", img: { src: "Logo", alt: "social Media" } }])
    const [footerLoading, setFooterLoading] = useState(true)
    // const [footerWatermark, setFooterWatermark] = useState("")

    useEffect(() => {
        const footerLinksArr = []
        const footerSMArr = []
        // let footerWaterMarkString = ""
        if (props.data) {
            const footerData = props.data.data.footer_links_left
            footerData.map((element) => {
                const link = {
                    href: linkResolver(element.footer_link),
                    linkContent: element.footer_label,
                }
                footerLinksArr.push(link)
            })

            // footerWaterMarkString = props.data.data.footer_watermark

            const footerSMData = props.data.data.footer_links_right
            footerSMData.map((element) => {
                const link = {
                    href: linkResolver(element.footer_link),
                    img: {
                        src: element.footer_image.url,
                        alt: element.footer_image.alt,
                    },
                }
                footerSMArr.push(link)
            })
        }
        setFooterLinks(footerLinksArr)
        setFooterSM(footerSMArr)
        // setFooterWatermark(footerWaterMarkString)
        setFooterLoading(false)
    }, [])

    return (
        <footer>
            <FooterContainer>
                <FooterGrid valign="center" halign="center">
                    {footerLoading ? (
                        ""
                    ) : (
                        <>
                            <TCol size={1 / 3} collapse="md" talign="left">
                                {footerLinks.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={element.href}>{element.linkContent}</a>
                                        </div>
                                    )
                                })}
                            </TCol>

                            <TCol size={1 / 3} collapse="md" talign="center">
                                <Typewriter strArr={["Gemacht mit Stadtteilliebe", "STL x Der Jugendchor"]} />
                            </TCol>

                            <TCol size={1 / 3} collapse="md" talign="right">
                                <SocialMediaContainer>
                                    {footerSM.map((element, index) => {
                                        return (
                                            <a href={element.href} key={index}>
                                                <TukanImage src={element.img.src} alt={element.img.alt} height="auto" width="auto" />
                                            </a>
                                        )
                                    })}
                                </SocialMediaContainer>
                            </TCol>
                        </>
                    )}
                </FooterGrid>
            </FooterContainer>
        </footer>
    )
}

const FooterGrid = styled(TGrid)`
    height: 100%;
    padding-bottom: ${(props) => props.theme.spacing.m};
    padding-top: ${(props) => props.theme.spacing.m};
`

const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.projectColors.background};
    height: auto;
    font-size: 14px;

    a {
        text-transform: uppercase;
        color: ${(props) => props.theme.projectColors.accent};
        transition: all 0.1s ease-in-out;
    }

    a:hover {
        opacity: 0.7;
        transition: all 0.1s ease-in-out;
    }

    ${media.maxWidth("md")`
        * {
            text-align: center !important;
        }

        margin: ${(props) => props.theme.spacing.m} ${(props) => props.theme.spacing.s};
    `};
`

const SocialMediaContainer = styled.div`
    a:not(:first-child) {
        margin-left: ${(props) => props.theme.spacing.xs};
        transition: all 0.1s ease-in-out;
    }

    a:hover {
        opacity: 0.7;
        transition: all 0.1s ease-in-out;
    }

    img {
        height: 32px;
        width: 32px;
    }

    ${media.maxWidth("md")`
        img {
            height: 36px;
            width: 36px;
        }
    `};
`

export default Footer
