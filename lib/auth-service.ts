import { cookies } from "next/headers";


const AUTH_COOKIE_NAME = "auth_token";

export async function setAuthToken(token: string) {
  const cookieStore = await cookies();
  let isHttps = process.env.NODE_ENV === "production";
  try {
    const { headers } = await import("next/headers");
    const headerList = await headers();
    const proto = headerList.get("x-forwarded-proto");
    if (proto) {
      isHttps = proto === "https";
    }
  } catch {
    // ignore
  }

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: isHttps,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
}


export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value;
}

export async function removeAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}
