import { Card, CardContent, CardHeader } from "@/components/ui";
import { NewsEditor } from "@/features/dashboard/news/components/form";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { getAllNewsCategoryService } from "@/features/news/services";
import { redirect } from "next/navigation";

export default async function Page() {
  const [newsCategory, user] = await Promise.all([
    getAllNewsCategoryService(),
    getUserProfile(),
  ]);

  if (!user) {
    redirect("/login");
  }

  if (user.data.role !== "admin" && user.data.role !== "super_user") {
    redirect("/dashboard");
  }


  return (
    <div className="px-4 py-10">
      <Card className="mx-auto max-w-3xl mt-4">
        <CardHeader>
          <h1 className="text-4xl font-bold mt-4">Unggah Berita</h1>
        </CardHeader>
        <CardContent>
          <NewsEditor user={user.data} category={newsCategory} />
        </CardContent>
      </Card>
    </div>
  );
}
