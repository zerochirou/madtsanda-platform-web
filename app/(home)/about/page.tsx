import Image from "next/image";
import {
  PageHero,
  FadeUp,
  FadeRight,
  FadeLeft,
} from "@/components/animation/animations";
import { teachersData } from "@/components/data/teachers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TeacherDirectory } from "@/features/home/components/teacher-directory";

export default function About() {
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHero
        title="Profil Madtsanda"
        subtitle="Sejarah Kami"
        description="MTsN 2 Kota Kediri merupakan lembaga pendidikan menengah pertama yang unggul dalam prestasi dan kepedulian lingkungan (Adiwiyata Nasional)."
        imageSrc="/images/gedung-madtsanda.jpg"
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeRight>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
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
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Visi & Misi
            </h2>
            <div className="w-16 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 italic">
              &ldquo;Unggul dalam Prestasi dan ISTIKOMAH (Islami, Terampil,
              Inovatif, Kompetitif, Berakhlakul Karimah) serta Peduli
              Lingkungan.&ldquo;
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Menciptakan madrasah yang berbasis nilai-nilai agama, empati, dan
              intelektualitas sehingga menumbuhkan penghayatan dan pengamalan
              ajaran Islam yang bernuansa kebangsaan dan berakhlakul karimah.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Kami juga mendorong penguasaan keterampilan dan pengembangan
              teknologi untuk menghadapi tantangan kehidupan di masa mendatang,
              serta menciptakan lingkungan yang sehat dan asri.
            </p>
          </FadeLeft>
        </div>

        <FadeUp>
          <div className="max-w-4xl mx-auto mb-32">
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
            <TeacherDirectory/>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
