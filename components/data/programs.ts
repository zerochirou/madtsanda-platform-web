"use client"

import Mahad from "@/components/content/programs/mahad.mdx";
import KelasReguler from "@/components/content/programs/kelas-reguler.mdx";
import KelasExcellent from "@/components/content/programs/kelas-excellent.mdx";
import KelasAkselerasi from "@/components/content/programs/kelas-akselerasi.mdx";

export const programsData = [
  {
    title: "Kelas Akselerasi (PDCI)",
    school: "Peserta Didik Cerdas Istimewa",
    icon: "/icons/clock.png",
    content: KelasAkselerasi,
  },
  {
    title: "Kelas Excellent",
    school: "Program Riset & IT",
    icon: "/icons/thunder.png",
    content: KelasExcellent,
  },
  {
    title: "Ma'had Al-Azhar",
    school: "Kelas Religi & Tahfidz",
    icon: "/icons/green.png",
    content: Mahad,
  },
  {
    title: "Kelas Reguler",
    school: "Kelas reguler",
    icon: "/icons/book.png",
    content: KelasReguler,
  },
];
