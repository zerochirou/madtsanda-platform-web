"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Award, 
  Target, 
  GraduationCap, 
  PenTool, 
  Heart, 
  ShieldCheck, 
  Compass,
  Flame
} from "lucide-react";

// Reusable fade-up animation component
export const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade-in from left
export const FadeLeft = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Fade-in from right
export const FadeRight = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale-in animation
export const ScaleIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container for children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const getHeroCards = (title: string) => {
  const t = title.toLowerCase();
  
  if (t.includes("osis") || t.includes("mpk") || t.includes("organisasi")) {
    return [
      { Icon: Users, title: "Kolaborasi", desc: "Membangun sinergi dan dinamisme kesiswaan." },
      { Icon: Target, title: "Kepemimpinan", desc: "Mencetak karakter pemimpin masa depan." },
      { Icon: Sparkles, title: "Inovasi Program", desc: "Menyalurkan aspirasi melalui aksi kreatif." },
    ];
  }
  
  if (t.includes("budaya") || t.includes("karakter")) {
    return [
      { Icon: ShieldCheck, title: "Akhlak Karimah", desc: "Pilar karakter mulia berbasis keagamaan." },
      { Icon: Heart, title: "Disiplin & Mandiri", desc: "Membentuk pribadi tangguh dan bertanggung jawab." },
      { Icon: Compass, title: "Aqidah Kuat", desc: "Fondasi ibadah yang benar dan berprinsip." },
    ];
  }
  
  if (t.includes("fivesa") || t.includes("jurnal")) {
    return [
      { Icon: PenTool, title: "Jurnalistik Siswa", desc: "Meliput kegiatan dan melatih keterampilan media." },
      { Icon: BookOpen, title: "Karya Majalah", desc: "Penerbitan majalah tahunan karya orisinil kesiswaan." },
      { Icon: Award, title: "Dokumentasi", desc: "Mengabadikan momen bersejarah madrasah." },
    ];
  }
  
  if (t.includes("perpustakaan") || t.includes("library") || t.includes("buku")) {
    return [
      { Icon: BookOpen, title: "Literasi Digital", desc: "Akses ribuan ebook dan jurnal edukatif." },
      { Icon: Compass, title: "Referensi Riset", desc: "Pusat rujukan karya ilmiah dan penelitian siswa." },
      { Icon: Sparkles, title: "Katalog Pintar", desc: "Pencarian literatur mudah, cepat, dan terorganisir." },
    ];
  }
  
  if (t.includes("ekstrakulikuler") || t.includes("ekskul") || t.includes("ekstrakurikuler")) {
    return [
      { Icon: Award, title: "25+ Ekskul", desc: "Wadah pengembangan bakat dan minat olahraga, seni, sains." },
      { Icon: Flame, title: "Mengukir Prestasi", desc: "Bimbingan intensif mencetak juara daerah & nasional." },
      { Icon: Users, title: "Solidaritas Tim", desc: "Komunitas belajar yang suportif dan kompak." },
    ];
  }
  
  if (t.includes("fasilitas") || t.includes("sarana")) {
    return [
      { Icon: Sparkles, title: "Sarana Modern", desc: "Lab komputer, bahasa, IPA, dan gedung digital." },
      { Icon: Heart, title: "Lingkungan Asri", desc: "Area belajar nyaman, bersih, dan ramah anak." },
      { Icon: ShieldCheck, title: "Akses Aman", desc: "Fasilitas bersertifikasi standar keselamatan tinggi." },
    ];
  }
  
  if (t.includes("ppdb") || t.includes("daftar") || t.includes("penerimaan")) {
    return [
      { Icon: GraduationCap, title: "PPDB Online", desc: "Sistem pendaftaran dan seleksi digital transparan." },
      { Icon: Award, title: "Madrasah Pilihan", desc: "Lembaga pendidikan Islam terakreditasi A Kediri." },
      { Icon: Sparkles, title: "Kuota Kompetitif", desc: "Bergabung bersama siswa berprestasi pilihan." },
    ];
  }
  
  if (t.includes("unggulan") || t.includes("program")) {
    return [
      { Icon: GraduationCap, title: "Kelas Tahfidz", desc: "Program unggulan penghafal Al-Qur'an." },
      { Icon: Award, title: "Olimpiade Sains", desc: "Bimbingan kompetisi sains tingkat nasional." },
      { Icon: Target, title: "Kelas Riset", desc: "Penelitian ilmiah remaja terintegrasi." },
    ];
  }
  
  return [
    { Icon: GraduationCap, title: "Akademik Unggul", desc: "Kurikulum modern berstandar nasional." },
    { Icon: Award, title: "Prestasi Juara", desc: "Pengembangan potensi berbuah medali." },
    { Icon: Heart, title: "Bina Karakter", desc: "Menanamkan nilai akhlak di setiap aspek." },
  ];
};

