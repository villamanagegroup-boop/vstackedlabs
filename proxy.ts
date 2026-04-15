import { NextRequest, NextResponse } from 'next/server'
import { validateToken } from '@/lib/validate-token'

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Extract product_id from /products/[product_id]
  const segments = pathname.split('/')
  const product_id = segments[2] // index 0='', 1='products', 2=product_id

  if (!product_id) {
    return NextResponse.redirect(new URL('/store', request.url))
  }

  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/store', request.url))
  }

  const { valid } = await validateToken(product_id, token)

  if (!valid) {
    return NextResponse.redirect(new URL('/store?reason=invalid', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/products/:path+'],
}
