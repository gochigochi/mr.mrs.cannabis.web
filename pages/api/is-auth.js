export default async function handler(req, res) {
 
    const auth = req.cookies.token

    return res.status(200).json({ success: auth === process.env.ADMIN_UNIQUE_IDENTIFIER })
}