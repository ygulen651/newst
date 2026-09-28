import { NextResponse, type NextRequest } from 'next/server'

// Optimistic check only: the session itself is verified in the admin layout and server actions.
export function proxy(request: NextRequest) {
  if (!request.cookies.has('__session')) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/((?!login).*)'],
}
