import { NextResponse } from 'next/server';

/**
 * Minimal middleware stub to keep routing consistent without relying on
 * optional Supabase helpers that are not part of the production dependency
 * tree. This prevents Vercel builds from failing when the helper package is
 * missing while still allowing us to introduce auth checks later if needed.
 */
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
