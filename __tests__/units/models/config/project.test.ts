import Project, { DarkModeType, ShowBannerType } from "../../../../models/config/project"

describe("Project Environment Variables are not set", () => {
    beforeEach(() => {
        jest.resetModules()
    })

    const project = new Project()

    test("Caching time is not right", () => {
        expect(project.cachingTime).toBe(15 * 60)
    })

    test("Colors not set", () => {
        expect(project.colors.accent).toBeUndefined()
    })

    test("Cookie link not set", () => {
        expect(project.cookieLink).toBeNull()
    })

    test("Dark mode not set", () => {
        expect(project.darkMode).toBe(DarkModeType.OFF)
    })

    test("Font not set", () => {
        expect(project.font).toStrictEqual(null)
    })

    test("Google Analytics id not set", () => {
        expect(project.googleAnalyticsID).toBe(null)
    })

    test("Name not set", () => {
        expect(project.name).toBeNull()
    })

    test("Nav not set", () => {
        expect(project.nav).toStrictEqual([{ link: "/", name: "Home" }])
    })

    test("Prismic access token not set", () => {
        expect(project.prismicAccessToken).toBeNull()
    })

    test("Prismic endpoint not set", () => {
        expect(project.prismicEndpoint).toBeNull()
    })

    test("Project id not set", () => {
        expect(project.projectId).toBe("")
    })

    test("Show banner not set", () => {
        expect(project.showBanner).toBe(ShowBannerType.OFF)
    })

    test("Url not set", () => {
        expect(project.url).toBeNull()
    })
})

describe("Project Environment Variables are set", () => {
    beforeEach(() => {
        jest.resetModules()
    })

    const cachingTimeEnv = "42"
    const colors = { primary: "fffff", secondary: "000000", accent: "f0f0f0" }
    const cookieLink = "/datenschutz"
    const darkMode = DarkModeType.AUTO
    const font = { name: "Stl", url: "/stl" }
    const gaEnv = "28u3udbhsa"
    const name = "Stadtteilliebe"
    const nav = [{ link: "/lel", name: "LEL" }]
    const prismicAccessToken = "3049023"
    const prismicEndpoint = "https://prismic.io/"
    const projectId = "stl"
    const showBanner = ShowBannerType.ON
    const url = "https://stadtteilliebe.de/"

    process.env.CACHING_TIME = cachingTimeEnv
    process.env.COLORS = JSON.stringify(colors)
    process.env.COOKIE = JSON.stringify({ link: cookieLink })
    process.env.DARK_MODE = darkMode
    process.env.FONT = JSON.stringify(font)
    process.env.GA = gaEnv
    process.env.NAME = name
    process.env.NAV = JSON.stringify(nav)
    process.env.ACCESS_TOKEN = prismicAccessToken
    process.env.PRISMIC_ENDPOINT = prismicEndpoint
    process.env.PROJECT_ID = projectId
    process.env.HAS_BANNER = showBanner
    process.env.URL = url

    const project = new Project()

    test("Caching time is set right", () => {
        expect(project.cachingTime).toBe(42 * 60)
    })

    test("Colors set right", () => {
        expect(project.colors).toStrictEqual(colors)
    })

    test("Cookie link is set right", () => {
        expect(project.cookieLink).toBe(cookieLink)
    })

    test("Dark mode is set right", () => {
        expect(project.darkMode).toBe(darkMode)
    })

    test("Font is set right", () => {
        expect(project.font).toStrictEqual(font)
    })

    test("Google Analytics id is set right", () => {
        expect(project.googleAnalyticsID).toBe(gaEnv)
    })

    test("Name is set right", () => {
        expect(project.name).toBe(name)
    })

    test("Nav is set right", () => {
        expect(project.nav).toStrictEqual(nav)
    })

    test("Prismic access token is set right", () => {
        expect(project.prismicAccessToken).toEqual(prismicAccessToken)
    })

    test("Prismic endpoint is set right", () => {
        expect(project.prismicEndpoint).toEqual(prismicEndpoint)
    })

    test("Project id set right", () => {
        expect(project.projectId).toBe(projectId)
    })

    test("Show banner set right", () => {
        expect(project.showBanner).toBe(showBanner)
    })

    test("Url set right", () => {
        expect(project.url).toBe(url)
    })
})