import nodemailer from "nodemailer"

export default async function (req, res) {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.ionos.de",
        auth: {
            user: "tf-ventures-mailing@stlb.me",
            pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
    })

    // turn following lines on to check if connections problems exist in smtp setup

    // transporter.verify(function (error, success) {
    //     if (error) {
    //         console.log("VERIFICATION ERROR", error)
    //     } else {
    //         console.log("Server is ready to take our messages")
    //     }
    // })

    const mailData = {
        from: "tf-ventures-mailing@stlb.me",
        to: "martin@stadtteilliebe.de",
        subject: `Message From ${req.body.name}`,
        text: req.body.content + " | Sent from: " + req.body.email,
        html: `<div>${req.body.content}</div><p>Sent from:
      ${req.body.email}</p>`,
    }

    const mailRes = await transporter.sendMail(mailData)
    if (!mailRes.messageId) {
        console.error(mailRes)
        res.status(500).end()
    }
    res.status(200).end()
}
