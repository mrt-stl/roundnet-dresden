import Rollbar from "rollbar"
import Project from "../models/config/project"

const rollbar = new Rollbar({
    accessToken: "bb675fb694fc463abf4f20791ff396da",
    captureUncaught: true,
    captureUnhandledRejections: true
})

export const log = (msg: any) => {
    const project = Project.getInstance()

    if (project.isProduction()) {
        rollbar.log(msg)

    } else {
        // tslint:disable-next-line: no-console
        console.log(msg)
    }
}

export const logError = (error: any) => {
    const project = Project.getInstance()

    if (project.isProduction()) {
        rollbar.error(error)

    } else {
        // tslint:disable-next-line: no-console
        console.error(error)
    }
}