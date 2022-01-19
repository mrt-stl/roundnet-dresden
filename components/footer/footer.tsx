import { linkResolver } from "../../utils/prismic-utils"
import { media } from "../style/tukan"
import parse from "html-react-parser"
import { asHtml } from "../../utils/prismic-utils"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"
interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    if (props.data) {
        const { footer_content_col_1, footer_content_col_2, footer_links, social_links } =
            props.data
        return (
            <>
                <footer>
                    <FooterContainer>
                        <FooterGrid valign="top" halign="center">
                            <TCol size={1 / 2} collapse="md" talign="left">
                                {parse(asHtml(footer_content_col_1))}
                            </TCol>

                            <LinkList size={1 / 4} collapse="md" talign="left">
                                {footer_links.map((element, index) => {
                                    return (
                                        <a href={linkResolver(element.footer_link)} key={index}>
                                            {element.footer_label}
                                        </a>
                                    )
                                })}
                            </LinkList>

                            <TCol size={1 / 4} collapse="md" talign="left">
                                {parse(asHtml(footer_content_col_2))}
                            </TCol>

                            <LinkListBottom size={1}>
                                {social_links
                                    ? social_links.map((element, index) => {
                                          return (
                                              <a href={linkResolver(element.link)} key={index}>
                                                  {element.label}
                                              </a>
                                          )
                                      })
                                    : null}
                            </LinkListBottom>
                        </FooterGrid>
                    </FooterContainer>
                </footer>
            </>
        )
    }
    return null
}

const FooterContainer = styled.div`
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xl};
    background-color: ${(props) => props.theme.color.blackCoral};
    height: auto;

    font-size: ${(props) => props.theme.fontSize.s};
    color: ${(props) => props.theme.color.white};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 1.5;

    a {
        transition: 0.15s ease-in-out;
        color: white;
    }

    a:hover {
        opacity: 0.6;
        transition: 0.15s ease-in-out;
    }

    img {
        height: 40px;
        width: auto;
        margin-bottom: ${(props) => props.theme.spacing.m};
    }

    ${media.maxWidth("md")`

        * {
            text-align: left !important;
            color: white;
        }

        /* margin: ${(props) => props.theme.spacing.m} ${(props) => props.theme.spacing.s}; */
    `};
`

const FooterGrid = styled(TGrid)`
    height: 100%;
`

const LinkList = styled(TCol)`
    a {
        display: block;
        margin-bottom: ${(props) => props.theme.spacing.m};
    }
`

const LinkListBottom = styled(TCol)`
    a {
        color: ${(props) => props.theme.color.morningBlue};
        margin-right: ${(props) => props.theme.spacing.m};
    }
`

export default Footer
