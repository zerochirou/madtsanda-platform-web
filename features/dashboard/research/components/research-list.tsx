"use client";

import { ResearchListProps } from "@/types/components";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function ResearchList({ data }: ResearchListProps) {
  if (!data || data.length === 0) return <div className="p-4">Belum ada penelitian.</div>;

  return (
    <div className="border rounded-md mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Judul</TableHead>
            <TableHead>Abstrak</TableHead>
            <TableHead>File</TableHead>
            <TableHead>Tanggal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="max-w-xs truncate">{item.abstrack}</TableCell>
              <TableCell>
                {item.fileUrl ? (
                  <a href={item.fileUrl} target="_blank" rel="noreferrer" className="text-emerald-500 hover:underline">
                    Lihat Dokumen
                  </a>
                ) : (
                  <Badge variant="secondary">Tidak ada</Badge>
                )}
              </TableCell>
              <TableCell>{new Date(item.createdAt).toLocaleDateString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
