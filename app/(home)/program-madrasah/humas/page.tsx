import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Humas | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program humas MTsN 2 Kota Kediri: layanan informasi publik, PPDB digital, publikasi, dan kemitraan masyarakat.",
  path: "/program-madrasah/humas",
  keywords: ["humas MTsN 2 Kota Kediri", "informasi publik Madtsanda", "PPDB digital Madtsanda"],
});

export default function HumasPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.humas} />;
}
