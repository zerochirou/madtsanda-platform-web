"use client";

import { NewsListProps } from "@/types/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button, Card } from "@/components/ui";
import { togglePinNewsAction } from "@/features/dashboard/news/actions/update-pin";
import {
  ALargeSmall,
  Calendar,
  Tag,
  ToggleLeft,
  User,
  User2,
} from "lucide-react";
import { UpdateDropdown } from "./update-dropdown";
import { toast } from "sonner";
import Link from "next/link";
import { formatDateUTC } from "@/lib/date";

export function NewsList({ data }: NewsListProps) {
  async function handlePinToggle(id: string, currentPin: boolean) {
    const result = await togglePinNewsAction(id, currentPin);
    if (result) {
      toast.success("Pin berita berhasil diubah");
    }
  }

  if (!data || data.length === 0)
    return <div className="p-4 text-muted-foreground">Belum ada berita.</div>;

  return (
    <Card className="overflow-hidden p-0 border border-border/60 shadow-sm">
      <div className="w-full overflow-x-auto rounded-md">
        <Table className="min-w-[980px]">
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="border-r border-border/40">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <ALargeSmall className="size-4" />
                  Judul
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-44">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <Tag className="size-4" />
                  Kategori
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-32">
                <span className="flex justify-center flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <ToggleLeft className="size-4" />
                  Pinned
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-40">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <User className="size-4" />
                  Author
                </span>
              </TableHead>
              <TableHead className="w-36">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <Calendar className="size-4" />
                  Tanggal
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/40 transition-colors">
                <TableCell className="border-r border-border/40 py-3">
                  <span className="flex flex-row items-center gap-2">
                    <UpdateDropdown id={item.id} />
                    <Link
                      href={`/dashboard/news/edit/${item.id}`}
                      prefetch
                      className="hover:underline hover:text-emerald-500 transition-colors font-medium text-sm text-foreground"
                    >
                      {item.title}
                    </Link>
                  </span>
                </TableCell>
                <TableCell className="border-r border-border/40 capitalize py-3">
                  <Badge
                    variant="outline"
                    className="h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs"
                  >
                    {item.newsCategory?.category || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="border-r border-border/40 py-3 text-center">
                  {item.pin ? (
                    <Button
                      onClick={() =>
                        handlePinToggle(item.id, Boolean(item.pin))
                      }
                      variant="outline"
                      size="sm"
                      className="h-7 px-3 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/50"
                    >
                      Pinned
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handlePinToggle(item.id, Boolean(item.pin))
                      }
                      variant="ghost"
                      size="sm"
                      className="h-7 px-3 rounded-full text-xs text-muted-foreground hover:text-foreground"
                    >
                      Unpinned
                    </Button>
                  )}
                </TableCell>
                <TableCell className="border-r border-border/40 py-3">
                  <Badge
                    variant="outline"
                    className="h-6 gap-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium text-xs"
                  >
                    <User2 className="size-3" />
                    {item.user.username || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground py-3">
                  {formatDateUTC(item.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
