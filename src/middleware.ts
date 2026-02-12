import { NextRequest, NextResponse } from 'next/server';

const AUTH_COOKIE = 'cg_proto_auth';
const PASSWORD = process.env.PROTOTYPE_PASSWORD || '';

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const queryPassword = searchParams.get('password');

  // Check if password provided via query param
  if (queryPassword && queryPassword === PASSWORD) {
    // Valid password in query param — set cookie and redirect to clean URL
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete('password');
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(AUTH_COOKIE, PASSWORD, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return response;
  }

  // Check if already authenticated via cookie
  const cookiePassword = request.cookies.get(AUTH_COOKIE)?.value;
  if (cookiePassword === PASSWORD) {
    return NextResponse.next();
  }

  // Not authenticated — return 403
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>403 - Unauthorized</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Host Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #F2F2F2;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      color: #111553;
    }
    .container {
      text-align: center;
      background: #fff;
      border-radius: 24px;
      border: 1px solid #eaecf0;
      padding: 48px;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .lock { font-size: 48px; margin-bottom: 16px; }
    h1 { font-size: 24px; font-weight: 700; margin-bottom: 8px; }
    p { font-size: 14px; color: #475467; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="lock">&#128274;</div>
    <h1>403 — Unauthorized</h1>
    <p>This is an internal prototype.<br>Access requires a valid password via query parameter.</p>
    <p style="margin-top: 16px; font-size: 12px; color: #98a2b3;">
      Append <code style="background:#f2f4f7;padding:2px 6px;border-radius:4px;">?password=YOUR_PASSWORD</code> to the URL
    </p>
  </div>
</body>
</html>`,
    {
      status: 403,
      headers: { 'Content-Type': 'text/html' },
    }
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public assets
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
