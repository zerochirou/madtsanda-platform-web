"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { deleteLibraryService } from "../service";

export async function deleteLibraryAction(id: string) {
  const response = await deleteLibraryService(id);

  revalidateTag("library", "max");
  revalidatePath("/dashboard/library/table");
  revalidatePath("/library");

  return response;
}
