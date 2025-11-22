import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent')?.toLowerCase() || '';

  if (ua.includes('curl') || ua.includes('wget') || ua.includes('python')) {
    return new Response('Blocked', { status: 403 });
  }
}
