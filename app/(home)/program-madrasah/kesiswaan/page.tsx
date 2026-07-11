import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kesiswaan | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program kesiswaan MTsN 2 Kota Kediri: OSIS, MPK, UKS, PMR, PKS, Pramuka, kedisiplinan, dan pembinaan karakter.",
  path: "/program-madrasah/kesiswaan",
  keywords: ["kesiswaan MTsN 2 Kota Kediri", "program kesiswaan Madtsanda", "pembinaan siswa MTsN"],
});

export default function KesiswaanPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.kesiswaan} />;
}
