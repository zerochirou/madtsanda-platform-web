"use server";

import { deleteNewsService } from "../service";
import type { NewsResponseDTO } from "@/types/dto/news";
import { revalidatePath } from "next/cache";

/**
 * Server action to toggle the pin status of a news item.
 *
 * @param id - The ID of the news item.
 * @returns The updated news response or null on failure.
 */
export async function deleteNewsAction(
  id: string,
): Promise<NewsResponseDTO | null> {
  const result = await deleteNewsService(id);
  revalidatePath("/dashboard/news");
  return result;
}
