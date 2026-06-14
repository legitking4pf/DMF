"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function robots() {
    var baseUrl = 'https://dmf-site.vercel.app';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: "".concat(baseUrl, "/sitemap.xml"),
    };
}
exports.default = robots;
