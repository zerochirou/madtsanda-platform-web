"use client";

import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button, Card } from "@/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteLibraryAction } from "@/features/dashboard/library/actions/delete";
import { LibraryListProps } from "@/types/components";
import {
  ALargeSmall,
  Calendar,
  Library,
  Pencil,
  Tag,
  Trash2,
} from "lucide-react";

export function LibraryList({ data }: LibraryListProps) {
  const [pending, startTransition] = useTransition();

  function handleDelete(id: string) {
    startTransition(async () => {
      const result = await deleteLibraryAction(id);

      if (!result) {
        toast.error("Gagal menghapus koleksi library");
        return;
      }

      toast.success("Koleksi library berhasil dihapus");
    });
  }

  if (!data || data.length === 0) {
    return <div className="p-4 text-muted-foreground">Belum ada koleksi library.</div>;
  }

  return (
    <Card className="overflow-hidden p-0 border border-border/60 shadow-sm">
      <div className="w-full overflow-x-auto rounded-md">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="border-r border-border/40">
                <span className="flex flex-row items-center justify-start gap-1.5 opacity-70 font-semibold">
                  <ALargeSmall className="size-4" />
                  Judul
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-52">
                <span className="flex flex-row items-center justify-start gap-1.5 opacity-70 font-semibold">
                  <Library className="size-4" />
                  Penulis
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-44">
                <span className="flex flex-row items-center justify-start gap-1.5 opacity-70 font-semibold">
                  <Tag className="size-4" />
                  Kategori
                </span>
              </TableHead>
              <TableHead className="border-r border-border/40 w-28">
                <span className="flex flex-row items-center justify-center gap-1.5 opacity-70 font-semibold">
                  <Calendar className="size-4" />
                  Tahun
                </span>
              </TableHead>
              <TableHead className="text-right w-44">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/40 transition-colors">
                <TableCell className="border-r border-border/40 font-medium py-3 text-foreground">
                  {item.title}
                </TableCell>
                <TableCell className="border-r border-border/40 text-muted-foreground py-3 text-sm">
                  {item.author}
                </TableCell>
                <TableCell className="border-r border-border/40 py-3">
                  <Badge
                    variant="outline"
                    className="h-6 rounded-lg border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 font-semibold text-xs text-emerald-700 dark:text-emerald-300"
                  >
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="border-r border-border/40 text-center font-mono text-xs text-muted-foreground py-3">
                  {item.year}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex justify-end items-center gap-2">
                    <Badge variant={item.available ? "default" : "secondary"} className="text-xs">
                      {item.available ? "Tersedia" : "Dipinjam"}
                    </Badge>
                    <Button asChild variant="outline" size="sm" className="h-8 w-8 p-0">
                      <Link href={`/dashboard/library/edit/${item.id}`}>
                        <Pencil className="size-3.5" />
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="h-8 w-8 p-0"
                      disabled={pending}
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
