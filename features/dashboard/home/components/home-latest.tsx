import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Badge } from "lucide-react";

export function HomeLatest() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Lesson</h2>
        <a href="#" className="text-blue-600 font-semibold">
          See all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500">
                MENTOR
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500">
                TYPE
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500">
                DESC
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-muted/50 dark:hover:bg-zinc-800/50 transition-colors">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">Padhang Satrio</p>
                    <p className="text-xs text-gray-500">2/16/2004</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 text-xs">
                  UI/UX DESIGN
                </Badge>
              </td>
              <td className="py-4 px-4 text-sm">Understand Of UI/UX Design</td>
              <td className="py-4 px-4">
                <ArrowRight className="w-4 h-4 text-blue-600 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
