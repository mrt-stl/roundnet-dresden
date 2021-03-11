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

            footerWaterMarkString = `${props.data.data.footer_watermark}`

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
                            <TCol size={1 / 5} collapse="md" talign="left">
                                <div><p>
                                            Stadtteilliebe<br />
                                            Schweriner Straße 63<br />
                                            01067 Dresden</p>
                                        </div>
                            </TCol>

                            <TCol size={1 / 5} collapse="md" talign="left">
                            {footerLinks.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={element.href}>{element.linkContent}</a>
                                        </div>
                                    )
                                })}
                            </TCol>

                            <TCol size={3 / 5} collapse="md" talign="right">
                                <SocialMediaContainer>
                                    {footerSM.map((element, index) => {
                                        return (
                                            <a href={element.href} key={index} target="_blank">
                                                <TukanImage src={element.img.src} alt={element.img.alt} height="auto" width="auto" />
                                            </a>
                                        )
                                    })}
                                </SocialMediaContainer>
                            </TCol>
                        </>
                    )}
                    <TCol size={ 1 }>
                        <Typewriter strArr={["Gemacht mit Stadtteilliebe", footerWatermark]} />
                    </TCol>
                </FooterGrid>
            </FooterContainer>
        </footer>
    )
}

const FooterContainer = styled.div`
    padding-bottom: ${(props) => props.theme.spacing.xl};
    padding-top: ${(props) => props.theme.spacing.xl};
    background-color: ${(props) => props.theme.projectColors.background};
    height: auto;
    font-size: 14px;

    a {
        color: #000000;
        transition: all 0.1s ease-in-out;
    }

    a:hover {
        opacity: 0.7;
        transition: all 0.1s ease-in-out;
    }

    ${media.maxWidth("md")`
        a {
            color: #000000;
        }

        * {
            text-align: left !important;
            color: #000000;
        }

        /* margin: ${(props) => props.theme.spacing.m} ${(props) => props.theme.spacing.s}; */
    `};
`

const FooterGrid = styled(TGrid)`
    height: 100%;

        ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const SocialMediaContainer = styled.div`
    a:not(:first-child) {
        margin-left: ${(props) => props.theme.spacing.s};
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
        a:not(:first-child) {
            margin-left: calc( 3 * ${(props) => props.theme.spacing.xxs});
            transition: all 0.1s ease-in-out;
        }

        a:hover {
            opacity: 1;
            transition: all 0.1s ease-in-out;
        }

        img {
            height: 28px;
            width: 28px;
        }
    `};
`

export default Footer