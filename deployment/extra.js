// eslint-disable-next-line security/detect-child-process
const { exec } = require("child_process")

const admin = require("firebase-admin")
const serviceAccount = require("./firebase-deploy.json")

const createCmd = require("./deploy-utils")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const branch = process.argv[3]
const token = process.argv[5]
const deployCmd = "now --prod -A [FILE] --token " + token

const db = admin.firestore()

const projectsRef = db.collection("projects")
projectsRef.where("branch", "=", branch).get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            deployToNow(doc.data())
        })
    })
    .catch((err) => {
        console.log("Error getting documents", err)
        throw Error(err)
    })

function deployToNow(project) {
    console.log("Start deploying:", project.url)
    const cmd = createCmd(deployCmd, project)

    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return
        }

        console.log(stdout)
        console.error(stderr)
    })
}