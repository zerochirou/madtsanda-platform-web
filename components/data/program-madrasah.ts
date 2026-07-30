import {
  BookOpenCheck,
  Building2,
  CalendarCheck2,
  GraduationCap,
  Handshake,
  Leaf,
  Megaphone,
  Microscope,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { ProgramMadrasahPageData } from "@/types/program-madrasah";

export const programMadrasahPages = {
  kurikulum: {
    slug: "kurikulum",
    title: "Kurikulum",
    subtitle: "Program Madrasah",
    description:
      "Pengelolaan pembelajaran MTsN 2 Kota Kediri diarahkan untuk membentuk peserta didik yang unggul dalam prestasi, ISTIKOMAH, dan siap menghadapi jenjang pendidikan berikutnya.",
    imageSrc: "/images/kegiatan-tka.jpg",
    metrics: [
      { label: "Rombel belajar", value: "42" },
      { label: "Sistem layanan", value: "SKS" },
      { label: "Fokus karakter", value: "Kokurikuler" },
    ],
    highlights: [
      {
        title: "Kurikulum Merdeka",
        description:
          "Pembelajaran menekankan pemahaman konsep, kompetensi, minat, bakat, serta projek penguatan karakter.",
        icon: GraduationCap,
      },
      {
        title: "Kesiapan Akademik",
        description:
          "TKA, literasi, numerasi, dan penalaran menjadi data strategis untuk peningkatan mutu belajar.",
        icon: CalendarCheck2,
      },
      {
        title: "Riset dan Inovasi",
        description:
          "Budaya riset, teknologi, bahasa, dan karya ilmiah murid diperkuat melalui program unggulan madrasah.",
        icon: Microscope,
      },
    ],
    sections: [
      {
        title: "Arah Pembelajaran",
        description:
          "Bidang kurikulum menjaga pembelajaran tetap efektif, kreatif, dan inovatif.",
        items: [
          "Menerapkan Kurikulum Merdeka dengan ruang diferensiasi bagi guru dan peserta didik.",
          "Menguatkan literasi, numerasi, berpikir kritis, dan penguasaan materi inti.",
          "Mengelola sistem Satuan Kredit Semester untuk layanan reguler 6 semester dan percepatan 4 semester melalui LBSCI.",
        ],
      },
      {
        title: "Karakter Pelajar",
        description:
          "Nilai keislaman dan kebangsaan dipadukan dalam pembiasaan belajar harian.",
        items: [
          "Menghidupkan Profil Pelajar Rahmatan Lil Alamin yang toleran, peduli, dan berakhlakul karimah.",
          "Menjalankan kokurikuler melalui pengalaman projek yang dekat dengan persoalan nyata di lingkungan murid.",
          "Menanamkan disiplin, doa, tadarus Al-Qur'an, dan shalat berjamaah sebagai budaya madrasah.",
        ],
      },
    ],
  },
  kesiswaan: {
    slug: "kesiswaan",
    title: "Kesiswaan",
    subtitle: "Program Madrasah",
    description:
      "Pembinaan kesiswaan Madtsanda menggabungkan kepemimpinan, organisasi, kesehatan sekolah, kedisiplinan, olahraga, seni, dan kegiatan sosial.",
    imageSrc: "/images/apel-pagi.jpg",
    metrics: [
      { label: "Murid TKA 2026", value: "467" },
      { label: "Organisasi inti", value: "6+" },
      { label: "Budaya", value: "Disiplin" },
    ],
    highlights: [
      {
        title: "OSIM dan MPK",
        description:
          "Wadah aspirasi, kepemimpinan, pengawasan program, dan kaderisasi murid.",
        icon: Users,
      },
      {
        title: "Prestasi Nonakademik",
        description:
          "Ekstrakurikuler dan komunitas murid mendorong prestasi olahraga, seni, sosial, dan kepramukaan.",
        icon: Sparkles,
      },
      {
        title: "Kesehatan dan Ketertiban",
        description:
          "UKS, PMR, dan PKS memperkuat budaya sehat, kepedulian, serta keselamatan lingkungan madrasah.",
        icon: ShieldCheck,
      },
    ],
    sections: [
      {
        title: "Organisasi Murid",
        description:
          "Kesiswaan menjadi rumah pembinaan organisasi dan aspirasi peserta didik.",
        items: [
          "OSIM mengoordinasikan kegiatan kesiswaan akademik dan nonakademik melalui unit kerja murid.",
          "MPK menjadi organisasi perwakilan kelas yang mengawasi kinerja OSIM dan menampung aspirasi murid.",
          "Fivesa, Pramuka, PMR, PKS, dan UKS menjadi ruang praktik kepemimpinan dan layanan sosial.",
        ],
      },
      {
        title: "Pembinaan Karakter",
        description:
          "Aktivitas murid diarahkan untuk membentuk disiplin, mandiri, kreatif, dan rendah hati.",
        items: [
          "Apel pagi rutin digunakan untuk pembinaan karakter, informasi, kesiapan belajar, dan kebersamaan.",
          "Kegiatan rihlah spiritual dan pembiasaan ibadah memperkuat ikhtiar akademik sekaligus spiritual.",
          "Setiap kegiatan diarahkan pada slogan Berprestasi Tiada Henti dan Rendah Hati.",
        ],
      },
    ],
  },
  humas: {
    slug: "humas",
    title: "Humas",
    subtitle: "Program Madrasah",
    description:
      "Bidang humas menghubungkan madrasah dengan orang tua, alumni, masyarakat, media digital, dan layanan informasi publik.",
    imageSrc: "/images/gedung-madtsanda.jpg",
    metrics: [
      { label: "Portal PPDB", value: "PMBM" },
      { label: "Kanal sosial", value: "5" },
      { label: "Alamat", value: "Ngronggo" },
    ],
    highlights: [
      {
        title: "Layanan Informasi",
        description:
          "Informasi madrasah disampaikan melalui website resmi, kanal sosial, dan layanan publik sekolah.",
        icon: Megaphone,
      },
      {
        title: "Kemitraan Orang Tua",
        description:
          "Komunikasi wali murid dan komite mendukung manajemen partisipatif yang terbuka.",
        icon: Handshake,
      },
      {
        title: "PPDB Digital",
        description:
          "Penerimaan murid baru diarahkan melalui portal PMBM dengan alur akun, data, verifikasi, tes, dan lapor diri.",
        icon: BookOpenCheck,
      },
    ],
    sections: [
      {
        title: "Komunikasi Publik",
        description:
          "Humas menjaga wajah madrasah tetap informatif, akurat, dan mudah diakses masyarakat.",
        items: [
          "Mengelola publikasi berita madrasah, dokumentasi kegiatan, dan informasi layanan.",
          "Menghubungkan warga madrasah dengan kanal Facebook, Instagram, YouTube, TikTok, dan website resmi.",
          "Memperkuat citra madrasah riset, Adiwiyata, UKS Nasional, dan smart Islamic school.",
        ],
      },
      {
        title: "Layanan Penerimaan",
        description:
          "Informasi PPDB disajikan sebagai layanan publik yang transparan dan mudah dipahami.",
        items: [
          "Mengarahkan calon peserta didik ke portal pmbm.mtsn2kotakediri.sch.id.",
          "Menjelaskan jalur prestasi dan reguler, proses berkas, tes akademik, baca tulis Al-Qur'an, serta wawancara.",
          "Mendampingi komunikasi lapor diri dan daftar ulang bagi murid yang dinyatakan lulus.",
        ],
      },
    ],
  },
  "sarana-prasarana": {
    slug: "sarana-prasarana",
    title: "Sarana Prasarana",
    subtitle: "Program Madrasah",
    description:
      "Fasilitas Madtsanda disiapkan untuk mendukung pembelajaran, ibadah, riset, literasi, kesehatan, asrama, olahraga, dan kegiatan warga madrasah.",
    imageSrc: "/images/perpustakaan2.jpg",
    metrics: [
      { label: "Luas lahan", value: "14.547 m2" },
      { label: "Ruang belajar", value: "36" },
      { label: "Laboratorium", value: "5" },
    ],
    highlights: [
      {
        title: "Ruang Akademik",
        description:
          "Kelas, laboratorium, multimedia, perpustakaan, dan smart room menopang pembelajaran modern.",
        icon: School,
      },
      {
        title: "Asrama dan Ibadah",
        description:
          "Asrama Al-Azhar dan masjid dua lantai memperkuat pembiasaan keislaman dan karakter.",
        icon: Building2,
      },
      {
        title: "Lingkungan Adiwiyata",
        description:
          "Fasilitas bersih, sehat, dan tertata mendukung madrasah peduli lingkungan.",
        icon: Leaf,
      },
    ],
    sections: [
      {
        title: "Fasilitas Pembelajaran",
        description:
          "Sarana akademik dirancang untuk kegiatan kelas, riset, literasi, dan pembelajaran berbasis teknologi.",
        items: [
          "36 ruang belajar, 5 laboratorium, ruang multimedia, smart room, ruang keterampilan, dan perpustakaan.",
          "Aula, Graha Paseban, ruang data, dan ruang guru menunjang koordinasi serta kegiatan besar madrasah.",
          "Kantin, UKS, BK, tata usaha, dan ruang komite melengkapi layanan harian warga madrasah.",
        ],
      },
      {
        title: "Fasilitas Pendukung",
        description:
          "Aktivitas ibadah, asrama, olahraga, keamanan, dan parkir didukung ruang khusus.",
        items: [
          "Asrama memiliki beberapa tipe kamar di bangunan dua hingga tiga lantai.",
          "Masjid dua lantai, lapangan basket, badminton, tenis meja, voli, dan ruang olahraga tersedia untuk pembinaan murid.",
          "Pos keamanan, area parkir, ruang tatib, ruang musik, dan kamar kecil mendukung operasional yang tertib.",
        ],
      },
    ],
  },
} satisfies Record<string, ProgramMadrasahPageData>;

export const programMadrasahNavItems = Object.values(programMadrasahPages).map(
  (program) => ({
    label: program.title,
    description: program.description,
    href: `/program-madrasah/${program.slug}`,
  }),
);

