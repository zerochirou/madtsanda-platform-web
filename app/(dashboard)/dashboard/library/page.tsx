import { redirect } from "next/navigation";

export default function DashboardLibraryPage() {
  redirect("/dashboard/library/table");
  return null;
}
