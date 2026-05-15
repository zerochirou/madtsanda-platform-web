import { ResearchEditor } from "@/features/dashboard/research/components/form";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { redirect } from "next/navigation";
import { getResearchTag } from "@/features/dashboard/research/service";

export default async function Page() {
  const user = await getUserProfile();
  const researchTag = await getResearchTag()
  if (!user) {  
    redirect("/login");
  }

  return <ResearchEditor user={user.data} researchTag={researchTag}/ >
}