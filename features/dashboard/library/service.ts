"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  LibraryItemDTO,
  LibraryPostDTO,
  LibraryResponseDTO,
} from "@/types/dto/library";

export async function getLibraryService(): Promise<LibraryResponseDTO | null> {
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

export async function getLibraryByIdService(
  id: string,
): Promise<LibraryItemDTO | null> {
  try {
    const response = await request<LibraryItemDTO>(`/library/${id}`, {
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

export async function createLibraryService(
  data: LibraryPostDTO,
): Promise<LibraryItemDTO | null> {
  try {
    const response = await request<LibraryItemDTO>("/library", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("library");
    revalidatePath("/dashboard/library/table");

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function updateLibraryService(
  id: string,
  data: Partial<LibraryPostDTO>,
): Promise<LibraryItemDTO | null> {
  try {
    const response = await request<LibraryItemDTO>(`/library/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("library");
    revalidatePath("/dashboard/library/table");

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function deleteLibraryService(
  id: string,
): Promise<LibraryItemDTO | null> {
  try {
    const response = await request<LibraryItemDTO>(`/library/${id}`, {
      method: "DELETE",
    });

    revalidateTag("library");
    revalidatePath("/dashboard/library/table");

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}
