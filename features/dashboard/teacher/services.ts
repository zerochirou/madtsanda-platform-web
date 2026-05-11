"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { TeacherResponseDTO } from "@/types/dto/teacher";

export async function getTeacherByToken() {
  try {
    const response = await request<TeacherResponseDTO | null>(`/teacher/token`, {
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
