"use server";

import { cookies } from "next/headers";
import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { StudentResponseDTO } from "@/types/dto/student";

export async function getStudentByToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const response = await request<StudentResponseDTO | null>(`/student/token`, {
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