// Page hero for sub-pages (without image backgrounds)
export function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
}: {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
}) {
  const cards = getHeroCards(title);
  
  const words = title.split(" ");
  const lastWord = words.length > 1 ? words.pop() : title;
  const mainTitle = words.length > 0 ? words.join(" ") : "";

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-linear-to-b from-emerald-50/20 via-white to-white dark:from-zinc-900/10 dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200/60 dark:border-zinc-800/40">
      {/* Subtle grid background with mask to fade out at boundaries */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:20px_20px] opacity-60 z-0 pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle at 60% 50%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at 60% 50%, black 40%, transparent 90%)",
        }}
      />
      
      {/* Premium ambient glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[150px] rounded-full z-0 pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 dark:bg-teal-500/8 blur-[100px] rounded-full z-0 pointer-events-none animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Copy & Callouts */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30 backdrop-blur-xs mb-5 shadow-xs w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {subtitle}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mb-5 leading-tight"
            >
              {mainTitle && `${mainTitle} `}
              <span className="bg-linear-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                {lastWord}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          {/* Right Column - Visual Abstract Card Deck */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-[340px]">
            {/* Concentric rotating design circles */}
            <div className="absolute w-72 h-72 rounded-full border border-dashed border-emerald-500/10 dark:border-emerald-500/20 animate-[spin_45s_linear_infinite] pointer-events-none" />
            <div className="absolute w-52 h-52 rounded-full border border-emerald-500/5 dark:border-emerald-500/10 animate-[spin_25s_linear_infinite_reverse] pointer-events-none" />
            
            {/* Ambient center pendar */}
            <div className="absolute w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 0.6, delay: 0.3 }
              }}
              whileHover={{ scale: 1.03 }}
              className="absolute -top-4 -left-4 z-10 w-[230px] p-4 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none flex items-start gap-3 select-none transition-colors duration-300 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                {React.createElement(cards[0].Icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-0.5">{cards[0].title}</h4>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal">{cards[0].desc}</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, 8, 0],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "reverse", duration: 4.6, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.4 },
                scale: { duration: 0.6, delay: 0.4 }
              }}
              whileHover={{ scale: 1.03 }}
              className="absolute top-16 -right-4 z-20 w-[240px] p-4 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none flex items-start gap-3 select-none transition-colors duration-300 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                {React.createElement(cards[1].Icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-0.5">{cards[1].title}</h4>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal">{cards[1].desc}</p>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "reverse", duration: 3.5, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.5 },
                scale: { duration: 0.6, delay: 0.5 }
              }}
              whileHover={{ scale: 1.03 }}
              className="absolute -bottom-4 left-6 z-10 w-[230px] p-4 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg shadow-zinc-200/20 dark:shadow-none flex items-start gap-3 select-none transition-colors duration-300 hover:border-emerald-400/50 dark:hover:border-emerald-500/50 group cursor-default"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                {React.createElement(cards[2].Icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-0.5">{cards[2].title}</h4>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal">{cards[2].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
