const nodemailer = require("nodemailer")
const emailPass = "mafca3-qicfic-jAnsyz"

const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 25,
    auth: {
        user: "notification@stadtteilliebe.de",
        pass: emailPass
    }
})

const mailer = ({ email, name, text, targetmail}) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from,
        to: `${targetmail}`,
        subject: `Neue Nachricht von ${from}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

export default (req, res) => {
    const { email, name, content, targetmail } = req.body

    //The server must send something back. Otherwise the mailer will still work, but the client will recieve a
    // 502 and the button doesn't get changed.
    mailer({ email, name, text: content, targetmail }).then(() => {
        res.send("Sucess")
    }).catch(() => {
        res.send("Failure")
    })
}