"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Settings,
  Lightbulb,
  Users,
  Trophy,
  Leaf,
  Heart,
  Target,
  CheckCircle2,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { visiData, misiData, tujuanData } from "@/components/data/visi-misi-data";

const tabItems = [
  { id: "visi", label: "Visi Madrasah", icon: Target },
  { id: "misi", label: "7 Langkah Misi", icon: BookOpen },
  { id: "tujuan", label: "Tujuan Strategis", icon: Trophy },
];

const istikomahBreakdown = [
  { letter: "I", title: "Islami", desc: "Menanamkan nilai-nilai keislaman, keimanan, dan ketaqwaan dalam setiap aspek kegiatan pembelajaran." },
  { letter: "S", title: "Santun & Sinergi", desc: "Membentuk pribadi yang sopan, menghargai sesama, dan mampu bekerjasama demi kemajuan bersama." },
  { letter: "T", title: "Terampil", desc: "Mengasah keterampilan hidup, pemanfaatan teknologi, dan kesiapan menghadapi tantangan masa depan." },
  { letter: "I", title: "Inovatif", desc: "Mendorong pemikiran kreatif untuk melahirkan ide-ide baru yang solutif di bidang sains dan riset." },
  { letter: "K", title: "Kompetitif", desc: "Menumbuhkan semangat keunggulan untuk bersaing secara sehat di tingkat nasional maupun internasional." },
  { letter: "O", title: "Optimis", desc: "Melatih rasa percaya diri dan pantang menyerah dalam menggapai prestasi terbaik." },
  { letter: "M", title: "Mandiri", desc: "Membiasakan kemandirian, tanggung jawab pribadi, serta disiplin tinggi dalam belajar." },
  { letter: "A", title: "Berakhlakul Karimah", desc: "Menjunjung tinggi keluhuran budi pekerti, kejujuran, dan empati sosial." },
  { letter: "H", title: "Harmonis & Hijau", desc: "Mewujudkan keselarasan hidup dengan sesama dan menanamkan rasa peduli terhadap pelestarian lingkungan hidup." },
];

const misiIcons = [BookOpen, Settings, Lightbulb, Users, Trophy, Leaf, Heart];

