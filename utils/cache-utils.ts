import Project from "../models/config/project"

export const cacheControlHeader = () => {
    const project = Project.getInstance()
    const cachingTime = project.cachingTime

    return "s-maxage=" + cachingTime.toString() + ", stale-while-revalidate"
}