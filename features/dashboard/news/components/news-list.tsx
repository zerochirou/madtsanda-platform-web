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
    return <div className="p-4">Belum ada berita.</div>;

  return (
    <Card className="p-0">
      <div className="rounded-md">
        <Table>
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="border-r">
                <span className="flex justify-end flex-row items-center gap-1 opacity-50">
                  <ALargeSmall className="size-4" />
                  Judul
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex justify-end flex-row items-center gap-1 opacity-50">
                  <Tag className="size-4" />
                  Kategori
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex justify-end flex-row items-center gap-1 opacity-50">
                  <ToggleLeft className="size-4" />
                  Pinned
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex justify-end flex-row items-center gap-1 opacity-50">
                  <User className="size-4" />
                  Author
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex justify-end flex-row items-center gap-1 opacity-50">
                  <Calendar className="size-4" />
                  Tanggal
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="border-r-2 border-dashed">
                  <span className="flex flex-row items-center gap-1">
                    <UpdateDropdown id={item.id} />
                    <Link
                      href={`/dashboard/news/edit/${item.id}`}
                      prefetch
                      className="hover:underline hover:text-emerald-400 transition-all duration-150 ease-in-out font-semibold"
                    >
                      {item.title}
                    </Link>
                  </span>
                </TableCell>
                <TableCell className="border-r-2 border-dashed capitalize text-right">
                  <Badge
                    variant={"outline"}
                    className="w-full h-6 rounded-lg bg-emerald-100 border border-emerald-600 text-emerald-600 font-bold"
                  >
                    {item.newsCategory?.category || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="border-r-2 border-dashed">
                  {item.pin ? (
                    <Button
                      onClick={() =>
                        handlePinToggle(item.id, Boolean(item.pin))
                      }
                      variant="outline"
                      className="bg-purple-200 hover:bg-purple-300 dark:bg-purple-700 dark:text-purple-300 dark:border-purple-200 hover:text-purple-700 border-purple-400 text-purple-600 h-6 capitalize rounded-xl w-full"
                    >
                      Unpinned
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handlePinToggle(item.id, Boolean(item.pin))
                      }
                      variant="outline"
                      className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-400 hover:text-slate-700 border-slate-400 text-slate-600 h-6 capitalize rounded-xl w-full"
                    >
                      Pinned
                    </Button>
                  )}
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right">
                  <Badge
                    variant={"outline"}
                    className="w-full h-6 rounded-lg bg-blue-100 border border-blue-600 text-blue-600 font-bold"
                  >
                    <User2 className="size-2" />
                    {item.user.username || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-right">
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
