import { Card, CardContent } from "@/components/ui";
import { ResearchEditor } from "@/features/dashboard/research/components";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { getResearchById, getResearchTag } from "@/features/dashboard/research/service";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const research = await getResearchById(id);
  const tag = await getResearchTag();
  const user = await getUserProfile();

  if (!user) {
    redirect("/login");
    return null;
  }

  if (!research) {
    redirect("/dashboard/research/table");
    return null;
  }

  return (
    <div className="px-4 py-10">
      <Card className="mx-auto max-w-3xl mt-4">
        <CardContent>
          <ResearchEditor
            user={user.data}
            researchTag={tag}
            initialData={research.data}
          />
        </CardContent>
      </Card>
    </div>
  );
}
