const { exec } = require("child_process")

const admin = require("firebase-admin")
const serviceAccount = require("./firebase-deploy.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const token = process.argv[3]
const deployCmd = "now --target production -A [FILE] --token " + token

const db = admin.firestore()

const projectsRef = db.collection("projects")
projectsRef.where("branch", "=", "development").get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            deployToNow(doc.data())
        })
    })
    .catch((err) => {
        console.log("Error getting documents", err)
    })

function deployToNow(project) {
    console.log("Start deploying:", project.url)
    const cmd = createCmd(project)

    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            // node couldn't execute the command
            return
        }

        // the *entire* stdout and stderr (buffered)
        console.log(stdout)
        console.error(stderr)
    })
}

function createCmd(project) {
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

function stringForCmd(str) {
    return "\"" + str + "\""
}

function jsonForCmd(str) {
    return "\"" + JSON.stringify(str).replace(/"/g, "\\\"") + "\""
}