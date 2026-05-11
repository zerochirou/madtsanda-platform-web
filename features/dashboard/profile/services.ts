"use server";

import { cookies } from "next/headers";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { UserResponseDTO } from "@/types/dto/user";

export async function getUserProfile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const response = await request<UserResponseDTO>(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const response = await request<UserResponseDTO>(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
