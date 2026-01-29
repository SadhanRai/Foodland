import { NextResponse } from "next/server";
import { isTokenValid } from "./lib/verifyToken";

export async function middleware(req) {
    const path = req.nextUrl.pathname;

    // 1. Get the token from cookies
    const token = req.cookies.get("auth-token")?.value;

    const isAuthPage = path.startsWith("/admin/login") || path.startsWith("/admin/signup");
    const isAdminRoute = path.startsWith("/admin");

    // 2. ONLY check validity if we are on an admin route
    if (isAdminRoute && !isAuthPage) {
        const isValid = await isTokenValid(token);

        // If no token OR token is invalid (like "abcd"), redirect to login
        if (!isValid) {
            const loginUrl = new URL("/admin/login", req.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // 3. If user is logged in with VALID token, don't let them see login page
    if (isAuthPage) {
        const isValid = await isTokenValid(token);
        if (isValid) {
            return NextResponse.redirect(new URL("/admin", req.url));
        }
    }

    return NextResponse.next();
}

// Ensure middleware only runs on admin paths to save performance
export const config = {
    matcher: ["/admin/:path*"],
};