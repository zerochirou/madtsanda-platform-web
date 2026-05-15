"use server";

import { updatePinNewsService } from "../service";
import type { NewsPinUpdateDTO } from "@/types/dto/news";
import type { NewsResponseDTO } from "@/types/dto/news";
import { revalidatePath } from "next/cache";

/**
 * Server action to toggle the pin status of a news item.
 *
 * @param id - The ID of the news item.
 * @param currentPin - The current pin status. The action will reverse it.
 * @returns The updated news response or null on failure.
 */
export async function togglePinNewsAction(
  id: string,
  currentPin: boolean,
): Promise<NewsResponseDTO | null> {
  const payload: NewsPinUpdateDTO = { pin: !currentPin };
  revalidatePath("/dashboard/news");
  return await updatePinNewsService(id, payload);
}
