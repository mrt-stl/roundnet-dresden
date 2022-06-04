import { linkResolver } from "../../utils/prismic-utils"
import Image from "next/image"
import Link from "next/link"
import { TGrid, TCol } from "../style/sc-grid"
import { FooterContainer, Headline, Content, LegalsCol } from "./styles"
interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    if (props.data) {
        const { social_headline, social_links, copyright, footer_links } = props.data
        return (
            <>
                <FooterContainer>
                    <TGrid style={{ height: "100%" }}>
                        {/* SOCIAL MEDIA */}
                        {social_headline || social_links.length > 0 ? (
                            <TCol size={1}>
                                <Headline accent={true}>{social_headline}</Headline>
                                {social_links
                                    ? social_links.map((link, index) => (
                                          <Content key={index} social={true}>
                                              <Link href={linkResolver(link.social_link)}>
                                                  <a target={link.social_link.target}>
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
                                      ))
                                    : null}
                            </TCol>
                        ) : null}

                        {/* COPYRIGHT & LINKS */}
                        <LegalsCol size={1}>
                            <Content>
                                <p style={{ whiteSpace: "nowrap" }}>{copyright}</p>
                            </Content>

                            <Content>
                                {footer_links.map((link, index) => (
                                    <Link href={linkResolver(link.footer_link)} key={index}>
                                        {link.footer_link_label}
                                    </Link>
                                ))}
                            </Content>
                        </LegalsCol>
                    </TGrid>
                </FooterContainer>
            </>
        )
    }
    return null
}

export default Footer
