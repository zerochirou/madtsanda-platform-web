'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Award, Leaf, Users, ArrowRight, Sun, Moon 
} from 'lucide-react';

// ==================== TYPES ====================
interface TimelinePeriod {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  visualNote: string;
}

interface USP {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}

// ==================== DATA ====================
const timelinePeriods: TimelinePeriod[] = [
  {
    year: "1962",
    title: "Cikal Bakal",
    subtitle: "MTsN 2 Kota Kediri",
    description: "Berawal dari Pendidikan Guru Agama Negeri (PGAN) 6 yang sederhana. Sekolah ini menjadi cikal bakal lahirnya lembaga pendidikan yang kini dikenal sebagai Matsanda.",
    visualNote: "Ilustrasi bergaya klasik/sepia menampilkan bangunan sekolah sederhana dan siswa berpakaian seragam era lama."
  },
  {
    year: "1978",
    title: "Lahirnya Matsanda",
    subtitle: "16 Maret 1978",
    description: "Tanggal bersejarah ketika Matsanda resmi berdiri. Momen transisi penting dari lembaga pendidikan guru menjadi madrasah yang lebih luas dan mandiri.",
    visualNote: "Ilustrasi gerbang sekolah yang ikonik dengan nuansa klasik namun penuh harapan."
  },
  {
    year: "Saat Ini",
    title: "Era Modern",
    subtitle: "Matsanda Hari Ini",
    description: "Matsanda berkembang menjadi madrasah unggul yang menggabungkan tradisi keilmuan Islam dengan inovasi pendidikan abad 21.",
    visualNote: "Visualisasi kampus modern, laboratorium riset, taman Adiwiyata, dan prestasi siswa."
  }
];

const usps: USP[] = [
  {
    icon: Users,
    title: "Lahan Luas",
    value: "±25.000 m²",
    description: "Kampus hijau yang asri di Jalan Sunan Ampel dengan ruang terbuka yang mendukung kegiatan belajar dan pengembangan diri."
  },
  {
    icon: Award,
    title: "Madrasah Riset",
    value: "Puluhan HaKI",
    description: "Memiliki puluhan Hak Kekayaan Intelektual. Bukti nyata komitmen Matsanda sebagai pusat inovasi dan penelitian."
  },
  {
    icon: Leaf,
    title: "Adiwiyata",
    value: "Sekolah Hijau",
    description: "Peduli lingkungan melalui program Adiwiyata. Siswa aktif merawat taman dan menjaga keasrian kampus."
  }
];

// ==================== THEME TOGGLE ====================
function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

// ==================== TIMELINE ITEM ====================
function TimelineItem({ 
  period, 
  isActive, 
  onClick 
}: { 
  period: TimelinePeriod; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex min-w-[180px] flex-col items-start rounded-2xl border px-6 py-5 text-left transition-all ${
        isActive 
          ? 'border-emerald-700 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950' 
          : 'border-zinc-200 bg-white hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800'
      }`}
    >
      <div className={`font-mono text-sm tracking-widest ${isActive ? 'text-emerald-700 dark:text-emerald-400' : 'text-emerald-600 dark:text-emerald-500'}`}>
        {period.year}
      </div>
      <div className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {period.title}
      </div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{period.subtitle}</div>
    </button>
  );
}

// ==================== MAIN PAGE ====================
export default function SejarahMatsandaPage() {
  const [activeIndex, setActiveIndex] = useState(2); // Era Modern aktif default
  const activePeriod = timelinePeriods[activeIndex];

  return (
    <div className="mt-20 min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      {/* ==================== HORIZONTAL TIMELINE ==================== */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium tracking-[3px] text-emerald-600 dark:text-emerald-400">TIMELINE</div>
            <h2 className="text-4xl font-semibold tracking-tighter">Perjalanan Matsanda</h2>
          </div>
          <ThemeToggle />
        </div>

        {/* Horizontal Timeline */}
        <div className="flex gap-4 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {timelinePeriods.map((period, index) => (
            <TimelineItem
              key={index}
              period={period}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Dynamic Content Panel */}
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="grid gap-8 md:grid-cols-5">
                {/* Text Content */}
                <div className="md:col-span-3">
                  <div className="mb-2 font-mono text-sm tracking-widest text-emerald-600 dark:text-emerald-400">
                    {activePeriod.year}
                  </div>
                  <h3 className="text-4xl font-semibold tracking-tighter">{activePeriod.title}</h3>
                  <p className="mt-1 text-xl text-emerald-600 dark:text-emerald-400">{activePeriod.subtitle}</p>

                  <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {activePeriod.description}
                  </p>
                </div>

                {/* Visual Placeholder */}
                <div className="md:col-span-2">
                  <div className="flex h-full min-h-[220px] flex-col justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center dark:border-zinc-700 dark:bg-zinc-950">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {activePeriod.visualNote}
                    </p>
                    <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-500">
                      (Ilustrasi bergaya akan ditampilkan di sini)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==================== USP SECTION ==================== */}
      <section className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-medium tracking-[3px] text-emerald-600 dark:text-emerald-400">KEUNGGULAN KAMI</div>
            <h2 className="mt-2 text-4xl font-semibold tracking-tighter">Tradisi Bertemu Modern</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {usps.map((usp, index) => {
              const Icon = usp.icon;
              return (
                <div 
                  key={index} 
                  className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:border-emerald-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium tracking-wider text-emerald-600 dark:text-emerald-400">
                    {usp.title}
                  </div>
                  <div className="mt-1 text-3xl font-semibold tracking-tighter text-zinc-900 dark:text-white">
                    {usp.value}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="border-t border-zinc-200 py-16 dark:border-zinc-900">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Matsanda terus berkembang dengan menjaga akar tradisi sambil 
            membuka diri terhadap kemajuan zaman.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-600 active:scale-[0.985] dark:bg-emerald-600 dark:hover:bg-emerald-500">
            Lihat Profil Lengkap <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}