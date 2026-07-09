import type { Metadata } from "next";
import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";

export const metadata: Metadata = {
  title: "Kesiswaan | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program kesiswaan MTsN 2 Kota Kediri: OSIS, MPK, UKS, PMR, PKS, Pramuka, kedisiplinan, dan pembinaan karakter.",
};

export default function KesiswaanPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.kesiswaan} />;
}
