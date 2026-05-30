export const libraryStats = [
  { value: 12500, suffix: "+", label: "Koleksi Buku" },
  { value: 3200, suffix: "+", label: "E-Book Digital" },
  { value: 850, suffix: "+", label: "Peminjaman / Bulan" },
  { value: 45, suffix: "", label: "Jurnal Berlangganan" },
];

export const libraryCategories = [
  { name: "Agama Islam", count: 2800, color: "emerald" },
  { name: "Sains & Teknologi", count: 2100, color: "blue" },
  { name: "Matematika", count: 1500, color: "violet" },
  { name: "Bahasa & Sastra", count: 1800, color: "amber" },
  { name: "Ilmu Sosial", count: 1200, color: "rose" },
  { name: "Referensi & Ensiklopedia", count: 900, color: "teal" },
];

export const libraryBooks = [
  {
    title: "Tafsir Al-Misbah",
    author: "M. Quraish Shihab",
    category: "Agama Islam",
    year: 2002,
    available: true,
  },
  {
    title: "Fisika: Konsep dan Penerapan",
    author: "Giancoli",
    category: "Sains & Teknologi",
    year: 2014,
    available: true,
  },
  {
    title: "Matematika SMP/MTs Kelas VII",
    author: "Tim Kemendikbud",
    category: "Matematika",
    year: 2023,
    available: false,
  },
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Bahasa & Sastra",
    year: 2005,
    available: true,
  },
  {
    title: "Sejarah Peradaban Islam",
    author: "Badri Yatim",
    category: "Ilmu Sosial",
    year: 2008,
    available: true,
  },
  {
    title: "Ensiklopedia Al-Qur'an",
    author: "Tim Penulis",
    category: "Referensi & Ensiklopedia",
    year: 2010,
    available: false,
  },
  {
    title: "Biologi Molekuler Sel",
    author: "Bruce Alberts",
    category: "Sains & Teknologi",
    year: 2015,
    available: true,
  },
  {
    title: "Fiqih Islam Lengkap",
    author: "Sulaiman Rasjid",
    category: "Agama Islam",
    year: 2019,
    available: true,
  },
];

export const libraryInfo = {
  address: "Jl. Sunan Ampel No.12, Ngronggo, Kota Kediri",
  phone: "0354-687895",
  hours: [
    { day: "Senin - Kamis", time: "07:30 - 15:00 WIB" },
    { day: "Jumat", time: "07:30 - 11:30 WIB" },
    { day: "Sabtu", time: "08:00 - 12:00 WIB" },
    { day: "Minggu & Hari Libur", time: "Tutup" },
  ],
};
