import { verify } from "hcaptcha"

export default async function (req, res) {
    const secret = process.env.HCAPTCHA_SECRET
    const token = req.body

    const data = await verify(secret, token)

    if (data.success) {
        res.status(200).end()
    } else {
        console.log("verification failed")
        console.error(data)
        res.status(403)
    }
}
