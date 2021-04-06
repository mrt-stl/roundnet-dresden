import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const emailPass = "mafca3-qicfic-jAnsyz"

const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    auth: {
        user: "mail@stadtteilliebe.de",
        pass: emailPass
    }
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { senderMail, name, content, recipientMail } = req.body

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
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