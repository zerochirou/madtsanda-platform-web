import Image from "next/image";
import {
  PageHero,
  FadeUp,
  FadeRight,
  FadeLeft,
} from "@/components/animation/animations";
import { TeacherDirectory } from "@/features/home/components/teacher-directory";
import { Button } from "@/components/ui";
import Link from "next/link";
import {
  breadcrumbJsonLd,
  buildMetadata,
  schoolJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Profil MTsN 2 Kota Kediri | Sejarah, Visi, Misi, dan Guru",
  description:
    "Kenali profil MTsN 2 Kota Kediri, sejarah madrasah, visi misi ISTIKOMAH, budaya sekolah, dan tenaga pendidik Madtsanda.",
  path: "/about",
  keywords: ["profil MTsN 2 Kota Kediri", "visi misi Madtsanda", "sejarah MTsN 2 Kota Kediri"],
});

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            schoolJsonLd(),
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Profil", path: "/about" },
            ]),
          ]),
        }}
      />
      <PageHero
        title="Profil Madtsanda"
        subtitle="Sejarah Kami"
        description="MTsN 2 Kota Kediri merupakan lembaga pendidikan menengah pertama yang unggul dalam prestasi dan kepedulian lingkungan (Adiwiyata Nasional)."
        imageSrc="/images/gedung-madtsanda.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-32">
        <div className="mb-20 grid gap-10 md:grid-cols-2 md:items-center lg:mb-32 lg:gap-16">
          <FadeRight>
            <div className="relative h-72 overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl dark:border-zinc-800 sm:h-96 lg:h-[28rem]">
              <Image
                src="/images/kegiatan-sekolah.jpg"
                alt="Students collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeRight>
          <FadeLeft>
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white md:text-5xl">
              Visi & Misi
            </h2>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            <p className="mb-6 text-lg font-bold text-emerald-600 dark:text-emerald-400 sm:text-xl">
              &ldquo;Unggul dalam Prestasi dan ISTIKOMAH (Islami, Terampil,
              Inovatif, Kompetitif, Berakhlakul Karimah) serta Peduli
              Lingkungan.&ldquo;
            </p>
            <p className="mb-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Menciptakan madrasah yang berbasis nilai-nilai agama, empati, dan
              intelektualitas sehingga menumbuhkan penghayatan dan pengamalan
              ajaran Islam yang bernuansa kebangsaan dan berakhlakul karimah.
            </p>
            <p className="mb-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Kami juga mendorong penguasaan keterampilan dan pengembangan
              teknologi untuk menghadapi tantangan kehidupan di masa mendatang,
              serta menciptakan lingkungan yang sehat dan asri.
            </p>
          </FadeLeft>
        </div>

        <Link href={"/sambutan"}>
          <Button
            variant="outline"
            className="bg-emerald-400 text-white"
            size="lg"
          >
            Sambutan Kepala Madrasah
          </Button>
        </Link>

        <FadeUp>
          <div className="mx-auto mb-20 max-w-4xl lg:mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
              Sejarah Madrasah
            </h2>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-12 mx-auto"></div>
            <div className="prose prose-lg dark:prose-invert prose-emerald mx-auto text-zinc-600 dark:text-zinc-400">
              <p>
                MTsN 2 Kota Kediri, yang dikenal sebagai Matsanda, merupakan
                madrasah tsanawiyah negeri unggulan yang berlokasi di Jalan
                Sunan Ampel No. 12, Kelurahan Ngronggo, Kota Kediri. Madrasah
                ini didirikan pada tanggal 16 Maret 1978 dengan nama awal MTs
                Negeri Kediri II dan berada di bawah naungan Kementerian Agama
                Republik Indonesia.
              </p>
              <p>
                Secara historis, keberadaan madrasah ini tidak terlepas dari
                institusi PGAN 6 yang telah berdiri sejak tahun 1962. Pada tahun
                1978, PGAN mengalami perubahan menjadi PGAN Kediri dengan masa
                belajar tiga tahun.
              </p>
              <p>
                Dalam perkembangannya, MTsN 2 Kota Kediri telah menunjukkan
                eksistensinya sebagai lembaga pendidikan Islam yang unggul dan
                kompetitif. Madrasah ini berkembang di atas lahan ±25.000 meter
                persegi dengan orientasi pada pendidikan berbasis riset,
                penguatan akhlakul karimah, serta kepedulian terhadap lingkungan
                melalui program Adiwiyata. Identitas sebagai madrasah riset
                diperkuat dengan puluhan karya inovatif siswa yang telah
                memperoleh pengakuan Hak Kekayaan Intelektual (HaKI).
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
              Tenaga Pendidik
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12">
              Didukung oleh lebih dari 100 staf pengajar profesional dan
              berdedikasi tinggi.
            </p>
            <TeacherDirectory />
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
