"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { UserResponseDTO } from "@/types/dto/user";
import { cookies } from "next/headers";

export async function getUserProfile() {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth_token")?.value;
  try {
    const response = await request<UserResponseDTO>(`/auth/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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
