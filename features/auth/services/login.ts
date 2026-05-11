"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  LoginDTO,
  LoginFailedResponseDTO,
  LoginResponseDTO,
} from "@/types/dto/auth";

async function accessTokenService(
  payload: LoginDTO,
): Promise<LoginResponseDTO | LoginFailedResponseDTO> {
  try {
    const response = await request<LoginResponseDTO | LoginFailedResponseDTO>(
      `/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    return response;
  } catch (error: unknown) {
    console.error("Login Service Error:", error);
    logger.error(errorFormat(error));

    return {
      errors: [
        {
          message: "Terjadi kesalahan sistem atau koneksi.",
          rule: "server_error",
          field: "general",
        },
        {
          message: "Kredensial tidak valid.",
          rule: "server_error",
          field: "general",
        },
      ],
    };
  }
}

export { accessTokenService };
