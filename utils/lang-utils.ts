import parser from "accept-language-parser"

/**
 * Parses document language to language code.
 */
export const getLanguageCode = (lang: string) => {
    const parsedLanguages: any[] = parser.parse(lang)
    const parsedLang = parsedLanguages.length > 0 ? parsedLanguages[0] : null
    const langCode = parsedLang ? parsedLang.code : "de"

    return langCode
}