/**
 * ╔════════════════════════════════════════════════════════╗
 * ║  MAINTENANCE MODE — RIMUOVERE QUESTO FILE PER         ║
 * ║  RENDERE IL SITO NUOVAMENTE ACCESSIBILE AL PUBBLICO   ║
 * ╚════════════════════════════════════════════════════════╝
 *
 * TODO: Eliminare middleware.ts quando il sito è pronto per andare live.
 */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dr. Alessandro Federico — Sito in aggiornamento</title>
  <meta name="robots" content="noindex, nofollow" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(160deg, #f0f6f8 0%, #ffffff 50%, #f5f9fb 100%);
      font-family: 'DM Sans', system-ui, sans-serif;
      color: #111827;
      overflow: hidden;
    }

    .container {
      text-align: center;
      padding: 2rem;
      max-width: 520px;
      position: relative;
      z-index: 1;
    }

    .logo {
      width: 80px;
      height: 80px;
      margin: 0 auto 2rem;
      opacity: 0.7;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 100px;
      background: rgba(77, 154, 173, 0.08);
      color: #4D9AAD;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .badge::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4D9AAD;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }

    h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(2rem, 5vw, 2.8rem);
      font-weight: 400;
      line-height: 1.15;
      margin-bottom: 1rem;
      color: #111827;
    }

    .subtitle {
      font-size: 15px;
      color: #6B7280;
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .divider {
      width: 40px;
      height: 1px;
      background: rgba(77, 154, 173, 0.3);
      margin: 0 auto 2rem;
    }

    .contact {
      font-size: 13px;
      color: #9CA3AF;
    }

    .contact a {
      color: #5A93A6;
      text-decoration: none;
      transition: color 0.2s;
    }

    .contact a:hover {
      color: #4D9AAD;
    }

    .bg-shape {
      position: fixed;
      border-radius: 50%;
      opacity: 0.04;
      background: #4D9AAD;
      pointer-events: none;
    }

    .bg-shape-1 {
      width: 600px;
      height: 600px;
      top: -200px;
      right: -200px;
    }

    .bg-shape-2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      left: -100px;
    }
  </style>
</head>
<body>
  <div class="bg-shape bg-shape-1"></div>
  <div class="bg-shape bg-shape-2"></div>

  <div class="container">
    <img
      src="/images/logo-dryouth-transparent.png"
      alt="Dr. Youth — Alessandro Federico"
      class="logo"
    />

    <div class="badge">In aggiornamento</div>

    <h1>Il sito è in fase<br>di aggiornamento.</h1>

    <p class="subtitle">
      Stiamo lavorando per offrirti un'esperienza migliore.<br>
      Torneremo online a breve.
    </p>

    <div class="divider"></div>

    <p class="contact">
      Per urgenze: <a href="mailto:alfederico89@gmail.com">alfederico89@gmail.com</a>
    </p>
  </div>
</body>
</html>`

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isStaticAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js")

  if (isStaticAsset) return NextResponse.next()

  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
    },
  })
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
