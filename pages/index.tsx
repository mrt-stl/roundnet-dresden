import Meta, { finalTheme } from "../components/meta"
import Nav from "../components/navigation/nav"
import Footer from "../components/footer/footer"
import { getByUid } from "../networking/prismic-api"
import TukanContainer from "../components/tukan-container"
import CookieNotification from "../components/pattern/cookie-notification"
import { asText } from "../utils/prismic-utils"
import Love from "../components/pattern/love"
import EditButton from "../components/elements/edit-button"
import { cacheControlHeader, createEtag } from "../utils/cache-utils"
import Error from "./_error"
import { prismicPageToComponentModels } from "../controller/prismic-controller"
import Project, { ShowBannerType } from "../models/config/project"
import parser from "accept-language-parser"
import { Document } from "prismic-javascript/d.ts/documents"
import TukanModel from "../models/tukan/tukan-model"
import { IMetaData } from "../models/config/meta-data"
import Banner from "../components/navigation/banner"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/style/tukan"

interface IIndexProps {
    docId?: string
    meta?: IMetaData
    componentModels?: TukanModel[]
    footerData?: any
    error?: string
    navData: any
}

const Index = (props: IIndexProps) => {
    const { docId, meta, componentModels, footerData, error, navData } = props

    if (error) {
        return (<Error />)
    }

    const project = Project.getInstance()

    const Theme = {
        ...finalTheme,
        projectColors: project.colors
    }

    const showCookieNotification = project.cookieLink !== null
    const showBanner = project.showBanner === ShowBannerType.ON

    return (
        <div className="tukan">
                <Meta
                    data={meta} />

                <ThemeProvider theme={Theme}>
                    <GlobalStyles/>

                    <Nav data={navData}/>

                    {meta.metaBanner ?
                        <Banner content={meta.metaBanner} /> :
                        <></>
                    }

                    <TukanContainer
                        tukanModels={componentModels} />

                    <Footer data={footerData}/>

                </ThemeProvider>

                {showCookieNotification ?
                    <CookieNotification 
                        link={project.cookieLink} /> :
                    <div />
                }

                <EditButton
                    docId={docId} />

                {showBanner ?
                    <Love /> :
                    <div />
                }
        </div>
    )
}

Index.getInitialProps = async ({ query, res }) => {
    const queryId = query.id ? query.id : "home"
    const docType = query.type ? query.type : "standard"
    const lang = query.lang ? query.lang : "de-de"

    const prismicRes = await getByUid(docType, queryId)
    const docs = prismicRes.data
    const navData = prismicRes.navigation.results[0]
    const footerData = prismicRes.footer.results[0]

    if (prismicRes.error || docs?.results?.length < 1) {
        return {
            error: "Page not found"
        }
    }

    const results = docs.results
    if (res) {
        const etag = createEtag(docs.results)
        res.setHeader("X-version", etag)
        res.setHeader("Cache-Control", cacheControlHeader())
    }

    const docByLang = filterByLanguage(lang, results)
    const docId = docByLang.id

    const meta = createMeta(docByLang)
    const componentModels = prismicPageToComponentModels(docByLang)

    return {
        docId,
        meta,
        componentModels,
        footerData,
        navData,
    }
}

// Filter docs by language
const filterByLanguage = (langFilter: string, results: Document[]) => {
    const docLangs = []
    for (const result of results) {
        docLangs.push(result.lang)
    }

    langFilter = parser.pick(docLangs, langFilter, { loose: true })
    langFilter = langFilter ? langFilter : "de-de"

    // Filter result for best fitting lang
    const langResults = results.filter(result => result.lang === langFilter)
    const filteredResult = langResults.length > 0 ? langResults[0] : results[0]
    return filteredResult
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
        metaBanner
    }
}

export default Index