import { Card, CardContent, CardHeader } from "@/components/ui";
import {
  UpdateForm,
  UpdateFormSkeleton,
} from "@/features/dashboard/news/components/update-form";
import { getUserProfile } from "@/features/dashboard/profile/services";
import {
  getAllNewsCategoryService,
  getNewsByIdService,
} from "@/features/news/services";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await getNewsByIdService(id);
  const category = await getAllNewsCategoryService();
  const user = await getUserProfile();

  if (!user) {
    redirect("/login");
  }

  if (!news) {
    redirect("/dashboard/news");
  }

  return (
    <div className="px-4 py-10">
      <Card className="mx-auto max-w-3xl mt-4">
        <CardHeader>
          <h1 className="text-4xl font-bold mt-4">Edit Berita</h1>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<UpdateFormSkeleton />}>
            <UpdateForm
              news={news.data}
              category={category}
              user={user?.data}
              key={id}
            />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
