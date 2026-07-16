import { NewsList } from "@/features/dashboard/news/components";
import { getNewsWithPaginate } from "@/features/news/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DynamicPagination } from "@/features/dashboard/news/components/paginate";
import { Plus } from "lucide-react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const news = await getNewsWithPaginate(currentPage);
  const totalPage = news?.metadata.lastPage;

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Kelola Berita</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <DynamicPagination totalPages={totalPage ? totalPage : 0} />
          <Link href="/dashboard/news/create" className="w-full sm:w-auto">
            <Button
              variant={"outline"}
              className="w-full bg-emerald-400 text-emerald-800 hover:bg-emerald-300 hover:text-emerald-600"
            >
              Buat Berita Baru <Plus />
            </Button>
          </Link>
        </div>
      </div>
      <NewsList data={news?.data || []} />
    </div>
  );
}
