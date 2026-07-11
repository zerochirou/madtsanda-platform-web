import { programMadrasahPages } from "@/components/data/program-madrasah";
import { ProgramMadrasahPage } from "@/features/program-madrasah/components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kurikulum | Program Madrasah MTsN 2 Kota Kediri",
  description:
    "Program kurikulum MTsN 2 Kota Kediri: Kurikulum Merdeka, SKS, kokurikuler, TKA, dan budaya riset.",
  path: "/program-madrasah/kurikulum",
  keywords: ["kurikulum MTsN 2 Kota Kediri", "program madrasah Madtsanda", "Kurikulum Merdeka MTsN"],
});

export default function KurikulumPage() {
  return <ProgramMadrasahPage data={programMadrasahPages.kurikulum} />;
}
