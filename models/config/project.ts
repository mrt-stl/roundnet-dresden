import { logError } from "../../utils/rollbar-utils"
import INavLink from "../nav/nav-link"

const MIN = 60
const standardNav = { link: "/", name: "Home" }

export default class Project {

    public static getInstance(): Project {
        if (!Project.instance) {
            Project.instance = new Project()
        }

        return Project.instance
    }

    public static clearInstance() {
        Project.instance = null
    }

    private static instance: Project

    public projectId: string
    public cachingTime: number
    public colors: IColors
    public cookieLink?: string | null
    public darkMode: string
    public font?: IFont | null
    public googleAnalyticsID?: string | null
    public name?: string | null
    public nav: INavLink[]
    public prismicAccessToken?: string | null
    public prismicEndpoint?: string | null
    public showBanner: string
    public url?: string | null
    public metaTitle?: string | null
    public metaDescription?: string | null

    // Shop variables
    public useShopView: boolean
    public shopifyStoreDomain?: string
    public shopifyAccessToken?: string

    private constructor() { this.init() }

    public isProduction() {
        return process.env.NODE_ENV === "production"
    }

    private init() {
        this.projectId = process.env.project_id ? process.env.project_id : ""
        this.cachingTime = this.parseCacheTime(process.env.caching_duration)
        this.colors = this.parse(process.env.color) ? JSON.parse(process.env.color) : {}
        this.cookieLink = process.env.cookie ? process.env.cookie : null
        this.darkMode = process.env.dark_mode ? process.env.dark_mode : DarkModeType.OFF
        this.font = this.parse(process.env.font)
        this.googleAnalyticsID = process.env.ga_id ? process.env.ga_id : null
        this.name = process.env.name ? process.env.name : null
        this.nav = this.parse(process.env.nav) ? JSON.parse(process.env.nav) : [standardNav]
        this.prismicAccessToken = process.env.prismic_access_token ? process.env.prismic_access_token : null
        this.prismicEndpoint = process.env.prismic_endpoint ? process.env.prismic_endpoint : null
        this.showBanner = process.env.show_banner ? process.env.show_banner : ShowBannerType.OFF
        this.url = process.env.url ? process.env.url : null

        // Shop variables
        this.useShopView = Boolean(process.env.use_shop_view) ?? false
        this.shopifyAccessToken = process.env.shopify_access_token ?? null
        this.shopifyStoreDomain = process.env.shopify_store_domain ?? null

        // Meta variables
        this.metaTitle = process.env.META_TITLE ?? null
        this.metaDescription = process.env.META_DESCRIPTION ?? null
    }

    private parse = (envVar: any) => {
        if (!envVar) {
            return null
        }

        try {
            const parsedVar = JSON.parse(envVar)
            return parsedVar
        } catch (e) {
            logError(e)
            return null
        }
    }

    private parseCacheTime(envVar: any) {
        let cachingTime = 15 * MIN

        if (!envVar) {
            return cachingTime
        }

        try {
            cachingTime = Number(envVar) * MIN
            return cachingTime

        } catch (e) {
            return cachingTime
        }
    }
}

interface IColors {
    primary?: string
    secondary?: string
    accent?: string
}

export enum DarkModeType {
    AUTO = "auto",
    ON = "on",
    OFF = "off"
}

export enum ShowBannerType {
    ON = "on",
    OFF = "off"
}

interface IFont {
    name: string
    url: string
}