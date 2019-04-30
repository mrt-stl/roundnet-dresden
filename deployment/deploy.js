/* eslint-disable no-console */
const { execSync } = require("child_process")

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
execSync("now --target production -A deployment/kranich-now.json --token " + token, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})

execSync("now --target production -A deployment/lederpflege-nawrot-now.json --token " + token, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})