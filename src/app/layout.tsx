import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Head from "next/head"; // <- add this
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://davidmoro.vercel.app"),
  title: {
    default: "David Moro Fernandez | CAO Grupo Financiero Atlantida",
    template: "%s | David Moro",
  },
  
  description: "CAO at GFA. Leader in Digital Banking, Core Migration & Wealth Acceleration in Honduras and El Salvador.",
  keywords: ["David Moro Fernandez", "GFA", "Digital Banking", "Central America"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidmoro.vercel.app",
    siteName: "David Moro",
    title: "David Moro Fernandez",
    description: "Chief Technology Officer at Banco Atlántida Honduras...",
    images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx"],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Moro Fernandez",
    description: "Chief Technology Officer at Banco Atlántida Honduras...",
    images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx"],
  },
  icons: {
    icon: [
      { url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/favicon.ico", type: "image/x-icon" },
      { url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/dmf_logo.png", type: "image/png" },
    ],
    apple: [{ url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/apple-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DMF",
  },
  // DELETE the whole "other" block. It won't work for links
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <Head>
        {/* Verification meta tags */}
        <meta name="google-site-verification" content="3-zan2mnlXQc8aKFUYw0sEkcBZjHcEXk8DvEArCczwE" />
        <meta name="p:domain_verify" content="ea3a43d2bcb841c330ec3c5d9a7062a3" />
        
        {/* Preconnect blob storage - kills DNS lookup time */}
        <link rel="preconnect" href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        
        {/* Preload LCP Hero Image - this kills the red X in PageSpeed */}
        <link 
          rel="preload" 
          as="image" 
          href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/smal%20screen%20background" 
          fetchPriority="high" 
        />
      </Head>
      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {children}
      </body>
    </html>
  )
}