export function VisiMisiTabs() {
  const [activeTab, setActiveTab] = useState("visi");
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [activeMisi, setActiveMisi] = useState(0);

  return (
    <div className="space-y-12">
      {/* Custom Premium Tabs Navigation */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-zinc-100 p-1.5 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
          {tabItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-emerald-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tabs Content Area */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "visi" && (
            <motion.div
              key="visi"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {/* Visi Quote Block */}
              <div className="relative text-center py-8 px-6 sm:px-12 rounded-3xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-xs">
                <div className="absolute top-4 left-6 text-7xl font-serif text-emerald-200/40 dark:text-emerald-900/30 select-none">“</div>
                <blockquote className="relative z-10 text-2xl sm:text-3xl font-black leading-relaxed text-zinc-900 dark:text-white tracking-tight italic">
                  {visiData}
                </blockquote>
                <div className="absolute bottom-2 right-6 text-7xl font-serif text-emerald-200/40 dark:text-emerald-900/30 select-none">”</div>
              </div>

              {/* Interactive ISTIKOMAH Acronym Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-sm font-bold tracking-widest text-emerald-500 uppercase">
                    BEDAH AKRONIM VISI
                  </h3>
                  <h4 className="text-xl font-extrabold text-zinc-800 dark:text-zinc-200 mt-1">
                    Pilar Karakter ISTIKOMAH
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-md mx-auto">
                    Sorot atau klik pada tiap huruf untuk meninjau secara mendalam esensi kepribadian unggul Madtsanda.
                  </p>
                </div>

                {/* Letters Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-9 gap-3">
                  {istikomahBreakdown.map((item, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredLetter(idx)}
                      onMouseLeave={() => setHoveredLetter(null)}
                      onClick={() => setHoveredLetter(hoveredLetter === idx ? null : idx)}
                      className={`relative cursor-pointer aspect-square flex items-center justify-center rounded-2xl border text-3xl font-black transition-all duration-300 select-none ${
                        hoveredLetter === idx
                          ? "bg-emerald-600 text-white border-emerald-600 scale-105 shadow-md shadow-emerald-600/20"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-emerald-300 dark:hover:border-emerald-700"
                      }`}
                    >
                      {item.letter}
                      {/* Active indicator dot */}
                      {hoveredLetter === idx && (
                        <span className="absolute bottom-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Description Box */}
                <div className="relative min-h-[100px] rounded-2xl border border-dashed border-emerald-500/20 bg-emerald-500/5 p-6 flex items-center justify-center transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {hoveredLetter !== null ? (
                      <motion.div
                        key={hoveredLetter}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-center space-y-2"
                      >
                        <h5 className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                          {istikomahBreakdown[hoveredLetter].letter} — {istikomahBreakdown[hoveredLetter].title}
                        </h5>
                        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-xl mx-auto">
                          {istikomahBreakdown[hoveredLetter].desc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-zinc-400 text-sm text-center italic"
                      >
                        Arahkan kursor Anda pada huruf-huruf ISTIKOMAH di atas
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "misi" && (
            <motion.div
              key="misi"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-[1.2fr_1fr] gap-8 max-w-5xl mx-auto"
            >
              {/* Stepper List (Left Side) */}
              <div className="space-y-4">
                {misiData.map((misi, index) => {
                  const Icon = misiIcons[index];
                  const isActive = activeMisi === index;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveMisi(index)}
                      onClick={() => setActiveMisi(index)}
                      className={`group cursor-pointer flex gap-4 items-center rounded-2xl border p-4 transition-all duration-300 ${
                        isActive
                          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 shadow-md shadow-emerald-500/5"
                          : "border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 hover:border-emerald-300 dark:hover:border-emerald-700"
                      }`}
                    >
                      {/* Step Indicator */}
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-emerald-600 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      }`}>
                        0{index + 1}
                      </div>

                      {/* Title Preview */}
                      <div className="flex-1">
                        <p className={`text-sm font-medium line-clamp-1 leading-snug ${
                          isActive ? "text-zinc-900 dark:text-white font-bold" : "text-zinc-600 dark:text-zinc-400"
                        }`}>
                          {misi}
                        </p>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${
                        isActive ? "text-emerald-600 dark:text-emerald-400 translate-x-1" : "text-zinc-300 dark:text-zinc-700"
                      }`} />
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Panel Details (Right Side) */}
              <div className="relative sticky top-28 self-start overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 flex flex-col justify-between h-[360px]">
                {/* Decorative BG pattern */}
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMisi}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Icon banner */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shadow-sm">
                      {(() => {
                        const CurrentIcon = misiIcons[activeMisi];
                        return <CurrentIcon className="h-7 w-7" />;
                      })()}
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-xs tracking-widest text-emerald-500 font-bold uppercase">
                        MISI STRATEGIS 0{activeMisi + 1}
                      </span>
                      <h4 className="text-xl font-bold leading-normal text-zinc-900 dark:text-white">
                        Langkah {activeMisi + 1}
                      </h4>
                      <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {misiData[activeMisi]}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Page dots indicator */}
                <div className="flex gap-1.5 pt-4 mt-auto">
                  {misiData.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeMisi === idx ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "tujuan" && (
            <motion.div
              key="tujuan"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {/* Header inside Tujuan */}
              <div className="text-center mb-8">
                <span className="font-mono text-xs tracking-widest text-emerald-500 font-bold uppercase">
                  TUJUAN STRATEGIS
                </span>
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mt-1">
                  Target & Sasaran Akhir
                </h3>
              </div>

              {/* List of Tujuan with custom modern checklist styling */}
              <div className="space-y-4">
                {tujuanData.map((tujuan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="group flex gap-5 items-center rounded-2xl border border-zinc-200/50 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-5 hover:border-emerald-500/40 hover:bg-emerald-500/2 dark:hover:bg-emerald-500/2 transition-all duration-300"
                  >
                    {/* Animated checklist bubble */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <p className="text-base font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                        {tujuan}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
