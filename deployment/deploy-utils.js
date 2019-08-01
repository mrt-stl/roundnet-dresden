function stringForCmd(str) {
    return "\"" + str + "\""
}

function jsonForCmd(str) {
    return "\"" + JSON.stringify(str).replace(/"/g, "\\\"") + "\""
}

const createCmd = function (deployCmd, project) {
    const file = "deployment/" + project.project_id + ".json"

    let cmd = deployCmd.replace("[FILE]", file)

    // Add url
    cmd = cmd + " -b URL=" + stringForCmd(project.url)

    // Add Prismic
    cmd = cmd + " -b PRISMIC_ENDPOINT=" + stringForCmd(project.prismic_endpoint)
    cmd = cmd + " -b ACCESS_TOKEN=" + stringForCmd(project.prismic_access_token)

    // Add navigation
    cmd = cmd + " -b NAV=" + jsonForCmd(project.nav)

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

    return cmd
}

module.exports = createCmd