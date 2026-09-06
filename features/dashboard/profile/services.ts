"use server";

import { cache } from "react";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { UserResponseDTO } from "@/types/dto/user";

/**
 * Mengambil profil user yang sedang login dengan memoization per siklus render SSR.
 * Mencegah request HTTP ganda ke backend /auth/me saat dipanggil di layout dan page.
 */
export const getUserProfile = cache(async (): Promise<UserResponseDTO | null> => {
  try {
    const response = await request<UserResponseDTO>(`/auth/me`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
});

/**
 * Mengambil seluruh daftar pengguna (hanya dapat diakses oleh admin / super_user).
 */
export async function getAllUsers(): Promise<UserResponseDTO | null> {
  try {
    const response = await request<UserResponseDTO>(`/user`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

// Alias kompatibilitas
export const getUsersProfile = getAllUsers;
