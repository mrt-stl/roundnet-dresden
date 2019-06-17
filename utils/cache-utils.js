export const cacheControlHeader = () => {
    let cachingTime
    if (process.env.CACHING_TIME) {
        cachingTime = Number(process.env.CACHING_TIME) * 60
    } else {
        cachingTime = 900
    }

    return "s-maxage=" + cachingTime.toString() + ", stale-while-revalidate"
}