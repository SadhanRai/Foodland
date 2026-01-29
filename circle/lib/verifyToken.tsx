import { jwtVerify } from "jose";

export async function isTokenValid(token) {
    const secretKey = process.env.JWT_SECRET;

    // Log this to your terminal (not browser) to check
    if (!secretKey) {
        console.error("ERROR: JWT_SECRET is missing in Frontend .env file");
        return false;
    }

    if (!token) return false;

    try {
        const secret = new TextEncoder().encode(secretKey);
        const { payload } = await jwtVerify(token, secret);
        return !!payload;
    } catch (err) {
        console.log(" Token rejected:", err.message);
        return false;
    }
}