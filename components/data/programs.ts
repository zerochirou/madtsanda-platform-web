"use client";

import Mahad from "@/components/content/programs/mahad.mdx";
import KelasReguler from "@/components/content/programs/kelas-reguler.mdx";
import KelasExcellent from "@/components/content/programs/kelas-excellent.mdx";
import KelasAkselerasi from "@/components/content/programs/kelas-akselerasi.mdx";
import { Zap, FlaskConical, BookOpenCheck, GraduationCap } from "lucide-react";

export const programsData = [
  {
    title: "Kelas Akselerasi (PDCI)",
    school: "Peserta Didik Cerdas Istimewa",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-600",
    gradientHover: "from-emerald-400 to-teal-500",
    accentBg: "bg-emerald-50 dark:bg-emerald-950",
    accentText: "text-emerald-600 dark:text-emerald-400",
    shadowColor: "shadow-emerald-500/20",
    content: KelasAkselerasi,
  },
  {
    title: "Kelas Excellent",
    school: "Program Riset & IT",
    icon: FlaskConical,
    gradient: "from-amber-500 to-orange-600",
    gradientHover: "from-amber-400 to-orange-500",
    accentBg: "bg-amber-50 dark:bg-amber-950",
    accentText: "text-amber-600 dark:text-amber-400",
    shadowColor: "shadow-amber-500/20",
    content: KelasExcellent,
  },
  {
    title: "Ma'had Al-Azhar",
    school: "Kelas Religi & Tahfidz",
    icon: BookOpenCheck,
    gradient: "from-blue-500 to-indigo-600",
    gradientHover: "from-blue-400 to-indigo-500",
    accentBg: "bg-blue-50 dark:bg-blue-950",
    accentText: "text-blue-600 dark:text-blue-400",
    shadowColor: "shadow-blue-500/20",
    content: Mahad,
  },
  {
    title: "Kelas Reguler",
    school: "Kelas reguler",
    icon: GraduationCap,
    gradient: "from-violet-500 to-purple-600",
    gradientHover: "from-violet-400 to-purple-500",
    accentBg: "bg-violet-50 dark:bg-violet-950",
    accentText: "text-violet-600 dark:text-violet-400",
    shadowColor: "shadow-violet-500/20",
    content: KelasReguler,
  },
];
