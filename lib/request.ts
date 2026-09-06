import { getAuthToken } from "./auth-service";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api/v1";

type RequestOptions = Omit<RequestInit, "body"> & {
  params?: Record<string, string>;
  body?: unknown;
};

export async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { params, body, ...customConfig } = options;

  const queryString = params
    ? `?${new URLSearchParams(params).toString()}`
    : "";
  const url = `${BASE_URL}${endpoint}${queryString}`;

  const token = await getAuthToken();
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

  const headers = new Headers(customConfig.headers);
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }
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

  const config: RequestInit = {
    ...customConfig,
    headers,
    body: preparedBody,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    let serverMessage = errorData.message || "Terjadi kesalahan pada server";

    if (errorData.errors && Array.isArray(errorData.errors)) {
      serverMessage = errorData.errors
        .map((err: { message: string }) => err.message)
        .join(", ");
    }

    throw {
      status: response.status,
      message: serverMessage,
      data: errorData,
    };
  }

  return await response.json();
}
