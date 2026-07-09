import { notFound } from "next/navigation";
import { LibraryForm } from "@/features/dashboard/library/components";
import { getLibraryByIdService } from "@/features/dashboard/library/service";

export default async function EditLibraryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const library = await getLibraryByIdService(id);

  if (!library?.data) {
    notFound();
  }

  return <LibraryForm initialData={library.data} />;
}
