import type { ExtracurricularDTO } from "@/types/dto/extracurricular";

export const extracurricularsData: ExtracurricularDTO[] = [
  // 1. Keagamaan
  {
    name: "Tahfidz Al-Qur'an",
    category: "Keagamaan",
    desc: "Program bimbingan menghafal Al-Qur'an dengan metode Jibril untuk melahirkan generasi penghafal Al-Qur'an yang unggul.",
    icon: "BookOpen"
  },
  {
    name: "Kajian Kitab Kuning",
    category: "Keagamaan",
    desc: "Pendalaman kajian kitab-kitab klasik Islam dengan metode Bandongan untuk memperkuat pemahaman keagamaan secara mendalam.",
    icon: "BookMarked"
  },
  {
    name: "Hadrah / Banjari",
    category: "Keagamaan",
    desc: "Seni musik rebana klasik Islami yang melatih rasa seni sekaligus kecintaan kepada sholawat Nabi.",
    icon: "Music4"
  },
  {
    name: "Kaligrafi",
    category: "Keagamaan",
    desc: "Pelatihan seni menulis indah ayat-ayat Al-Qur'an untuk menumbuhkan bakat seni rupa Islami.",
    icon: "PenTool"
  },
  {
    name: "Qira'ah / Tilawah",
    category: "Keagamaan",
    desc: "Seni membaca Al-Qur'an dengan lagu/maqam yang indah untuk mempersiapkan siswa di ajang MTQ.",
    icon: "Volume2"
  },

  // 2. Akademik & Riset
  {
    name: "Karya Ilmiah Remaja (KIR)",
    category: "Akademik & Riset",
    desc: "Wadah penelitian ilmiah remaja di bidang sains, sosial, dan humaniora untuk merangsang cara berpikir kritis dan kreatif.",
    icon: "Search"
  },
  {
    name: "Robotik",
    category: "Akademik & Riset",
    desc: "Pembelajaran merakit, memprogram, dan mengoperasikan robot mini guna mempersiapkan siswa di era otomasi industri.",
    icon: "Cpu"
  },
  {
    name: "Olimpiade Matematika",
    category: "Akademik & Riset",
    desc: "Bimbingan khusus pemecahan masalah matematika tingkat lanjut untuk persiapan kompetisi nasional (KSM/OSN).",
    icon: "Binary"
  },
  {
    name: "Olimpiade IPA",
    category: "Akademik & Riset",
    desc: "Pembinaan intensif materi sains fisika dan biologi tingkat olimpiade untuk melatih kemampuan analisis ilmiah.",
    icon: "FlaskConical"
  },
  {
    name: "Olimpiade IPS",
    category: "Akademik & Riset",
    desc: "Bimbingan materi geografi, sejarah, dan ekonomi terintegrasi untuk mempersiapkan siswa dalam kompetisi sosial.",
    icon: "Globe2"
  },
  {
    name: "English Club",
    category: "Akademik & Riset",
    desc: "Komunitas belajar berbicara, berdebat, dan menulis kreatif dalam bahasa Inggris demi meningkatkan kapabilitas global.",
    icon: "Languages"
  },
  {
    name: "Arabic Club",
    category: "Akademik & Riset",
    desc: "Pembelajaran bahasa Arab komunikatif serta seni pidato bahasa Arab untuk menunjang wawasan keagamaan global.",
    icon: "Sparkles"
  },

  // 3. Olahraga
  {
    name: "Futsal",
    category: "Olahraga",
    desc: "Latihan teknik dasar sepak bola dalam ruangan untuk melatih taktik kerja sama tim, stamina, dan kelincahan fisik.",
    icon: "Trophy"
  },
  {
    name: "Basket",
    category: "Olahraga",
    desc: "Pengembangan bakat olahraga bola basket, melatih ketangkasan dribbling, shooting, dan kekompakan tim.",
    icon: "Activity"
  },
  {
    name: "Voli",
    category: "Olahraga",
    desc: "Pelatihan olahraga bola voli, berfokus pada teknik passing, smash, block, serta koordinasi di lapangan.",
    icon: "Zap"
  },
  {
    name: "Bulutangkis",
    category: "Olahraga",
    desc: "Olahraga tepak bulu yang populer, melatih refleks gerak cepat, kelenturan, kekuatan, dan strategi permainan tunggal/ganda.",
    icon: "Dribbble"
  },
  {
    name: "Tenis Meja",
    category: "Olahraga",
    desc: "Latihan ketangkasan olahraga tenis meja (pingpong) untuk melatih koordinasi mata-tangan dan konsentrasi tinggi.",
    icon: "Target"
  },
  {
    name: "Catur",
    category: "Olahraga",
    desc: "Pengembangan strategi berpikir taktis, analisis pergerakan, dan kesabaran mental lewat permainan papan catur.",
    icon: "Crown"
  },

  // 4. Seni & Budaya
  {
    name: "Seni Tari",
    category: "Seni & Budaya",
    desc: "Pembelajaran gerak seni tari tradisional Nusantara dan tari kreasi baru bertema Islami untuk melestarikan budaya.",
    icon: "Smile"
  },
  {
    name: "Teater / Drama",
    category: "Seni & Budaya",
    desc: "Latihan olah vokal, ekspresi wajah, pembawaan karakter panggung, dan penulisan skenario pertunjukan teater.",
    icon: "Masks"
  },
  {
    name: "Paduan Suara",
    category: "Seni & Budaya",
    desc: "Pelatihan teknik olah vokal kelompok untuk memadukan harmoni suara dalam menyanyikan lagu-lagu resmi dan daerah.",
    icon: "Music"
  },
  {
    name: "Musik & Band",
    category: "Seni & Budaya",
    desc: "Latihan memainkan alat musik modern (gitar, keyboard, drum) dan vokal untuk mengekspresikan karya seni musik.",
    icon: "Guitar"
  },

  // 5. Bela Diri & Keterampilan
  {
    name: "Paskibra",
    category: "Bela Diri & Keterampilan",
    desc: "Pasukan Pengibar Bendera Sekolah yang melatih baris-berbaris, disiplin militer tangguh, serta patriotisme bernegara.",
    icon: "Flag"
  },
  {
    name: "Pencak Silat",
    category: "Bela Diri & Keterampilan",
    desc: "Pelatihan bela diri asli Indonesia (pagar nusa/merpati putih) untuk pertahanan diri dan melestarikan seni budaya bangsa.",
    icon: "ShieldAlert"
  },
  {
    name: "Taekwondo",
    category: "Bela Diri & Keterampilan",
    desc: "Seni bela diri asal Korea yang memfokuskan kekuatan tendangan kaki dan teknik pertahanan diri yang dinamis.",
    icon: "Flame"
  }
];
