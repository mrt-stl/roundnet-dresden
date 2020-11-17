// eslint-disable-next-line security/detect-child-process
const { exec } = require("child_process")

const createCmd = require("./deploy-utils")

const projectId = process.argv[2]

const doc = require(`./configs/${projectId}.json`)

const token = "qPACYOXNHdECEhvuHdqyiDbZ"

deployToNow(doc.build.env)

function deployToNow(project) {
    console.log("Start deploying:", project.url)

    let deployCmd = "vercel --prod -A [FILE] --token [TOKEN]"

    deployCmd = deployCmd.replace("[TOKEN]", token)

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