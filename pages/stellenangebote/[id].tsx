import Meta from "../../components/meta"
import Nav from "../../components/navigation/nav"
import Footer from "../../components/footer/footer"
import Stage from "../../components/pattern/stage"
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
import parse from "html-react-parser"
import Location from "../../components/pattern/location"
import Button from "../../components/elements/button"

interface IIndexProps {
    data?: any
    meta?: IMetaData
    componentModels?: TukanModel[]
    footerData?: any
    error?: string
    navData: any
}

const Job = (props: IIndexProps) => {
    const { data, meta, footerData, error, navData } = props

    const jobData = data
    const stageImg = jobData.stellenangebot_image
    const stellenbezeichnung = asHtml(jobData.stellenangebot_stellenbezeichnung)
    const beschreibung = asHtml(jobData.stellenangebot_beschreibung)
    const hauptaufgaben = asHtml(jobData.stellenangebot_hauptaufgaben)
    const qualifikation = asHtml(jobData.stellenangebot_qualifikation)
    const kontakt = asHtml(jobData.stellenangebot_kontakt)

    const { stellenangebot_arbeitgeber, stellenangebot_arbeitszeit, stellenangebot_beginn, stellenangebot_bereich, stellenangebot_arbeitsort } =
        jobData

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

                <StyledGrid halign="space-between">
                    <TCol size={3 / 5} collapse="md">
                        <StyledHeading>Stellenbezeichnung</StyledHeading>
                        {parse(stellenbezeichnung)}

                        <StyledHeading>Beschreibung</StyledHeading>
                        {parse(beschreibung)}

                        <StyledHeading>Zuständigkeiten / Hauptaufgaben</StyledHeading>
                        {parse(hauptaufgaben)}

                        <StyledHeading>Qualifikationene / Anforderungen</StyledHeading>
                        {parse(qualifikation)}

                        <StyledHeading>Kontakt</StyledHeading>
                        {parse(kontakt)}
                        <Button href="mailto:info@dresdenhilfe.de" label="Jetzt bewerben" invert />
                    </TCol>

                    <TCol size={3 / 9} collapse="md">
                        <StyledLinkWrapper>
                            <p>Wir freuen uns über Ihre Bewerbung</p>
                            <Button href="mailto:info@dresdenhilfe.de" label="Jetzt bewerben" />
                        </StyledLinkWrapper>

                        <ShadowWrapper>
                            <StyledImage src="https://images.prismic.io/dresdenhilfe/77e75431-5889-413d-8aa8-4e5d34e5eb8f_dresdenhilfe-06.jpg?auto=compress,format" />
                            <StyledHeading>Arbeitgeber</StyledHeading>
                            <p>{stellenangebot_arbeitgeber}</p>
                            <StyledHeading>Arbeitszeit</StyledHeading>
                            <p>{stellenangebot_arbeitszeit}</p>
                            <StyledHeading>Beginn der Anstellung</StyledHeading>
                            <p>{stellenangebot_beginn}</p>
                            <StyledHeading>Bereich</StyledHeading>
                            <p>{stellenangebot_bereich}</p>
                            <StyledHeading>Arbeitsort</StyledHeading>
                            <p>{stellenangebot_arbeitsort}</p>
                            <Location items={[{ location_coords: { latitude: 51.0543188, longitude: 13.7210892 } }]} />
                        </ShadowWrapper>
                    </TCol>
                </StyledGrid>
            </div>

            <Footer data={footerData} />

            {showCookieNotification ? <CookieNotification link={process.env.cookie} /> : <div />}
        </div>
    )
}

const StyledGrid = styled(TGrid)`
    margin-top: ${(props) => props.theme.spacing.xxl};
    margin-bottom: ${(props) => props.theme.spacing.xxl};
`

const StyledHeading = styled.h2`
    color: ${(props) => props.theme.projectColors.blue};
    font-size: ${(props) => props.theme.fontSize.s};
    margin-top: ${(props) => props.theme.spacing.l};
    margin-bottom: ${(props) => props.theme.spacing.s};
`

const StyledLinkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    flex-basis: 100%;
    height: 150px;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 8px;
    padding: ${(props) => props.theme.spacing.l};
    background: ${(props) => props.theme.projectColors.blue};
    margin-bottom: ${(props) => props.theme.spacing.m};
    box-shadow: ${(props) => props.theme.shadow.standard};

    p {
        color: white;
    }
`

const StyledImage = styled.img`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const ShadowWrapper = styled.div`
    box-shadow: ${(props) => props.theme.shadow.standard};

    p,
    h2,
    h3,
    h4 {
        margin-left: ${(props) => props.theme.spacing.s};
    }
`

export async function getServerSideProps({ query, res,locale, locales, previewData = { ref: "" } }) {
    const queryId = query.id ? query.id : "home"
    const docType = "stellenangebote"
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

export default Job
