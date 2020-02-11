/**
 * Checks if string is link.
 */
export const isLink = (rawString: string) => {
    const rawStringIsLink = rawString.startsWith("http://") || rawString.startsWith("https://")
    return rawStringIsLink
}

/**
 * Route to another page.
 */
export const routeTo = (url: string) => {
    try {
        window.location.replace(url)
    } catch (e) {
        // do nothing here
    }
}