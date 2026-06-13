"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function sitemap() {
    var baseUrl = 'https://djf-site.vercel.app';
    var lastModified = new Date('2026-06-14T01:43:05+01:00');
    var routes = [
        { url: '', priority: 1.0, changeFreq: 'yearly' },
        { url: '/dossier/digital-integration', priority: 0.8, changeFreq: 'yearly' },
        { url: '/dossier/strategic-growth', priority: 0.8, changeFreq: 'yearly' },
        { url: '/dashboard', priority: 1.0, changeFreq: 'yearly' },
        { url: '/contact', priority: 1.0, changeFreq: 'yearly' },
    ];
    var rootImages = [
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fsmal+screen+background&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fmain.png&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F2.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F3.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F4.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F5.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F6.png&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F7.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F8.png&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F9.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F10.png&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F11.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F12.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F13.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F14.jpg&w=640&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F684082b08064a259b26c8ac3_final.jpg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2FFachada-1-Banco-Atlantida.webp&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2F683c906b73a0abb8064ee03f__DAS1362.jpg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Febn-Atlantida.jpg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fhonduras-bancas_11242238_20250701164910.jpg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fimages+%283%29.jpeg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fportada-09-02-2024-111-juntos.jpg&w=384&q=75',
        '/_next/image?url=https%3A%2F%2Fhv4w1qmfjrk8zaij.public.blob.vercel-storage.com%2Fimages.jpeg&w=384&q=75',
        'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&q=75&w=640',
        '/_next/image?url=https%3A%2F%2Fwww.bancatlan.hn%2Fsala-de-prensa%2Fimg%2F2026-01-09-plaza-teknos-quimistan%2Fportada.jpg&w=256&q=75',
        '/_next/image?url=https%3A%2F%2Fcdn.prod.website-files.com%2F68363d5a1fb3537423263bff%2F6841f518e2c7e3dea8ea93a4_ceapi-2024-portada.jpg&w=256&q=75',
        '/_next/image?url=https%3A%2F%2Fcdn.prod.website-files.com%2F68363d5a1fb3537423263bff%2F683fcb25cfb6588ffd8a90be_Toma+ae%CC%81rea+AFP+Confia+-+El+Salvador-p-1080.jpg&w=256&q=75',
    ];
    return routes.map(function (route) {
        var isRoot = route.url === '';
        return __assign({ url: "".concat(baseUrl).concat(route.url), lastModified: lastModified, changeFrequency: route.changeFreq, priority: route.priority }, (isRoot && {
            images: rootImages.map(function (img) {
                return img.startsWith('/_next') ? "".concat(baseUrl).concat(img) : decodeURIComponent(img.split('?url=')[1] || img);
            })
        }));
    });
}
exports.default = sitemap;
