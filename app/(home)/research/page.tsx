import BlockRender from "@/components/shared/block-render/render";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  getResearchTag,
  getResearchWithPaginate,
} from "@/features/dashboard/research/service";
import { formatReadableDate } from "@/lib/date";

export default async function ResearchPage() {
  const tag = await getResearchTag();
  const research = await getResearchWithPaginate();
  console.log(research);
  return (
    <div className="mt-30 max-w-6xl mx-auto h-screen">
      <ul className="flex flex-row items-center gap-4">
        {tag?.data.map((i) => {
          return (
            <span
              key={i.id}
              className="mb-3 rounded-md inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 px-4 py-1 text-md font-semibold text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400"
            >
              {i.category}
            </span>
          );
        })}
      </ul>
      <div className="">
        <ul className="grid grid-cols-3 gap-2">
          {research?.data?.map((i) => {
            return (
              <Card key={i.id}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={"outline"} className="bg-emerald-300">
                      {i.researchTag.category}
                    </Badge>
                    <Badge variant={"outline"} className="bg-emerald-300">
                      {formatReadableDate(i.createdAt)}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{i.title}</CardTitle>
                  <div className="flex justify-end">
                    <Button
                      variant={"secondary"}
                      size={"sm"}
                    >
                      Baca lebih lanjut
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
