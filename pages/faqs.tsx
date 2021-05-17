import Meta from "../components/meta"
import Nav from "../components/navigation/nav"
import Footer from "../components/footer/footer"
import Stage from "../components/pattern/stage"
import Richtext from "../components/pattern/richtext"
import Accordion from "../components/pattern/accordion"
import { getByUid } from "../networking/prismic-api"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText, asHtml } from "../utils/prismic-utils"
import { cacheControlHeader, createEtag } from "../utils/cache-utils"
import Error from "./_error"
import Project from "../models/config/project"
import { Document } from "prismic-javascript/d.ts/documents"
import TukanModel from "../models/tukan/tukan-model"
import { IMetaData } from "../models/config/meta-data"
import { TGrid, TCol } from "../components/style/sc-grid"
import styled from "styled-components"
import { useInView } from "react-hook-inview"


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

    
    const stageImg = data.data.hero_img
    const content = asHtml(data.data.content)
    const accordionList = data.data.body
    
    let headingList = []
    accordionList.map((item) => {
        headingList.push(asText(item.primary.accordion_title))
    })
    
    if (error) {
        return <Error />
    }

    const project = Project.getInstance()

    const showCookieNotification = project.cookieLink !== null

    return (
        <div className="tukan">
            <Meta data={meta} />

            <Nav data={navData} />

            <div className="tukan-container">
                <Stage headline="" content="" btnLabel="" btnLink="" backgroundImage={stageImg} />
                <Richtext content={content} />

                <TGrid>
                    <SideNavCol size={1 / 4}>
                        {headingList.map((item, index) => {
                            const relativeLink = `#${item.toLowerCase()}`
                            return (
                                <a key={index} href={relativeLink}>
                                    {item}
                                </a>
                            )
                        })}
                    </SideNavCol>
                    <TCol size={3 / 4}>
                        {accordionList.map((item, index) => {
                            const [ref, isVisible] = useInView({
                                unobserveOnEnter: true,
                                threshold: 0.2,
                              })

                              isVisible ? console.log(item.primary.accordion_headline + " is in view") : null
                            return <span ref={ref}><Accordion key={index} headline={item.primary.accordion_title} items={item.items} /></span>
                        })}
                    </TCol>
                </TGrid>
            </div>

            <Footer data={footerData} />

            {showCookieNotification ? <CookieNotification link={project.cookieLink} /> : <div />}
        </div>
    )
}

const SideNavCol = styled(TCol)`
    height: fit-content;
    padding-top: 200px;
    position: sticky;
    top: 0;
    a {
        display: block;
        margin-bottom: ${(props) => props.theme.spacing.m};
    }
`

FAQ.getInitialProps = async ({ res }) => {
    const queryId = "faq"
    const docType = "faqs"

    const prismicRes = await getByUid(docType, queryId)
    const docs = prismicRes.data

    const navRes = prismicRes.navigation.results[0]
    const navData = navRes.data

    const footerRes = prismicRes.footer.results[0]
    const footerData = footerRes.data

    if (prismicRes.error || docs?.results?.length < 1) {
        return {
            error: "Page not found",
        }
    }

    const results = docs.results
    const data = results[0]
    if (res) {
        const etag = createEtag(docs.results)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", cacheControlHeader())
    }

    const meta = createMeta(data)

    return {
        data,
        meta,
        footerData,
        navData,
    }
}

// Get meta data
const createMeta = (docs: Document): IMetaData => {
    const metaTitle = asText(docs.data.meta_title)
    const metaDescription = asText(docs.data.meta_description)
    const metaAuthor = asText(docs.data.meta_author)
    const metaOgImg = docs.data.meta_og_img ? docs.data.meta_og_img.url : docs.data.meta_og_img
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
