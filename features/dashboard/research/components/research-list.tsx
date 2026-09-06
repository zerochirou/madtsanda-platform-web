"use client";

import { ResearchListProps } from "@/types/components";
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
import { toggleResearchApprovalAction } from "@/features/dashboard/research/actions/update-status";
import {
  ALargeSmall,
  Calendar,
  Tag,
  ToggleLeft,
  User,
  CheckCircle,
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
    return <div className="p-4 text-muted-foreground">Belum ada penelitian.</div>;

  const handleStatusToggle = async (id: string, currentStatus: string) => {
    try {
      const result = await toggleResearchApprovalAction(
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
    } catch {
      toast.error("Terjadi kesalahan saat mengubah status");
    }
  };

  return (
    <Card className="overflow-hidden p-0 border border-border/60 shadow-sm">
      <div className="w-full overflow-x-auto rounded-md">
        <Table className="min-w-[1120px]">
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="border-r border-border/40">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <ALargeSmall className="size-4" />
                  Judul
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-36">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <Paperclip className="size-4" />
                  File Paper
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-44">
                <span className="flex justify-start flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <Tag className="size-4" />
                  Kategori
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-36">
                <span className="flex justify-center flex-row items-center gap-1.5 opacity-70 font-semibold">
                  <ToggleLeft className="size-4" />
                  Status
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
                    <DropdownResearch id={item.id} />
                    <Link
                      href={`/dashboard/research/edit/${item.id}`}
                      prefetch
                      className="hover:underline hover:text-emerald-500 transition-colors font-medium text-sm text-foreground"
                    >
                      {item.title}
                    </Link>
                  </span>
                </TableCell>
                <TableCell className="border-r border-border/40 py-3">
                  <a href={item.documentUrl as string} target="_blank" rel="noopener noreferrer">
                    <Badge
                      variant="outline"
                      className="h-6 gap-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs hover:bg-emerald-100"
                    >
                      <File className="size-3" /> File Paper
                    </Badge>
                  </a>
                </TableCell>
                <TableCell className="border-r border-border/40 capitalize py-3">
                  <Badge
                    variant="outline"
                    className="h-6 rounded-lg bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-semibold text-xs"
                  >
                    {item.researchTag?.category || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="border-r border-border/40 py-3 text-center">
                  <Button
                    onClick={() => handleStatusToggle(item.id, item.status)}
                    variant="outline"
                    size="sm"
                    className={`h-7 px-3 rounded-full text-xs font-semibold ${
                      item.status === "has_done"
                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                        : "bg-muted/60 text-muted-foreground border-border hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      {item.status === "has_done" ? (
                        <>
                          <CheckCircle className="size-3 text-emerald-600 dark:text-emerald-400" />
                          <span>Selesai</span>
                        </>
                      ) : (
                        <>
                          <ClockFading className="size-3 text-muted-foreground" />
                          <span>Pending</span>
                        </>
                      )}
                    </div>
                  </Button>
                </TableCell>
                <TableCell className="border-r border-border/40 py-3">
                  <Badge
                    variant="outline"
                    className="h-6 gap-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium text-xs"
                  >
                    <User2 className="size-3" />
                    {item.user?.username || "-"}
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
