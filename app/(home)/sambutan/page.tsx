import { FadeLeft, FadeRight } from "@/components/animation/animations";
import Image from "next/image";

export default function SambutanPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <FadeLeft>
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Sambutan Kepala Madrasah
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
          <FadeRight>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/images/muh-nizar2.jpeg"
                alt="Students collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeRight>
        </div>
      </div>
    </div>
  );
}
