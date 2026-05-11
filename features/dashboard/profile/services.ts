"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { UserResponseDTO } from "@/types/dto/user";

export async function getUserProfile() {
  try {
    const response = await request<UserResponseDTO>(`/auth/me`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}


export async function getUsersProfile() {
  try {
    const response = await request<UserResponseDTO>(`/user`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
