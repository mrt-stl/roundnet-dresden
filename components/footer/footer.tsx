import { linkResolver } from "../../utils/prismic-utils"
import styled from "styled-components"
import { TGrid, TCol } from "../style/sc-grid"
import TukanImage from "../elements/tukan-image"
import { useState, useEffect, useRef } from "react"

interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    const [footerLinks, setFooterLinks] = useState([{ href: "/", linkContent: "Loading..." }])
    const [footerSM, setFooterSM] = useState([{ href: "", img: { src: "Logo", alt: "social Media" } }])
    const [footerLoading, setFooterLoading] = useState(true)
    // const [footerWatermark, setFooterWatermark] = useState("")
    const typewriter = useRef()

    useEffect(() => {
        window.addEventListener("load", () => {
            Typewriting()
        })

        return window.removeEventListener("load", () => {
            Typewriting()
        })
    }, [])

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

    const Typewriting = () => {
        // const watermark = footerWatermark ? footerWatermark : " Euch"
        new TxtType(typewriter.current, ["Gemacht mit Liebe", "♥︎", "Gemacht mit Stadtteilliebe", "♥︎"], "2000")
    }

    const TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate
        this.el = el
        this.loopNum = 0
        this.period = parseInt(period, 10) || 2000
        this.txt = ""
        this.tick()
        this.isDeleting = false
    }

    TxtType.prototype.tick = function() {
        const i = this.loopNum % this.toRotate.length
        const fullTxt = this.toRotate[i]

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`

        const that = this
        let delta = 200 - Math.random() * 100

        if (this.isDeleting) {
            delta /= 2
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false
            this.loopNum++
            delta = 500
        }

        setTimeout(() => {
            that.tick()
        }, delta)
    }

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
                                <STLBanner href="https://www.stadtteilliebe.de" ref={typewriter}>
                                    <span className="wrap" />
                                </STLBanner>
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
`

const FooterContainer = styled.div`
    background-color: ${(props) => props.theme.projectColors.background};
    height: auto;

    a {
        text-transform: uppercase;
        color: ${(props) => props.theme.projectColors.accent};
    }
`

const SMContainer = styled.div`
    a {
        margin-left: 24px;
    }
`

const STLBanner = styled.a`
    color: ${(props) => props.theme.projectColors.accent};
    margin: 0 auto;
    padding-right: 0.1em;
    border-right: 0.08em solid ${(props) => props.theme.projectColors.accent};
`

export default Footer
