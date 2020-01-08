/**
 * Checks if string is link.
 */
export const isLink = (rawString: string) => {
    const rawStringIsLink = rawString.startsWith("http://") || rawString.startsWith("https://")
    return rawStringIsLink
}