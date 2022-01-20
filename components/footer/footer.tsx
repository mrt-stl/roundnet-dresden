import { linkResolver } from "../../utils/prismic-utils"
import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser"
import { asHtml } from "../../utils/prismic-utils"
import { TGrid, TCol } from "../style/sc-grid"
import { FooterContainer, Headline, News, Content, FooterMainContentCol } from "./styles"
interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    if (props.data) {
        const {
            contact_headline,
            contact_content,
            social_headline,
            social_links,
            copyright,
            footer_links,
            news_headline,
            news,
        } = props.data
        return (
            <>
                <FooterContainer>
                    <TGrid style={{ height: "100%" }}>
                        {/* START NEWS SECTION */}
                        <TCol size={1 / 2}>
                            <Headline>{news_headline}</Headline>
                            {news.map((article, index) => (
                                <News key={index}>{parse(asHtml(article.news_content))}</News>
                            ))}
                        </TCol>
                        {/* END NEW SECTION */}

                        {/* START FOOTER MAIN CONTENT */}
                        <FooterMainContentCol
                            size={1 / 2}
                        >
                            {/* CONTACT */}
                            <TCol size={1 / 2}>
                                <Headline accent={true}>{contact_headline}</Headline>
                                <Content>{parse(asHtml(contact_content))}</Content>
                            </TCol>

                            {/* SOCIAL MEDIA */}
                            <TCol size={1 / 2}>
                                <Headline accent={true}>{social_headline}</Headline>
                                {social_links.map((link, index) => (
                                    <Content key={index}>
                                        <Link href={linkResolver(link.social_link)}>
                                            <a>
                                                <Image
                                                    src={link.social_icon.url}
                                                    width="28px"
                                                    height="28px"
                                                    alt="social media icon"
                                                    className="icon"
                                                />
                                                <span>{link.social_link_label}</span>
                                            </a>
                                        </Link>
                                    </Content>
                                ))}
                            </TCol>

                            {/* COPYRIGHT & LINKS */}
                            <TCol
                                size={1}
                                style={{ padding: 0, display: "flex", flexWrap: "wrap" }}
                            >
                                <TCol size={1 / 2} style={{ paddingRight: 0 }}>
                                    <Content>
                                        <p>{copyright}</p>
                                    </Content>
                                </TCol>

                                <TCol size={1 / 2}>
                                    <Content>
                                        {footer_links.map((link, index) => (
                                            <Link href={linkResolver(link.footer_link)} key={index}>
                                                {link.footer_link_label}
                                            </Link>
                                        ))}
                                    </Content>
                                </TCol>
                            </TCol>
                        </FooterMainContentCol>
                    </TGrid>
                </FooterContainer>
            </>
        )
    }
    return null
}

export default Footer
