"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequest = exports.setSecurityHeaders = void 0;
const dist_1 = require("../../../csp-nonce-sense/dist");
const cspOpts = {
    basePolicies: {
        'base-uri': ["'self'"],
        'default-src': ["'self'"],
        'frame-src': (context) => `${context.env.ALLOWED_FRAME_SRC}`,
        'frame-ancestors': (context) => `${context.env.ALLOWED_FRAME_ANCESTORS}`,
        'object-src': ["'none'"],
        'img-src': ["'self'", "data:"]
    }
};
const nonceSense = (0, dist_1.getNonceSense)(cspOpts);
const setSecurityHeaders = async (context) => {
    const response = await context.next();
    // const csp =
    //     "default-src 'self' ; " +
    //     `script-src 'self' 'unsafe-inline' ; ` +
    //     `style-src 'self' ;` +
    //     `frame-src ${context.env.ALLOWED_FRAME_SRC} ; ` +
    //     `frame-ancestors ${context.env.ALLOWED_FRAME_ANCESTORS} ; ` +
    //     "object-src 'none'; " +
    //     "img-src 'self' data: ;" +
    //     "base-uri 'self'; ";
    //
    // response.headers.set('Content-Security-Policy', csp);
    response.headers.set('Access-Control-Allow-Origin', "'self'");
    response.headers.set('Access-Control-Max-Age', '86400');
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubdomains');
    return response;
};
exports.setSecurityHeaders = setSecurityHeaders;
exports.onRequest = [exports.setSecurityHeaders, nonceSense];
