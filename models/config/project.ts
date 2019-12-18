import { logError } from "../../utils/rollbar-utils"

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
    public nav: INav[]
    public prismicAccessToken?: string | null
    public prismicEndpoint?: string | null
    public showBanner: string
    public url?: string | null

    private constructor() { this.init() }

    public isProduction() {
        return process.env.NODE_ENV === "production"
    }

    private init() {
        this.projectId = process.env.PROJECT_ID ? process.env.PROJECT_ID : ""
        this.cachingTime = this.parseCacheTime(process.env.CACHING_TIME)
        this.colors = this.parse(process.env.COLORS) ? JSON.parse(process.env.COLORS) : {}
        this.cookieLink = process.env.COOKIE ? process.env.COOKIE : null
        this.darkMode = process.env.DARK_MODE ? process.env.DARK_MODE : DarkModeType.OFF
        this.font = this.parse(process.env.FONT)
        this.googleAnalyticsID = process.env.GA ? process.env.GA : null
        this.name = process.env.NAME ? process.env.NAME : null
        this.nav = this.parse(process.env.NAV) ? JSON.parse(process.env.NAV) : [standardNav]
        this.prismicAccessToken = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : null
        this.prismicEndpoint = process.env.PRISMIC_ENDPOINT ? process.env.PRISMIC_ENDPOINT : null
        this.showBanner = process.env.HAS_BANNER ? process.env.HAS_BANNER : ShowBannerType.OFF
        this.url = process.env.URL ? process.env.URL : null
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

interface INav {
    link: string
    name: string
}