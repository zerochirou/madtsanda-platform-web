"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";import { Button } from "@/components/ui";
import { Share2 } from "lucide-react";

export function Share({ id }: { id: string }) {

  // Inisialisasi state secara dinamis sejak awal render
  const [shareUrl] = useState(() => {
    const baseUrl = typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_BASE_URL || window.location.origin
      : process.env.NEXT_PUBLIC_BASE_URL || "";
    return `${baseUrl}/news/${id}`;
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Share2 className="size-4" />
            Bagikan
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Bagikan tautan</DialogTitle>
            <DialogDescription>
              Salin tautan berita ini untuk dibagikan kepada warga Madtsanda.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                value={shareUrl}
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Tutup</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
   </div>
  );
}
