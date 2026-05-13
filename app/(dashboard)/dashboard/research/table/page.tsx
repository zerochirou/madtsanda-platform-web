
import { ResearchList } from "@/features/dashboard/research/components";
import { getResearchWithPaginate } from "@/features/dashboard/research/service";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const research = await getResearchWithPaginate(1);
  // console.log(research)
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Kelola Penelitian</h1>
        <Link href="/dashboard/research/create">
          <Button>Unggah Penelitian</Button>
        </Link>
      </div>
      <ResearchList data={research?.data || []} />
    </div>
  )
}