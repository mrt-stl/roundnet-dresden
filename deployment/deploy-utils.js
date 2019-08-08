function stringForCmd(str) {
    return "\"" + str + "\""
}

function jsonForCmd(str) {
    return "\"" + JSON.stringify(str).replace(/"/g, "\\\"") + "\""
}

const createCmd = function (deployCmd, project) {
    const file = "deployment/configs/" + project.project_id + ".json"

    let cmd = deployCmd.replace("[FILE]", file)

    // Add url
    cmd = cmd + " -b URL=" + stringForCmd(project.url)

    // Add Prismic
    cmd = cmd + " -b PRISMIC_ENDPOINT=" + stringForCmd(project.prismic_endpoint)
    cmd = cmd + " -b ACCESS_TOKEN=" + stringForCmd(project.prismic_access_token)

    // Add navigation
    cmd = cmd + " -b NAV=" + jsonForCmd(project.nav)

    // Add colors
    const primary = project.colors.primary !== "" ? project.colors.primary : "#121212"
    const secondary = project.colors.secondary !== "" ? project.colors.secondary : "#303030"
    const accent = project.colors.accent !== "" ? project.colors.accent : "#F83850"

    const colors = { primary, secondary, accent }
    cmd = cmd + " -b COLORS=" + jsonForCmd(colors)

    // Add font
    if (project.font.name !== "") {
        cmd = cmd + " -b FONT=" + jsonForCmd(project.font)
    }

    // Show banner or not
    const showBanner = project.show_banner === "on" ? 1 : 0
    cmd = cmd + " -b HAS_BANNER=" + stringForCmd(showBanner)

    // Add dark mode setting
    cmd = cmd + " -b DARK_MODE=" + stringForCmd(project.dark_mode)

    // Add caching time
    const cachingTime = project.cache_duration !== "" ? project.cache_duration : 15
    cmd = cmd + " -b CACHING_TIME=" + stringForCmd(cachingTime)

    cmd = cmd + " -b GA=" + stringForCmd(project.ga_id)
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    cmd = cmd + " -b COOKIE=" + stringForCmd(project.cookie.link)

    return cmd
}

module.exports = createCmd