export default async function handler(req, res) {
    return res.setHeader('Set-Cookie', 'token=;Path=/; HttpOnly; Max-Age=0').redirect(307, '/')
}