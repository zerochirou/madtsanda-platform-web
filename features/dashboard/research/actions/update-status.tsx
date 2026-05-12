"use server";

import {
  ResearchStatusUpdateDTO,
  ResearchItem,
  ResearchTagResponseDTO,
} from "@/types/dto/research";
import { revalidatePath } from "next/cache";
import { updateResearchStatus } from "../service";

/**
 * Server action to toggle the status of a research item.
 *
 * @param id - The ID of the research item.
 * @param currentStatus - The current status. The action will reverse it.
 * @returns The updated research response or null on failure.
 */
export async function togglePinSearchAction(
  id: string,
  currentStatus: boolean,
): Promise<ResearchItem | null> {
  const payload: ResearchStatusUpdateDTO = {
    status: !currentStatus ? "has_done" : "pending",
  };
  revalidatePath("/dashboard/research");

  return await updateResearchStatus(id, payload);
}
