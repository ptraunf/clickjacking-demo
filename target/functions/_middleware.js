import { getNonceSense } from 'csp-nonce-sense';
const cspOpts = {
    basePolicies: {
        'base-uri': ["'self'"],
        'default-src': ["'self'"],
        'frame-src': ["'none'"],
        'frame-ancestors': (context) => `${context.env.ALLOWED_FRAME_ANCESTORS}`,
        'object-src': ["'none'"],
        'img-src': ["'self'", "data:"]
    }
};
export const nonceSense = getNonceSense(cspOpts);
export const setSecurityHeaders = async (context) => {
    const response = await context.next();
    //
    // const csp =
    //     "default-src 'self' ; " +
    //     `script-src 'self' 'unsafe-inline' ; ` +
    //     `style-src 'self' 'unsafe-inline' ;` +
    //     "frame-src 'none' ; " +
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
export const onRequest = [setSecurityHeaders, nonceSense];
