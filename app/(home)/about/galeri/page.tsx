import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Camera, ImageIcon } from "lucide-react";
import { Badge, Button } from "@/components/ui";
import { galleryItems } from "@/components/data/gallery";

export const metadata: Metadata = {
  title: "Galeri Madtsanda | MTsN 2 Kota Kediri",
  description:
    "Galeri statis MTsN 2 Kota Kediri berisi dokumentasi gedung, lingkungan, dan aktivitas murid Madtsanda.",
};

export default function GaleriMadtsandaPage() {
  const featured = galleryItems.filter((item) => item.featured);
  const regular = galleryItems.filter((item) => !item.featured);

  return (
    <div className="min-h-screen bg-white pt-24 text-zinc-950 dark:bg-zinc-950 dark:text-white md:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Badge className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25">
              <Camera className="size-3.5" />
              Galeri Madtsanda
            </Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              Dokumentasi visual madrasah
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
              Cuplikan gedung, lingkungan, dan aktivitas murid MTsN 2 Kota
              Kediri. Semua gambar di halaman ini sudah dikompresi agar tetap
              ringan saat dibuka di desktop maupun perangkat mobile.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href="/about/sejarah">
                  Lihat sejarah
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/news">Kabar Madtsanda</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {featured.map((item, index) => (
              <div
                key={item.imageSrc}
                className={`group relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${index === 0 ? "aspect-[16/11]" : "aspect-square"}`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 1024px) 100vw, 42vw"
                        : "(max-width: 1024px) 33vw, 14vw"
                    }
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
                    {item.category}
                  </p>
                  <h2 className="mt-1 text-lg font-bold">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-500">
                Arsip Visual
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Ruang, kegiatan, dan lingkungan
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Galeri ini menggunakan gambar statis dari dokumentasi internal
              agar tetap stabil tanpa dependensi layanan eksternal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regular.map((item) => (
              <article
                key={item.imageSrc}
                className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-emerald-500/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    <ImageIcon className="size-3.5" />
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
