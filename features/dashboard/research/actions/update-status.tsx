"use server";

import {
  ResearchStatusUpdateDTO,
  ResearchItem,
} from "@/types/dto/research";
import { revalidatePath, revalidateTag } from "next/cache";
import { updateResearchStatus } from "../service";

/**
 * Server action to toggle the approval status of a research item.
 *
 * @param id - The ID of the research item.
 * @param currentStatus - The current status (boolean true if completed/has_done).
 * @returns The updated research response or null on failure.
 */
export async function toggleResearchApprovalAction(
  id: string,
  currentStatus: boolean,
): Promise<ResearchItem | null> {
  const payload: ResearchStatusUpdateDTO = {
    status: !currentStatus ? "has_done" : "pending",
  };

  const response = await updateResearchStatus(id, payload);

  if (response) {
    revalidateTag("research", "default");
    revalidatePath("/dashboard/research/table");
    revalidatePath("/dashboard/research");
    revalidatePath("/research");
    revalidatePath("/");
  }

  return response;
}

// Alias kompatibilitas
export const togglePinSearchAction = toggleResearchApprovalAction;

