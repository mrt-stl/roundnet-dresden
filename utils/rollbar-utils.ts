import Rollbar from "rollbar"

const rollbar = new Rollbar({
    accessToken: "bb675fb694fc463abf4f20791ff396da",
    captureUncaught: true,
    captureUnhandledRejections: true
})

export const log = (msg: string) => {
    rollbar.log(msg)
}

export const logError = (error: any) => {
    rollbar.error(error)
}