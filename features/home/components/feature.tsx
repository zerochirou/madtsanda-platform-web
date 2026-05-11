"use client";

import { featuresData } from "@/components/data/features";
import { FadeUp } from "@/components/animation/animations";

export const Features = () => {
  return (
    <section className="py-12 lg:py-20 bg-zinc-50 dark:bg-zinc-950 pb-20 lg:pb-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          {featuresData.map((f, i) => (
            <FadeUp key={i} delay={i * 0.1} className="space-y-4 border-l-2 border-emerald-500 pl-6 group">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl inline-block mb-2 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{f.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
