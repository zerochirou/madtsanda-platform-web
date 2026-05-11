import { ResearchEditor } from "@/features/dashboard/research/components/form";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUserProfile();
  
  if (!user) {
    redirect("/login");
  }

  return <ResearchEditor user={user.data} />
}