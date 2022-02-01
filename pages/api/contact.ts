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
        replyTo: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: req.body.content + " | Sent from: " + req.body.email,
        html: `<p>Name: ${req.body.email}</p><div>Message: ${req.body.content}</div><p>Reply to:
      ${req.body.email}</p>`,
    }

    try {
        // send actual mail to TF Ventures
        await transporter.sendMail(mailData)

        res.status(200).end()
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}
