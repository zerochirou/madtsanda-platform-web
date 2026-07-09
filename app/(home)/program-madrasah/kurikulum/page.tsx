import type { Metadata } from "next";
import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";

export const metadata: Metadata = {
  title: "Kurikulum | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program kurikulum MTsN 2 Kota Kediri: Kurikulum Merdeka, SKS, kokurikuler, TKA, dan budaya riset.",
};

export default function KurikulumPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.kurikulum} />;
}
