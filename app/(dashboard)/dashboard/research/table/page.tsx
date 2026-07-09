
import { ResearchList } from "@/features/dashboard/research/components";
import { getResearchWithPaginate } from "@/features/dashboard/research/service";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DynamicPagination } from "@/features/dashboard/news/components/paginate";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const research = await getResearchWithPaginate(currentPage);
  const totalPage = research?.metadata.lastPage;

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kelola Penelitian</h1>
        <div className="flex flex-row items-center gap-2">
          <DynamicPagination totalPages={totalPage ? totalPage : 0} />
          <Link href="/dashboard/research/create">
            <Button>Unggah Penelitian</Button>
          </Link>
        </div>
      </div>
      <ResearchList data={research?.data || []} />
    </div>
  );
}