import type { NextConfig } from 'next'
import { EventEmitter } from 'node:events'

EventEmitter.defaultMaxListeners = 25

const stsHeader = `max-age=31536000; includeSubDomains; preload`
const cspHeader = `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn; media-src 'self' blob: data: https://*.public.blob.vercel-storage.com; connect-src 'self' https://*.public.blob.vercel-storage.com; object-src 'self'; frame-ancestors 'none';`
const referrerPolicy = 'no-referrer'
const permissionsPolicy = "geolocation=(), camera=(), microphone=(), payment=(), fullscreen=(self)"
const crossOriginOpenerPolicy = 'same-origin'
const crossOriginEmbedderPolicy = 'unsafe-none'
const xFrameOptions = 'DENY'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: cspHeader.replace(/\s{2,}/g, ' ').trim() },
          { key: 'Strict-Transport-Security', value: stsHeader },
          { key: 'Referrer-Policy', value: referrerPolicy },
          { key: 'Permissions-Policy', value: permissionsPolicy },
          { key: 'Cross-Origin-Opener-Policy', value: crossOriginOpenerPolicy },
          { key: 'Cross-Origin-Embedder-Policy', value: crossOriginEmbedderPolicy },
          { key: 'X-Frame-Options', value: xFrameOptions },
        ],
      },
    ]
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  reactStrictMode: true,

  // Force Terser + kill dead code
  swcMinify: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev &&!isServer) {
      config.optimization.minimizer[0].options.terserOptions = {
        compress: {
          passes: 2,
          toplevel: true,
          pure_funcs: ['console.log'],
        },
        mangle: {
          toplevel: true,
        },
        format: {
          comments: false,
        },
      }
    }
    return config
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel-storage.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.bancatlan.hn' },
      { protocol: 'https', hostname: '**.website-files.com' },
      { protocol: 'https', hostname: '**.invatlan.hn' },
      { protocol: 'https://**.transparenttextures.com' },
    ],
  },
}

export default nextConfig