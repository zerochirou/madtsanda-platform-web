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
    return <div className="p-4">Belum ada koleksi library.</div>;
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="w-full overflow-x-auto rounded-md">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead className="border-r">
                <span className="flex flex-row items-center justify-end gap-1 opacity-50">
                  <ALargeSmall className="size-4" />
                  Judul
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex flex-row items-center justify-end gap-1 opacity-50">
                  <Library className="size-4" />
                  Penulis
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex flex-row items-center justify-end gap-1 opacity-50">
                  <Tag className="size-4" />
                  Kategori
                </span>
              </TableHead>
              <TableHead className="border-r">
                <span className="flex flex-row items-center justify-end gap-1 opacity-50">
                  <Calendar className="size-4" />
                  Tahun
                </span>
              </TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="border-r-2 border-dashed font-semibold">
                  {item.title}
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right">
                  {item.author}
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right">
                  <Badge
                    variant="outline"
                    className="h-6 w-full rounded-lg border-emerald-600 bg-emerald-100 font-bold text-emerald-600"
                  >
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="border-r-2 border-dashed text-right font-mono">
                  {item.year}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Badge variant={item.available ? "default" : "secondary"}>
                      {item.available ? "Tersedia" : "Dipinjam"}
                    </Badge>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/library/edit/${item.id}`}>
                        <Pencil className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={pending}
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="size-4" />
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
