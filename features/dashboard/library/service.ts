"use server";

import { request } from "@/lib/request";
import logger from "@/lib/logger";
import { errorFormat } from "@/lib/error";
import {
  LibraryItemDTO,
  LibraryPaginateDTO,
  LibraryPostDTO,
  LibraryResponseDTO,
} from "@/types/dto/library";
import { revalidatePath, revalidateTag } from "next/cache";

export async function getLibraryWithPaginate(
  page: number,
): Promise<LibraryPaginateDTO | null> {
  try {
    const response = await request<LibraryPaginateDTO>(
      `/library/paginate/?page=${page}`,
    );
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getAllLibrary(): Promise<LibraryResponseDTO | null> {
  try {
    const response = await request<LibraryResponseDTO>("/library");
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export async function getLibraryById(
  id: string,
): Promise<LibraryItemDTO | null> {
  try {
    const response = await request<LibraryItemDTO>(`/library/${id}`);
    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

export const getLibraryService = getAllLibrary;
export const getLibraryByIdService = getLibraryById;

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

    revalidateTag("library", "default");
    revalidatePath("/dashboard/library/table");
    revalidatePath("/library");
    revalidatePath("/");

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

    revalidateTag("library", "default");
    revalidatePath("/dashboard/library/table");
    revalidatePath("/library");
    revalidatePath("/");

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

    revalidateTag("library", "default");
    revalidatePath("/dashboard/library/table");
    revalidatePath("/library");
    revalidatePath("/");

    return response;
  } catch (error: unknown) {
    logger.error(errorFormat(error));
    return null;
  }
}

