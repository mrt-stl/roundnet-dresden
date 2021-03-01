import { linkResolver } from "../../utils/prismic-utils"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import { media } from "../style/tukan"
import TukanImage from "../elements/tukan-image"
import Typewriter from "../elements/typewriter"
import { useState, useEffect } from "react"

interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    const [footerLinks, setFooterLinks] = useState([{ href: "/", linkContent: "Loading..." }])
    const [footerSM, setFooterSM] = useState([{ href: "", img: { src: "Logo", alt: "social Media" } }])
    const [footerLoading, setFooterLoading] = useState(true)
    const [footerWatermark, setFooterWatermark] = useState("")

    useEffect(() => {
        const footerLinksArr = []
        const footerSMArr = []
        let footerWaterMarkString = ""
        if (props.data) {
            const footerData = props.data.data.footer_links_left
            footerData.map((element) => {
                const link = {
                    href: linkResolver(element.footer_link),
                    linkContent: element.footer_label,
                }
                footerLinksArr.push(link)
            })

            footerWaterMarkString = `Gemacht für ${props.data.data.footer_watermark}`

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
        setFooterWatermark(footerWaterMarkString)
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
                                <Typewriter strArr={[footerWatermark, "Gemacht mit Stadtteilliebe", "♡"]} />
                            </TCol>

                            {/* <STLBanner>Gemacht mit Stadtteilliebe</STLBanner> */}

                            <TCol size={1 / 3} collapse="md" talign="right">
                                <SMContainer>
                                    {footerSM.map((element, index) => {
                                        return (
                                            <a href={element.href} key={index}>
                                                <TukanImage src={element.img.src} alt={element.img.alt} height="auto" width="auto" />
                                            </a>
                                        )
                                    })}
                                </SMContainer>
                            </TCol>
                        </>
                    )}
                </FooterGrid>
            </FooterContainer>
        </footer>
    )
}

const FooterGrid = styled(TGrid)`
    max-width: 1024px;
    height: 100%;
    }
`

const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.projectColors.background};
    height: auto;

    a {
        text-transform: uppercase;
        color: ${(props) => props.theme.projectColors.accent};
    }

    ${media.maxWidth("md")`
        * {
            text-align: center !important;
        }

        margin: ${(props) => props.theme.spacing.m} ${(props) => props.theme.spacing.s};
    `};
`

const SMContainer = styled.div`
    a:not(:first-child) {
        margin-left: 24px;
    }

`

export default Footer
