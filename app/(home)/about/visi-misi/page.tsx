'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, Lightbulb, Trophy, TrendingUp,
  UserCheck, Heart, Leaf, ArrowRight, Sun, Moon
} from 'lucide-react';

// ==================== TYPES ====================
interface Pillar {
  letter: string;
  title: string;
  icon: React.ElementType;
  micro: string;
  detail: string;
}

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// ==================== DATA ====================
const pillars: Pillar[] = [
  { letter: "I", title: "Islami", icon: BookOpen, micro: "Menghayati dan mengamalkan ajaran Islam dalam kehidupan sehari-hari.", detail: "Sholat berjamaah, tadarus Al-Qur'an, dan pembentukan karakter Islami yang kuat." },
  { letter: "S", title: "Santun", icon: Users, micro: "Menjaga adab, sopan santun, dan menghormati guru serta teman.", detail: "Berbicara dengan lembut, mendengarkan dengan penuh perhatian, dan menghargai perbedaan." },
  { letter: "T", title: "Terampil", icon: Award, micro: "Menguasai keterampilan abad 21 dan praktis dalam kehidupan.", detail: "Keterampilan membaca, menulis, berhitung, dan kemampuan praktis lainnya." },
  { letter: "I", title: "Inovatif", icon: Lightbulb, micro: "Berpikir kreatif dan berani mencoba hal baru dengan teknologi.", detail: "Coding, robotika, dan proyek kreatif yang mendorong inovasi siswa." },
  { letter: "K", title: "Kompetitif", icon: Trophy, micro: "Berprestasi tinggi dengan semangat sportivitas dan kerja keras.", detail: "Kompetisi akademik, olahraga, dan seni dengan tetap menjaga akhlak." },
  { letter: "O", title: "Optimis", icon: TrendingUp, micro: "Selalu berpikir positif dan pantang menyerah menghadapi tantangan.", detail: "Membangun mental tangguh dan growth mindset pada setiap siswa." },
  { letter: "M", title: "Mandiri", icon: UserCheck, micro: "Mandiri dalam belajar dan bertanggung jawab atas pilihan sendiri.", detail: "Kemampuan mengatur waktu, menyelesaikan tugas, dan mengambil keputusan." },
  { letter: "A", title: "Akhlakul Karimah", icon: Heart, micro: "Menebar senyum, empati, dan berperilaku mulia kepada sesama.", detail: "Menolong teman, jujur, rendah hati, dan menjaga ukhuwah Islamiyah." },
  { letter: "H", title: "Hijau", icon: Leaf, micro: "Peduli lingkungan dan menjaga keasrian serta kebersihan sekolah.", detail: "Kerja bakti, menanam tanaman, dan membuang sampah pada tempatnya." }
];

const timelineData: TimelineItem[] = [
  { time: "06:45", title: "Pembiasaan Islami", description: "Sholat Dhuha berjamaah dan tadarus Al-Qur'an. Menumbuhkan ketenangan dan kedekatan dengan Allah sejak pagi.", icon: BookOpen },
  { time: "10:00", title: "Keterampilan & Teknologi", description: "Siswa bereksperimen di Lab Robotika dan Coding. Membangun logika, kreativitas, dan kemampuan problem solving.", icon: Lightbulb },
  { time: "13:00", title: "Akhlak Karimah & Ukhuwah", description: "Bertegur sapa, menebar senyum, dan kerja bakti membersihkan area sekolah. Memperkuat empati dan kebersamaan.", icon: Heart },
  { time: "15:00", title: "Sekolah Asri & Sehat", description: "Merawat taman sekolah dan menjaga kebersihan lingkungan. Mewujudkan sekolah yang hijau dan nyaman.", icon: Leaf }
];

// ==================== PILLAR CARD (Flip) ====================
function PillarCard({ pillar, index, isFlipped, onToggle }: {
  pillar: Pillar; index: number; isFlipped: boolean; onToggle: (i: number) => void;
}) {
  const Icon = pillar.icon;

  return (
    <div className="group relative h-[280px] w-full cursor-pointer [perspective:1000px]" onClick={() => onToggle(index)}>
      <motion.div
        className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-6 backface-hidden dark:border-zinc-800 dark:bg-zinc-900 group-hover:border-emerald-300 dark:group-hover:border-emerald-800">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <Icon className="h-8 w-8" />
          </div>
          <div className="mb-1 text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">{pillar.letter}</div>
          <div className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">{pillar.title}</div>
          <div className="mt-auto flex items-center gap-1.5 text-xs text-zinc-500">Klik untuk detail <ArrowRight className="h-3 w-3" /></div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-emerald-300 bg-white p-6 [transform:rotateY(180deg)] backface-hidden dark:border-emerald-800 dark:bg-zinc-900">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">{pillar.letter}</span>
              <span className="ml-2 text-lg font-medium text-emerald-600 dark:text-emerald-400">{pillar.title}</span>
            </div>
          </div>
          <p className="text-[15px] leading-snug text-zinc-600 dark:text-zinc-300">{pillar.micro}</p>
          <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{pillar.detail}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ==================== TIMELINE ITEM ====================
function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div 
      className="relative flex gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <div className="relative flex flex-col items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-emerald-600 bg-white dark:bg-zinc-950">
          <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        </div>
        {index !== timelineData.length - 1 && <div className="mt-1 h-full w-px bg-zinc-200 dark:bg-zinc-800" />}
      </div>
      <div className="flex-1 pt-1">
        <div className="mb-1 flex items-baseline gap-3">
          <span className="font-mono text-xl font-semibold tracking-tighter text-emerald-600 dark:text-emerald-400">{item.time}</span>
          <span className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</span>
        </div>
        <p className="max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
      </div>
    </motion.div>
  );
}

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

// ==================== MAIN PAGE ====================
export default function VisiMisiPage() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-20 min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white selection:bg-emerald-500 selection:text-white">
      {/* ISTIKOMAH SECTION */}
      <section id="istikomah" className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-xs font-medium tracking-[3px] text-emerald-600 dark:text-emerald-400">NILAI INTI KAMI</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Membedah ISTIKOMAH</h2>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} index={index} isFlipped={flippedCards.includes(index)} onToggle={toggleCard} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-zinc-500">Klik kartu untuk melihat penjelasan lengkapnya</p>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="border-t border-zinc-200 bg-white py-20 dark:border-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <div className="text-xs font-medium tracking-[3px] text-emerald-600 dark:text-emerald-400">IMPLEMENTASI NYATA</div>
            <h2 className="mt-2 text-5xl font-semibold tracking-tighter">Misi dalam Tindakan</h2>
          </div>
          <div className="mt-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 py-16 dark:border-zinc-900">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Ingin melihat lebih dekat?</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Kunjungi sekolah kami atau hubungi tim kami untuk informasi lebih lanjut.</p>
          <button className="mt-8 rounded-xl bg-emerald-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 active:scale-[0.985]">
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
}