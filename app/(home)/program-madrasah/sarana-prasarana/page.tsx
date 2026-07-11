import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sarana Prasarana | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Sarana prasarana MTsN 2 Kota Kediri: kelas, laboratorium, perpustakaan, ma'had, masjid, aula, olahraga, dan fasilitas pendukung.",
  path: "/program-madrasah/sarana-prasarana",
  keywords: ["sarana prasarana MTsN 2 Kota Kediri", "fasilitas Madtsanda", "laboratorium MTsN 2 Kediri"],
});

export default function SaranaPrasaranaPage() {
  return (
    <ProgramMadrasahPage data={programMadrasahPages["sarana-prasarana"]} />
  );
}
