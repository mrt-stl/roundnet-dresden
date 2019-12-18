const settingsCookie = "settings"

/**
 * Gets settings cookie.
 */
export const getSettingsCookie = () => {
    return getCookie(settingsCookie)
}

/**
 * Sets settings cookie.
 */
export const setSettingsCookie = (value: string, days: number) => {
    setCookie(settingsCookie, value, days)
}

/**
 * Remove cookie.
 */
export const eraseCookie = (name: string) => {
    document.cookie = name + "=; Max-Age=-99999999;"
}

/**
 * Gets cookie from browser.
 */
const getCookie = (name: string) => {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === " ") {
            c = c.substring(1, c.length)
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

const setCookie = (name: string, value: string, days: number) => {
    let expires = ""
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    const host = location.hostname.split(".").reverse().splice(0, 2).reverse().join(".")
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + host
}