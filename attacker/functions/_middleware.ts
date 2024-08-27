export const onRequest: PagesFunction = async (context) => {

    const response = await context.next();
    const csp = "default-src 'self' ; ";
    response.headers.set('Access-Control-Allow-Origin', "'self'");
    // response.headers.set("X-Frame-Options", "sameorigin");
    response.headers.set('Access-Control-Max-Age', '86400');
    // response.headers.set('Content-Security-Policy', csp);
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubdomains');

    return response;
}