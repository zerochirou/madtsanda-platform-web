import { NewsEditor } from "@/features/dashboard/news/components/form";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { getAllNewsCategoryService } from "@/features/news/services";
import { redirect } from "next/navigation";

export default async function Page() {
  const [newsCategory, user] = await Promise.all([
    getAllNewsCategoryService(),
    getUserProfile()
  ]);
  
  if (!user) {
    redirect("/login");
  }

  return <NewsEditor user={user.data} category={newsCategory} />
}