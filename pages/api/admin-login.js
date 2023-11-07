import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/config"
import { adminZodSchema } from "@/lib/zodSchemas"
import { getFirebaseErrorMsg } from "@/lib/getFirebaseErrorMsg"

export default async function handler(req, res) {

    const data = JSON.parse(req.body)

    if (!data.email || !data.psw) return res.status(500).json({ error: true, msg: "Invalid data. Try again." })

    const schemaResult = adminZodSchema.safeParse({
        email: data.email,
        psw: data.psw,
    })

    if (!schemaResult.success) return res.status(500).json({ error: true, msg: schemaResult.error.issues[0].message })

    try {

        const firebaseResponse = await signInWithEmailAndPassword(auth, data.email, data.psw)

        const maxAge = 60 * 60 * 24 * 5 * 1000
        const cookieHeader = `token=${firebaseResponse.user.uid}; Path=/; Max-Age=${maxAge}; HttpOnly`
        res.setHeader("Set-Cookie", cookieHeader )
        return res.status(200).json({ error: false })

    } catch (error) {

        console.log(error)

        const errorMsg = getFirebaseErrorMsg(error.code)

        return res.status(500).json({ error: true, msg: errorMsg })
    }

}