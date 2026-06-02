"use server";

import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { LoginDTO } from "@/types/dto/auth";

async function accessTokenService(payload: LoginDTO) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });


    return await response.json();
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
