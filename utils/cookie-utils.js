const settingsCookie = "settings"

class CookieUtils {

    /**
     * Gets settings cookie.
     */
    static getSettingsCookie() {
        return this.getCookie(settingsCookie)
    }

    /**
     * Sets settings cookie.
     * 
     * @param {*} value 
     * @param {*} days 
     */
    static setSettingsCookie(value, days) {
        this.setCookie(settingsCookie, value, days)
    }

    /**
     * Gets cookie from browser.
     */
    static getCookie(name) {
        var nameEQ = name + "="
        var ca = document.cookie.split(";")
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0) == " ") c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
        }
        return null
    }

    /**
     * Sets cookie for auth.
     * @param {*} value 
     * @param {*} days 
     */
    static setCookie(name, value, days) {
        var expires = ""
        if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
            expires = "; expires=" + date.toUTCString()
        }
        const host = location.hostname.split(".").reverse().splice(0,2).reverse().join(".")
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + host
    }

    static eraseCookie(name) {
        document.cookie = name + "=; Max-Age=-99999999;"
    }
}

export default CookieUtils