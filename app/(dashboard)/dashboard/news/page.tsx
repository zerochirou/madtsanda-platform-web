import { NewsList } from "@/features/dashboard/news/components";
import { getNewsWithPaginate } from "@/features/news/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const news = await getNewsWithPaginate(1);
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kelola Berita</h1>
        <Link href="/dashboard/news/create">
          <Button>Buat Berita Baru</Button>
        </Link>
      </div>
      <NewsList data={news?.data || []} />
    </div>
  )
}