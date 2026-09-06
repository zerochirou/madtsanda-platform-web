"use server";

import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { LoginDTO } from "@/types/dto/auth";
import { httpClient } from "@/lib/http/client";

interface LoginSuccessPayload {
  token: string;
  user: Record<string, unknown>;
}

async function accessTokenService(payload: LoginDTO) {
  try {
    const result = await httpClient<LoginSuccessPayload>("/auth/login", {
      method: "POST",
      body: payload,
    });

    if (!result.ok) {
      return {
        data: {
          message: result.error || "Username atau password salah",
          code: result.statusCode || 401,
        },
      };
    }

    return {
      data: result.data,
    };
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return {
      data: {
        message: "Terjadi kesalahan pada server",
        code: 500,
      },
    };
  }
}

export { accessTokenService };
