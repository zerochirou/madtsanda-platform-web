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
import { ALargeSmall, Calendar, Tag, ToggleLeft, User } from "lucide-react";
import { UpdateDropdown } from "./update-dropdown";
import { toast } from "sonner";

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
                    {item.title}
                  </span>
                </TableCell>
                <TableCell className="border-r-2 border-dashed">
                  {item.newsCategory?.category || "-"}
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
                      Pinned
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handlePinToggle(item.id, Boolean(item.pin))
                      }
                      variant="outline"
                      className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-400 hover:text-slate-700 border-slate-400 text-slate-600 h-6 capitalize rounded-xl w-full"
                    >
                      Unpinned
                    </Button>
                  )}
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right">
                  {item.user.username || "-"}
                </TableCell>
                <TableCell className="font-mono text-right">
                  {new Date(item.createdAt).toLocaleDateString("id-ID")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
