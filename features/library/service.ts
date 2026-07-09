"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { LibraryResponseDTO } from "@/types/dto/library";

export async function getPublicLibraryService(): Promise<LibraryResponseDTO | null> {
  try {
    const response = await request<LibraryResponseDTO>("/library", {
      next: {
        revalidate: 3600,
        tags: ["library"],
      },
    });

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
