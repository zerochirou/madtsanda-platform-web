import { programMadrasahNavItems } from "./program-madrasah";

const aboutUs = [
  {
    label: "Sambutan kepala madrasah",
    description: "Pesan dan sapaan hangat Kepala Madrasah.",
    href: "/about/sambutan",
  },
  {
    label: "Sejarah",
    description: "Asal-usul dan rekam jejak madrasah.",
    href: "/about/sejarah",
  },
  {
    label: "Budaya",
    description: "Nilai Islami dan karakter lingkungan kami.",
    href: "/about/budaya",
  },
  {
    label: "Visi & Misi",
    description: "Target utama dan arah strategis kami.",
    href: "/about/visi-misi",
  },
  {
    label: "Galeri Madtsanda",
    description: "Dokumentasi visual gedung, lingkungan, dan aktivitas siswa.",
    href: "/about/galeri",
  }
];

const organizations = [
  {
    label: "MPK dan OSIM",
    description: "Wadah organisasi siswa untuk melatih kepemimpinan dan aspirasi.",
    href: "/organizations/mpk-osim",
  },
  {
    label: "Ekstrakurikuler",
    description: "Berbagai kegiatan minat dan bakat untuk mengembangkan potensi siswa.",
    href: "/organizations/extracurricular",
  },
  {
    label: "Fivesa",
    description: "Komunitas/organisasi khusus madrasah untuk ajang kreativitas.",
    href: "/organizations/fivesa",
  }
];

export const services = [
  {
    label: "Madtsanda News",
    description: "Tempat melihat berita dan artikel Madtsanda.",
    href: "/news",
  },
  {
    label: "Research Repository",
    description: "Arsip digital karya ilmiah dan riset.",
    href: "/research",
  },
  {
    label: "Madtsanda Connect",
    description: "Portal integrasi sistem akademik digital.",
    href: "",
  },
  {
    label: "Modern Library",
    description: "Layanan perpustakaan digital dan fisik.",
    href: "/library",
  },
  {
    label: "Rapot Digital Madrasah",
    description: "Sistem penilaian siswa madrasah resmi Kemenag.",
    href: "/rapot",
  }
];

const ziPpid = [
  {
    label: "Zona Integritas",
    description: "Eviden pembangunan ZI menuju WBK dan layanan bersih.",
    href: "/zona-integritas",
  },
  {
    label: "PPID",
    description: "Profil, struktur, visi misi, dan tugas layanan informasi publik.",
    href: "/ppid",
  },
];

export const navigationData = [
  {
    label: "Program Madrasah",
    description: "Kurikulum, kesiswaan, humas, dan sarana prasarana.",
    items: programMadrasahNavItems,
  },
  {
    label: "Tentang Kami",
    description: "Sejarah, visi, dan misi Madrasah Tsanawiyah.",
    items: aboutUs,
  },
  {
    label: "Layanan",
    description: "Research Repository, Madtsanda Connect, Modern Library.",
    items: services,
  },
  {
    label: "ZI - PPID",
    description: "Zona Integritas dan layanan informasi publik madrasah.",
    items: ziPpid,
  },
  {
    label: "Organisasi",
    description: "MPK dan OSIM, Ekstrakurikuler.",
    items: organizations,
  },
];


export const footerLinks = [
  { label: "Profil", href: "/about" },
  { label: "Kurikulum", href: "/program-madrasah/kurikulum" },
  { label: "Kesiswaan", href: "/program-madrasah/kesiswaan" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Fasilitas", href: "/facilities" },
  { label: "Research", href: "/research" },
  { label: "ZI - PPID", href: "/zona-integritas" },
];
