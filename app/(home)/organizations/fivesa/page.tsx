import React from "react";
import Image from "next/image";
import { FadeUp } from "@/components/animation/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { AtSign, User } from "lucide-react";
import { organizationsData } from "@/components/data/organizations";
import { OrganizationHero } from "@/features/organizations/components";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fivesa MTsN 2 Kota Kediri | Komunitas dan Organisasi Kesiswaan",
  description:
    "Fivesa MTsN 2 Kota Kediri menaungi komunitas murid untuk kepedulian sosial, jurnalistik, kedisiplinan, dan pengembangan kreativitas.",
  path: "/organizations/fivesa",
  keywords: ["Fivesa MTsN 2 Kota Kediri", "organisasi Madtsanda", "komunitas murid Madtsanda"],
});

export default function FivesaPage() {
  // Filter out MPK and OSIS, and display Fivesa organizations
  const fivesaOrgs = organizationsData.filter(
    (org) => org.name !== "OSIS" && org.name !== "MPK",
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <OrganizationHero
        title="Fivesa"
        eyebrow="Komunitas & Organisasi Kesiswaan"
        description="Wadah pengembangan minat bakat, kedisiplinan, kemanusiaan, serta jurnalistik murid MTsN 2 Kota Kediri."
        imageSrc="/images/gedung-madtsanda.jpg"
        imageAlt="Gedung MTsN 2 Kota Kediri sebagai ruang kegiatan Fivesa"
        tone="amber"
        metrics={[
          { value: `${fivesaOrgs.length}`, label: "Komunitas aktif" },
          { value: "Sosial", label: "Fokus kepedulian" },
          { value: "Kreatif", label: "Karya dan publikasi" },
        ]}
      />

      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
              Wadah Pembentukan Karakter & Jiwa Sosial
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Komunitas organisasi Fivesa melatih kemandirian, kepedulian
              sosial, sportivitas, serta kreativitas murid melalui
              program-program pengabdian masyarakat dan kompetisi tingkat daerah
              maupun nasional.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {fivesaOrgs.map((org, idx) => (
            <FadeUp key={org.name} delay={idx * 0.1}>
              <Card className="pt-0 h-full hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 flex flex-col relative overflow-hidden group">
                {/* Subtle Background Glow */}
                <div className="absolute -inset-px bg-linear-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <CardHeader className="p-8 pb-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-24 h-24 relative rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/40 mb-4 flex items-center justify-center p-2 shadow-inner border border-zinc-200/50 dark:border-zinc-700/30">
                      <Image
                        src={org.image}
                        alt={org.name}
                        className="object-contain p-2"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 text-center group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {org.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col justify-between">
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-1 leading-relaxed text-center text-sm">
                    {org.desc}
                  </p>
                  <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 justify-center">
                      <AtSign className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400">
                        <a
                          href={`https://www.instagram.com/${org.ig}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @{org.ig}
                        </a>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
