import type {
  Metadata,
  Viewport
} from "next";
import {
  Inter,
  Roboto_Mono,
  Playfair_Display
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  // 1. Basic Identity
  title: {
    default: "David Moro Fernandez",
    template: "%s | David Moro Fernandez",
  },
  description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",

  // 2. Search Engine Visibility
  keywords: [
    "David Moro Fernandez",
    "CAO Grupo Financiero Atlántida",
    "banco Atlantida",
    "inversiones Atlantida",
    "South America",
    "seguros Atlantida",
    "bank investment",
    "entrepreneurship",
    "Telefonica",
    "Telefonica David moro",
    "Telefonica empresas",
    "communidad de madrid",
    "madrid",
    "Young Spanish Entreprenuers",
    " European Business men",
    "central america",
    "atlantis bank",
    "Atlantida board",
    "Advisory board",
    "Spanish",
    "Honduras",
    "El salvador",
    "Grupo financiero Atlantida",
    "gfa",
    "CTO",
    "Banco Atlántida",
    "Digital Sovereignty",
    "Fintech Core Migration",
    "KONCEPTO Décor Founder",
    "GFA Strategic Vision 2030",
    "Wealth Acceleration Opportunity"
  ],
  authors: [
    {
      name: "Grupo Financiero Atlántida",
      url: "https://grupofinancieroatlantida.com"
    },
    {
      name: "David Moro Fernandez",
      url: "https://davidmoro.vercel.app"
    }
  ],
  creator: [
    "Grupo Financiero Atlántida", 
    "Banco Atlántida Honduras", 
    "Telefónica Empresas"
  ],
  publisher: [
    "Grupo Financiero Atlántida", 
    "Banco Atlántida Honduras", 
    "Telefónica Empresas"
  ],

  // 3. URLs & Indexing
  metadataBase: new URL("https://davidmoro.vercel.app"),
  alternates: {
    canonical: "/",
  },
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

      // 4. Social Media (Open Graph)
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://davidmoro.vercel.app",
      siteName: "David Moro Fernandez",
      title: "David Moro Fernandez",
      description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",
      images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx"],
    },

    // 5. Social Media (X/Twitter)
    twitter: {
      card: "summary_large_image",
      title: "David Moro Fernandez | CAO & CTO",
      description: "Chief Technology Officer at Banco Atlántida Honduras. Governing Member - Advisory Board at Grupo Financiero Atlántida.",
      images: ["https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/xxxxxxxxxxxx"],
    },

    // 6. Icons & Branding
    icons: {
      icon: [
        {
          url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/favicon.ico",
          type: "image/x-icon"
        },
        {
          url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/dmf_logo.png",
          type: "image/png"
        },
      ],
      apple: [
        {
          url: "https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com/apple-icon.png",
          type: "image/png"
        },
      ],
    },
  manifest: "/manifest.json",

  // 7. Mobile UI
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DMF",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta name="google-verification" content="3-zan2mnlXQc8aKFUYw0sEkcBZjHcEXk8DvEArCczwE" />
        <meta name="p:domain_verify" content="ea3a43d2bcb841c330ec3c5d9a7062a3" />
        {/* Preconnecting to your Vercel Blob storage for faster asset delivery */}
        <link rel="preconnect" href="https://hv4w1qmfjrk8zaij.public.blob.vercel-storage.com" />
      </head>
      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {children}
      </body>
    </html>
  );
}
