import { NextResponse } from "next/server"

export function middleware(req) {

    const token = req.cookies.get("token")
    const isAuth = token?.value === process.env.ADMIN_UNIQUE_IDENTIFIER

    if (req.nextUrl.pathname.startsWith('/login') && isAuth) {
        const url = req.nextUrl.clone()
        url.pathname = "/admin"
        return NextResponse.redirect(url)
    }

    if (req.nextUrl.pathname.startsWith('/admin') && !isAuth) {
        const url = req.nextUrl.clone()
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
}