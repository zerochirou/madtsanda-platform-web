"use server";

import { revalidatePath } from "next/cache";
import { deleteResearchService } from "../service";

export async function deleteResearchAction(id: string) {
  const response = await deleteResearchService(id);

  revalidatePath("/dashboard/research/table");
  revalidatePath("/research");

  return response;
}
