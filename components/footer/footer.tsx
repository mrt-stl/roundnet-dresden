import { linkResolver } from "../../utils/prismic-utils"
import { media } from "../style/tukan"
import parse from "html-react-parser"
import { asHtml } from "../../utils/prismic-utils"
import { TGrid, TCol } from "../style/sc-grid"
import styled from "styled-components"
import TukanImage from "../elements/tukan-image"
import Typewriter from "../elements/typewriter"

interface IFooterProps {
    data: any
}

const Footer = (props: IFooterProps) => {
    if (props.data) {
        const { footer_content, footer_links, footer_links_social, footer_watermark } = props.data
        return (
            <footer>
                <FooterContainer>
                    <FooterGrid valign="top" halign="center">
                        <>
                            <TCol size={1 / 4} collapse="md" talign="left">
                                {parse(asHtml(footer_content))}
                            </TCol>

                            <TCol size={1 / 4} collapse="md" talign="left">
                                {footer_links.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={linkResolver(element.footer_link)}>
                                                <p>{element.footer_label}</p>
                                            </a>
                                        </div>
                                    )
                                })}
                            </TCol>

                            <TCol size={2 / 4} collapse="md" talign="right" salign="center">
                                <SocialMediaContainer>
                                    {footer_links_social.map((element, index) => {
                                        return (
                                            <a href={linkResolver(element.social_link)} key={index} target="_blank">
                                                <TukanImage
                                                    src={element.footer_image.url}
                                                    alt={element.footer_image.alt}
                                                    height="auto"
                                                    width="auto"
                                                />
                                            </a>
                                        )
                                    })}
                                </SocialMediaContainer>
                            </TCol>
                            <TCol size={1}>
                                <Typewriter strArr={["Gemacht mit Stadtteilliebe", `${footer_watermark}`]} />
                            </TCol>
                        </>
                    </FooterGrid>
                </FooterContainer>
            </footer>
        )
    }
    return null
}

const FooterContainer = styled.div`
    padding-bottom: ${(props) => props.theme.spacing.xl};
    padding-top: ${(props) => props.theme.spacing.xl};
    background-color: ${(props) => props.theme.projectColors.secondary};
    height: auto;
    font-size: 14px;
    color: ${(props) => props.theme.projectColors.onSecondary};

    a {
        color: ${(props) => props.theme.projectColors.onSecondary};
        transition: all 0.1s ease-in-out;
    }

    a:hover {
        opacity: 0.7;
        transition: all 0.1s ease-in-out;
    }

    ${media.maxWidth("md")`
        a {
            color: ${(props) => props.theme.projectColors.onSecondary};
        }

        * {
            text-align: left !important;
            color: ${(props) => props.theme.projectColors.onSecondary};
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
    align-self: center;

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
