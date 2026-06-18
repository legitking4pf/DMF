import { EventEmitter } from 'node:events';

EventEmitter.defaultMaxListeners = 25;

/** @type {import('next').NextConfig} */

// HSTS Header (1 year, all subdomains, preload)
const stsHeader = `max-age=31536000; includeSubDomains; preload`;

// Content Security Policy
const cspHeader = `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn; media-src 'self' blob: data: https://*.public.blob.vercel-storage.com; connect-src 'self' https://*.public.blob.vercel-storage.com; object-src 'self'; frame-ancestors 'none';`;

const referrerPolicy = 'no-referrer';
const permissionsPolicy = "geolocation=(), camera=(), microphone=(), payment=(), fullscreen=(self)";

const crossOriginOpenerPolicy = 'same-origin';
const crossOriginEmbedderPolicy = 'unsafe-none';

// Extra clickjacking protection
const xFrameOptions = 'DENY';

const nextConfig = {
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
    ];
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel-storage.com', pathname: '/**' },
      { protocol: 'https', hostname: '**.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: '**.bancatlan.hn', pathname: '/**' },
      { protocol: 'https', hostname: '**.website-files.com', pathname: '/**' },
      { protocol: 'https', hostname: '**.invatlan.hn', pathname: '/**' },
      { protocol: 'https', hostname: '**.transparenttextures.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
