"use server";

import { cookies } from "next/headers";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { TeacherResponseDTO } from "@/types/dto/teacher";

export async function getTeacherByToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const response = await request<TeacherResponseDTO | null>(`/teacher/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
