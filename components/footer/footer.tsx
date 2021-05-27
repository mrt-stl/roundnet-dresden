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
        const { footer_partners, footer_content_left, footer_content_right, footer_links, footer_links_bottom } = props.data
        return (
            <>
                <PartnerContainer>
                    <PartnerGrid valign="center">
                        {footer_partners.map((element, index) => {
                            return <PartnerCol key={index}>{parse(asHtml(element.content))}</PartnerCol>
                        })}
                    </PartnerGrid>
                </PartnerContainer>

                <footer>
                    <FooterContainer>
                        <FooterGrid valign="top" halign="center">
                            <TCol size={1 / 2} collapse="md" talign="left">
                                {parse(asHtml(footer_content_left))}
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
                                {parse(asHtml(footer_content_right))}
                            </TCol>

                            <LinkListBottom size={1}>
                                {footer_links_bottom.map((element, index) => {
                                    return (
                                        <a href={linkResolver(element.link)} key={index}>
                                            {element.label}
                                        </a>
                                    )
                                })}
                            </LinkListBottom>
                        </FooterGrid>
                    </FooterContainer>
                </footer>
            </>
        )
    }
    return null
}

const PartnerContainer = styled.div`
    background-color: ${(props) => props.theme.projectColors.grey30};
    margin-top: ${(props) => props.theme.spacing.xxl};
    padding-top: ${(props) => props.theme.spacing.l};
    padding-bottom: ${(props) => props.theme.spacing.l};
    justify-content: space-between;

    img {
        filter: grayscale(100%);
    }
`

const PartnerGrid = styled(TGrid)`
    justify-content: space-between;
`

const PartnerCol = styled(TCol)`
`

const FooterContainer = styled.div`
    padding-top: ${(props) => props.theme.spacing.xl};
    padding-bottom: ${(props) => props.theme.spacing.xl};
    background-color: ${(props) => props.theme.projectColors.darkGray};
    height: auto;

    font-size: ${(props) => props.theme.fontSize.xs};
    color: ${(props) => props.theme.projectColors.white};
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
        max-height: 120px;
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

    ${media.maxWidth("md")`
        margin-left: 40px;
        margin-right: 40px;
    `}
`

const LinkList = styled(TCol)`
    a {
        display: block;
        margin-bottom: ${(props) => props.theme.spacing.m};
    }
`

const LinkListBottom = styled(TCol)`
    a {
        color: ${(props) => props.theme.projectColors.grey40};
        margin-right: ${(props) => props.theme.spacing.m};
    }
`

export default Footer
