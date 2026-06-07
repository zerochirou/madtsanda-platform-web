"use client";

import { NewsListProps, ResearchListProps } from "@/types/components";
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
import { togglePinSearchAction } from "@/features/dashboard/research/actions/update-status";
import {
  ALargeSmall,
  Calendar,
  Tag,
  ToggleLeft,
  User,
  CheckCircle,
  Circle,
  ClockFading,
  User2,
  Paperclip,
  File,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { DropdownResearch } from "./dropdown";
import { formatDateUTC } from "@/lib/date";


export function ResearchList({ data }: ResearchListProps) {
  if (!data || data.length === 0)
    return <div className="p-4">Belum ada penelitian.</div>;

  const handleStatusToggle = async (id: string, currentStatus: string) => {
    try {
      const result = await togglePinSearchAction(
        id,
        currentStatus === "has_done",
      );
      if (result) {
        toast.success(
          currentStatus === "pending"
            ? "Penelitian berhasil ditandai sebagai selesai"
            : "Penelitian berhasil ditandai sebagai pending",
        );
      } else {
        toast.error("Gagal mengubah status penelitian");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengubah status");
    }
  };

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
                  <Paperclip className="size-4" />
                  File Paper
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
                  Status
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
                    <DropdownResearch id={item.id} />
                    <Link
                      href={`/dashboard/news/edit/${item.id}`}
                      prefetch
                      className="hover:underline hover:text-emerald-400 transition-all duration-150 ease-in-out font-semibold"
                    >
                      {item.title}
                    </Link>
                  </span>
                </TableCell>
                <TableCell className="border-r-2 border-dashed">
                  <a href={item.documentUrl as string}>
                    <Badge
                      variant={"outline"}
                      className="w-full h-6 rounded-lg bg-emerald-100 border border-emerald-600 text-emerald-600 font-bold"
                    >
                      <File className="size-4 font-bold" /> File Paper
                    </Badge>
                  </a>
                </TableCell>
                <TableCell className="border-r-2 border-dashed capitalize text-right">
                  <Badge
                    variant={"outline"}
                    className="w-full h-6 rounded-lg bg-amber-100 border border-amber-600 text-amber-600 font-bold"
                  >
                    {item.researchTag?.category || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="border-r-2 border-dashed">
                  <Button
                    onClick={() => handleStatusToggle(item.id, item.status)}
                    variant="outline"
                    className={`h-6 capitalize rounded-xl w-full ${item.status === "has_done" ? "bg-green-100 hover:bg-green-200 dark:bg-green-700 dark:text-green-300 dark:border-green-200 hover:text-green-700 border-green-400 text-green-600" : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-400 hover:text-slate-700 border-slate-400 text-slate-600"}`}
                  >
                    <div className="flex items-center justify-center gap-1">
                      {item.status === "has_done" ? (
                        <>
                          <CheckCircle className="size-3" />
                          Selesai
                        </>
                      ) : (
                        <>
                          <ClockFading className="size-3" />
                          Pending
                        </>
                      )}
                    </div>
                  </Button>
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right">
                  <Badge
                    variant={"outline"}
                    className="w-full h-6 rounded-lg bg-violet-100 border border-violet-600 text-violet-600 font-bold"
                  >
                    <User2 className="size-3" />
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
