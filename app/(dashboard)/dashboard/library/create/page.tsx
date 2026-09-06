import { LibraryForm } from "@/features/dashboard/library/components";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { redirect } from "next/navigation";

export default async function CreateLibraryPage() {
  const user = await getUserProfile();

  if (!user) {
    redirect("/login");
  }

  if (user.data.role !== "admin" && user.data.role !== "super_user") {
    redirect("/dashboard");
  }

  return <LibraryForm />;
}
