import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Apply the font properly so Next.js can self-host & inline it (non-blocking)
const geist = Geist({
  subsets: ["latin"],
  display: "swap",          // Never block rendering — swap in font once ready
  preload: true,            // Preload the woff2 file for LCP text
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: 'Optika ',
  description: 'Where precision meets artistry. Premium eyewear crafted with innovative engineering and timeless elegance.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains used by the app — eliminates TCP handshake latency */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        {/* Preload the local 3D model so it starts downloading before JS executes */}
        <link
          rel="preload"
          href="/AkshtaS%20spetcs2.glb"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      {/* Apply the geist font class to body so the font fetch is treated as non-render-blocking */}
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
