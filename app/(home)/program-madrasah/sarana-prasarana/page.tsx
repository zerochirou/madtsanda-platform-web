import type { Metadata } from "next";
import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";

export const metadata: Metadata = {
  title: "Sarana Prasarana | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Sarana prasarana MTsN 2 Kota Kediri: kelas, laboratorium, perpustakaan, ma'had, masjid, aula, olahraga, dan fasilitas pendukung.",
};

export default function SaranaPrasaranaPage() {
  return (
    <ProgramMadrasahPage data={programMadrasahPages["sarana-prasarana"]} />
  );
}
