import { getAuthToken } from "@/lib/auth-service";

export type Result<T, E = string> =
  | { ok: true; data: T; message?: string }
  | { ok: false; error: E; statusCode: number; validationErrors?: Record<string, string[]> | unknown };

export interface RequestOptions extends Omit<RequestInit, "body"> {
  params?: Record<string, string | number | boolean>;
  body?: unknown;
}

export async function httpClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<Result<T>> {
  const { params, body, headers: customHeaders, ...customConfig } = options;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1";

  const queryString = params
    ? `?${new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ).toString()}`
    : "";
  const url = `${baseUrl}${endpoint}${queryString}`;

  const token = await getAuthToken();
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

  const headers = new Headers(customHeaders);
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  // Let the browser/runtime set multipart boundary automatically if FormData
  if (!isFormData && body && !headers.has("Content-Type") && typeof body !== "string") {
    headers.set("Content-Type", "application/json");
  }

  let preparedBody: BodyInit | undefined = undefined;
  if (isFormData) {
    preparedBody = body as FormData;
  } else if (typeof body === "string") {
    preparedBody = body;
  } else if (body !== undefined && body !== null) {
    preparedBody = JSON.stringify(body);
  }

  const requestInit: RequestInit = {
    ...customConfig,
    headers,
    body: preparedBody,
  };

  try {
    const response = await fetch(url, requestInit);
    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const responseData = isJson ? await response.json().catch(() => null) : null;

    if (!response.ok) {
      let errorMessage = "Terjadi kesalahan pada server.";
      if (responseData?.errors && Array.isArray(responseData.errors)) {
        errorMessage = responseData.errors
          .map((e: { message?: string }) => e.message || "")
          .filter(Boolean)
          .join(", ");
      } else if (responseData?.data?.message) {
        errorMessage = responseData.data.message;
      } else if (responseData?.error?.message) {
        errorMessage = responseData.error.message;
      } else if (responseData?.message) {
        errorMessage = responseData.message;
      }

      return {
        ok: false,
        error: errorMessage,
        statusCode: response.status,
        validationErrors: responseData?.errors,
      };
    }

    return {
      ok: true,
      data: (responseData?.data !== undefined ? responseData.data : responseData) as T,
      message: responseData?.message,
    };
  } catch (err: unknown) {
    return {
      ok: false,
      error: (err as Error)?.message || "Koneksi jaringan gagal.",
      statusCode: 0,
    };
  }
}
