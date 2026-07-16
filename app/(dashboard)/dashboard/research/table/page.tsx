
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Kelola Penelitian</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
          <DynamicPagination totalPages={totalPage ? totalPage : 0} />
          <Link href="/dashboard/research/create" className="w-full sm:w-auto">
            <Button className="w-full">Unggah Penelitian</Button>
          </Link>
        </div>
      </div>
      <ResearchList data={research?.data || []} />
    </div>
  );
}