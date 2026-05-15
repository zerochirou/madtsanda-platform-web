"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { StudentResponseDTO } from "@/types/dto/student";
import { cookies } from "next/headers";

export async function getStudentByToken() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value
  try {
    const response = await request<StudentResponseDTO | null>(`/student/token`, {
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
