"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { StudentResponseDTO } from "@/types/dto/student";

export async function getStudentByToken() {
  try {
    const response = await request<StudentResponseDTO | null>(`/student/token`, {
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
