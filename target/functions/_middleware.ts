import { CspOptions, getNonceSense } from 'csp-nonce-sense';

interface Env {
    ALLOWED_FRAME_ANCESTORS: string;
    ALLOWED_ORIGIN: string;
}


const cspOpts: CspOptions = {
    nonceTags: [
        "script",
        "style"
    ],
    basePolicies: {
        'base-uri': ["'self'"],
        'default-src': ["'self'"],
        'frame-src': ["'none'"],
        'frame-ancestors': (context) => `${context.env.ALLOWED_FRAME_ANCESTORS}`,
        'object-src' : ["'none'"],
        'img-src': ["'self'", "data:"]
    }
}
export const nonceSense = getNonceSense(cspOpts);

export const setSecurityHeaders: PagesFunction<Env> = async (context) => {

    const response = await context.next();
    response.headers.set('Access-Control-Allow-Origin', "'self'");
    response.headers.set('Access-Control-Max-Age', '86400');
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubdomains');

    return response;
}

export const onRequest = [setSecurityHeaders, nonceSense]