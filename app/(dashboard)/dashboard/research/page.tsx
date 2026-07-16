import ResearchClient from "@/features/dashboard/research/components/client-home-page";
import { getResearchWithPaginate } from "@/features/dashboard/research/service";

export default async function Page() {
  const research = await getResearchWithPaginate(1);
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Research Platform</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Cari dan temukan karya ilmiah murid MTsN 2 Kota Kediri.
        </p>
      </div>
      <ResearchClient
        initialData={
          research || {
            data: [],
            metadata: {
              total: 0,
              perPage: 10,
              currentPage: 1,
              lastPage: 1,
              firstPage: 1,
              firstPageUrl: "",
              lastPageUrl: "",
              nextPageUrl: null,
              previousPageUrl: null,
            },
          }
        }
      />
    </div>
  );
}
