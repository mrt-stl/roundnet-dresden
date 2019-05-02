/* eslint-disable no-console */
const { exec, execSync } = require("child_process")

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
exec("now --target production -A deployment/kranich-now.json --token " + token, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})

exec("now --target production -A deployment/lederpflege-nawrot-now.json --token " + token, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})

exec("now --target production -A deployment/onecrowd-now.json --token " + token, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        // node couldn't execute the command
        return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(stdout)
    console.error(stderr)
})