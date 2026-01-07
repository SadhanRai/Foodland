import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("admin_token")?.value;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/admin/login")) return NextResponse.next();

    if (path.startsWith("/admin") && !token) {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    return NextResponse.next(); // IMPORTANT: allow other routes
}
