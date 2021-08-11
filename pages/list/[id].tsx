import { useState, useEffect } from "react"
import Meta from "../../components/meta"
import Nav from "../../components/navigation/nav"
import Footer from "../../components/footer/footer"
import Stage from "../../components/pattern/stage"
import Richtext from "../../components/pattern/richtext"
import Accordion from "../../components/pattern/accordion"
import { getByUid } from "../../networking/prismic-api"
import CookieNotification from "../../components/pattern/cookie-notification"
import { asText, asHtml } from "../../utils/prismic-utils"
import { cacheControlHeader, createEtag } from "../../utils/cache-utils"
import Error from "../_error"
import { Document } from "prismic-javascript/types/documents"
import TukanModel from "../../models/tukan/tukan-model"
import { IMetaData } from "../../models/config/meta-data"
import { TGrid, TCol } from "../../components/style/sc-grid"
import styled from "styled-components"
import { media } from "../../components/style/tukan"
interface IIndexProps {
    data?: any
    meta?: IMetaData
    componentModels?: TukanModel[]
    footerData?: any
    error?: string
    navData: any
}

const FAQ = (props: IIndexProps) => {
    const { data, meta, footerData, error, navData } = props

    const [scrollState, setScrollState] = useState("")

    const domHeadingList = []
    useEffect(() => {
        headingList.map((item) => {
            const element = document.getElementById(item.toLowerCase())
            domHeadingList.push(element.offsetTop)
        })
    }, [])

    let listener = null

    useEffect(() => {
        if (window.innerWidth > 768) {
            listener = document.addEventListener("scroll", () => {
                const scrolled = document.scrollingElement.scrollTop + 250
                if (domHeadingList[0]) {
                    let i = 0
                    while (domHeadingList[i] < scrolled) {
                        i++
                    }
                    const newScrollState = i === 0 ? headingList[0] : headingList[i - 1]
                    setScrollState(newScrollState.toLowerCase())
                }
            })
            return () => {
                document.removeEventListener("scroll", listener)
            }
        }
    }, [scrollState])

    const stageImg = data.hero_img
    const content = asHtml(data.content)
    const accordionList = data.body

    const headingList = []
    accordionList.map((item) => {
        headingList.push(asText(item.primary.accordion_title))
    })

    if (error) {
        return <Error />
    }


    const showCookieNotification = process.env.cookie !== null

    return (
        <div className="tukan">
            <Meta data={meta} />

            <Nav data={navData} />

            <div className="tukan-container">
                <Stage headline="" content="" btnLabel="" btnLink="" backgroundImage={stageImg} />
                <Richtext content={content} />

                <TGrid>
                    <SideNavCol size={1 / 4} collapse="md">
                        <TGrid>
                            <TCol collapse="md">

                            {headingList.map((item, index) => {
                                const itemId = item.toLowerCase()
                                const relativeLink = `#${itemId}`
                                return (
                                    <StyledLink key={index} isActive={scrollState === itemId} href={relativeLink}>
                                        {item}
                                    </StyledLink>
                                )
                            })}
                            </TCol>
                        </TGrid>
                    </SideNavCol>
                    <TCol size={3 / 4} collapse="md">
                        {accordionList.map((item, index) => {
                            return <Accordion key={index} headline={item.primary.accordion_title} items={item.items} showMoreBtn={false} />
                        })}
                    </TCol>
                </TGrid>
            </div>

            <Footer data={footerData} />

            {showCookieNotification ? <CookieNotification link={process.env.cookie} /> : <div />}
        </div>
    )
}

const SideNavCol = styled(TCol)`
    height: fit-content;
    padding-top: 200px;
    position: sticky;
    top: 0;

    ${media.maxWidth("md")`
        padding-top: 0;
        position: static;
    `}
`

const StyledLink = styled.a<{ isActive: boolean }>`
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.m};
    font-weight: ${(props) => (props.isActive ? "bold" : null)};

    :last-child {
        margin-bottom: 0;
    }
`

export async function getServerSideProps({ query, res,locale, locales, previewData = { ref: "" } }) {
    const queryId = query.id ? query.id : "home"
    const docType = "faqs"
    const lang = locales.indexOf(locale) ? locale : "de-de"
    const ref = previewData.ref

    const prismicRes = await getByUid(docType, queryId, ref, lang)
    const doc = prismicRes.data ? prismicRes.data : null
    const navData = prismicRes.navigation ? prismicRes.navigation : null
    const footerData = prismicRes.footer ? prismicRes.footer : null
    
    if (prismicRes.error || !doc) {
        return {
            props: {
                error: "Page not found",
            },
        }
    }

    if (res) {
        const etag = createEtag(doc)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", cacheControlHeader())
    }

    const docId = doc?.id

    const meta = createMeta(doc)

    const data = doc.data

    return {
        props: {
            docId,
            meta,
            data,
            navData,
            footerData,
            preview: {
                activeRef: ref
            }
        },
    }
}

// Get meta data
const createMeta = (docs: Document): IMetaData => {
    const metaTitle = asText(docs.data.meta_title)
    const metaDescription = asText(docs.data.meta_description)
    const metaAuthor = asText(docs.data.meta_author)
    const metaOgImg = docs.data.meta_og_img ? docs.data.meta_og_img.url : null
    const metaBanner = asText(docs.data.meta_banner)

    return {
        metaTitle,
        metaDescription,
        metaAuthor,
        metaOgImg,
        metaBanner,
    }
}

export default FAQ
