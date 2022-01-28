import { verify } from "hcaptcha"

export default async function (req, res) {
    const secret = process.env.HCAPTCHA_SECRET
    const token = req.body

    verify(secret, token)
        .then((data) => {
            if (data.success === true) {
                res.status(200).end()
            } else {
                console.log("verification failed")
                res.status(403).end()
            }
        })
        .catch(console.error)
}
