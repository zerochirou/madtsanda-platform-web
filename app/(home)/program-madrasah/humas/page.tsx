import type { Metadata } from "next";
import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";

export const metadata: Metadata = {
  title: "Humas | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program humas MTsN 2 Kota Kediri: layanan informasi publik, PPDB digital, publikasi, dan kemitraan masyarakat.",
};

export default function HumasPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.humas} />;
}
