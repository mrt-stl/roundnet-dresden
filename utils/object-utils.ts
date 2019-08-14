/**
 * Checks if object is undefined or null or empty string.
 * @param obj 
 */
export const isUndefinedOrNullOrEmpty = (obj: any) => {
    return obj === undefined || obj === null || (typeof obj === "string" && obj === "")
}