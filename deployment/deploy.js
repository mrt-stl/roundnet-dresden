/* eslint-disable no-console */
const { exec, execSync } = require("child_process")
const fs = require("fs")

const buildCmd = "next build"
console.log(buildCmd)

execSync(buildCmd, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})

console.log("Deploy to production")

const token = process.argv[3]
const configFolder = "./deployment/configs/"
const deployCmd = "now --target production -A [FILE] --token " + token

fs.readdir(configFolder, (err, files) => {
    if (err) {
        console.error(err)
        return
    }
    files.forEach(file => {
        const path = configFolder + file
        const deployCmdWithFile = deployCmd.replace("[FILE]", path)
        exec(deployCmdWithFile, (err, stdout, stderr) => {
            if (err) {
                console.error(err)
                // node couldn't execute the command
                return
            }

            // the *entire* stdout and stderr (buffered)
            console.log(stdout)
            console.error(stderr)
        })
    })
})