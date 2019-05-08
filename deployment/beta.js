/* eslint-disable no-console */
const { exec } = require("child_process")
const fs = require("fs")

console.log("Deploy to beta")

const alexfiToken = process.argv[5]
exec("now --target production -A deployment/beta/alexfi-now.json --token " + alexfiToken, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})

const token = process.argv[3]
const configFolder = "./deployment/beta/"
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