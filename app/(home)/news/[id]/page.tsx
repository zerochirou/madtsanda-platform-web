import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allNews } from "@/components/data/news";
import { getNewsByIdService } from "@/features/news/services";
import { formatReadableDate } from "@/lib/date";

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
import { BlockRenderDynamic } from "@/components/shared/block-render";

export function Share({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={`${process.env.NEXT_PUBLIC_BASE_URL}/news/${id}`}
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = await getNewsByIdService(id);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Berita tidak ditemukan</h1>
        <Link href="/news">
          <Button variant="outline">Kembali ke News Portal</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 pb-20 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-emerald-500 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke News Portal
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-zinc-500">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              {news.data.newsCategory.category}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3 w-3" />
                <span>{formatReadableDate(news.data.createdAt)}</span>
              </div>
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {news.data.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                {news.data.user.username.slice(0, 1)}
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  {news.data.user.username}
                </p>
                <p className="text-xs text-zinc-500">Editor Utama</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Share id={news.data.id}/>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border mb-12">
          <Image
            src={news.data.imageUrl as string}
            alt={news.data.title}
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <BlockRenderDynamic md={news.data.content} />
        </div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-zinc-500">Tags:</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  {news.data.newsCategory.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
