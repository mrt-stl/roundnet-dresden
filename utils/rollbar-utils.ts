import Rollbar from "rollbar"

const rollbar = new Rollbar({
    accessToken: "bb675fb694fc463abf4f20791ff396da",
    captureUncaught: true,
    captureUnhandledRejections: true
})

export const log = (msg: any) => {

    if (process.env.NODE_ENV === "production") {
        rollbar.log(msg)

    } else {
        // tslint:disable-next-line: no-console
        console.log(msg)
    }
}

export const logError = (error: any) => {

    if (process.env.NODE_ENV === "production") {
        rollbar.error(error)

    } else {
        // tslint:disable-next-line: no-console
        console.error(error)
    }
}