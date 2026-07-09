import { Hero } from "@/features/home/components/hero";
import { ImageBanner } from "@/features/home/components/image-banner";
import { InsideLeading } from "@/features/home/components/inside-leading";
import { Intro } from "@/features/home/components/intro";
import { Journey } from "@/features/home/components/journey";
import { Locations } from "@/features/home/components/locations";
import { Newsroom } from "@/features/home/components/news-room";
import { Programs } from "@/features/home/components/programs";
import { ResearchRepository } from "@/features/home/components/research-repository";
import { Testimonial } from "@/features/home/components/testimonial";
import {
  getLatestResearchService,
  getNewsWithLimitService,
} from "@/features/home/services";

export default async function Home() {
  const [news, research] = await Promise.all([
    getNewsWithLimitService(4),
    getLatestResearchService(1),
  ]);
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">
      <Hero />
      <Intro />
      {/*<Features />*/}
      <ImageBanner />
      <Locations />
      <Journey />
      <Programs />
      <InsideLeading />
      <Testimonial />
      <ResearchRepository research={research} />
      <Newsroom news={news}/>
    </div>
  );
}
