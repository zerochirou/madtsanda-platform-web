import { VisiMisiTabs } from "@/features/about/components/visi-misi-tabs";

export const metadata = {
  title: "Visi, Misi & Tujuan Madrasah | MTsN 2 Kota Kediri",
  description: "Arah pembangunan pendidikan dan komitmen karakter MTsN 2 Kota Kediri dalam mencetak generasi emas berakhlakul karimah dan unggul di kancah global.",
};

export default function VisiMisiPage() {
  return (
    <div className="mt-20 min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white selection:bg-emerald-500 selection:text-white">
      {/* ==================== HERO (Light theme, matching budaya screenshot) ==================== */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-zinc-950">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:20px_20px] opacity-60" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center space-y-4">
          <p className="text-sm font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
            Arah & Kebijakan
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white">
            Visi & Misi{" "}
            <span className="relative inline-block text-emerald-600 dark:text-emerald-400">
              Madrasah Kami
              <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-emerald-500" />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Komitmen terarah MTsN 2 Kota Kediri untuk membina akademisi cemerlang dengan landasan moral Islami, berwawasan global, dan berbudaya lingkungan.
          </p>
        </div>
      </section>

      {/* ==================== TABS CONTENT ==================== */}
      <section className="mx-auto max-w-7xl px-6 py-8 pb-24">
        <VisiMisiTabs />
      </section>
    </div>
  );
}