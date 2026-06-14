"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_events_1 = require("node:events");
node_events_1.EventEmitter.defaultMaxListeners = 25;
/** @type {import('next').NextConfig} */
// HSTS Header (1 year, all subdomains, preload)
var stsHeader = "max-age=31536000; includeSubDomains; preload";
// Content Security Policy
var cspHeader = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn; media-src 'self' blob: data: https://*.public.blob.vercel-storage.com; connect-src 'self' https://*.public.blob.vercel-storage.com;\n  object-src 'self'; frame-ancestors 'none';";
var referrerPolicy = 'no-referrer';
var permissionsPolicy = "geolocation=(), camera=(), microphone=(), payment=(), fullscreen=(self)";
var crossOriginOpenerPolicy = 'same-origin';
var crossOriginEmbedderPolicy = 'unsafe-none';
// Extra clickjacking protection
var xFrameOptions = 'DENY';
var nextConfig = {
    headers: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
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
                    ]];
            });
        });
    },
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        remotePatterns: [
            { protocol: 'https', hostname: '**.vercel-storage.com' },
            { protocol: 'https', hostname: '**.unsplash.com' },
            { protocol: 'https', hostname: '**.bancatlan.hn' },
            { protocol: 'https', hostname: '**.website-files.com' },
            { protocol: 'https', hostname: '**.invatlan.hn' },
            { protocol: 'https', hostname: '**.transparenttextures.com' },
        ],
    },
};
exports.default = nextConfig;
