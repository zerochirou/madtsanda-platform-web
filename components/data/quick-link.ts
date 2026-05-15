import { Role } from "@/types/access";
import {
  News28Color,
  Poll24Color,
  Person24Color,
  Library24Color,
  ContentView24Color,
  DocumentEdit16Color,
} from "@fluentui/react-icons";

interface QuickLink {
  title: string;
  description: string;
  url: string;
  className: string;
  role: Role;
  icon: React.ComponentType<{ className?: string }>;
}

export const quickLink: QuickLink[] = [
  {
    title: "Profile View",
    description: "Lihat dan edit inforamsi pribadi",
    className: "",
    role: "student",
    icon: Person24Color,
    url: "/dashboard/profile",
  },
  {
    title: "Berita Terbaru",
    description: "Kumpulan berita terbaru madtsanda",
    className: "",
    icon: News28Color,
    role: "student",
    url: "/dashboard/news",
  },
  {
    title: "Manajemen Berita",
    description: "Kendali penuh atas berita",
    className: "",
    icon: ContentView24Color,
    role: "admin",
    url: "/dashboard/news/table",
  },
  {
    title: "Arsip Penelitian Ilmiah",
    description: "Repositori penelitian MTsN 2 Kota Kediri",
    className: "",
    icon: Library24Color,
    role: "student",
    url: "/dashboard/research",
  },
  {
    title: "Unggah Penelitian Ilmiah",
    description: "Unggah penelitian kamu",
    role: "student",
    className: "",
    icon: Poll24Color,
    url: "/dashboard/research/create",
  },
  {
    title: "Manajemen Penelitian Siswa",
    description: "Pusat kendali penelitian siswa",
    role: "admin",
    className: "",
    icon: DocumentEdit16Color,
    url: "/dashboard/research/accept",
  },
];
