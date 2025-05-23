import { NextResponse, type NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    console.log("Middleware")
    const cookie = request.cookies.get('token')
    if (!cookie) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}
export const config = {
    matcher: [
        '/restaurante',
        '/restaurante/:path*',
        '/cardapio',
        '/cardapio/:path*'
    ],
}


