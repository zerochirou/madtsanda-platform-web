"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Beaker, Globe, Cpu, Search, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { researchData } from "@/components/data/research";

const categories = [
  { id: "all", name: "Semua Kategori", icon: null },
  { id: "ipa", name: "IPA", icon: Beaker },
  { id: "ips", name: "IPS", icon: Globe },
  { id: "iptr", name: "IPTR", icon: Cpu },
];

const sliderImages = [
  "/images/gedung-madtsanda.jpg",
  "/images/bg-mts.jpg",
];

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredResearch = researchData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Slider Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={sliderImages[currentSlide]}
              alt="Research Header"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]"
          >
            Web Research Open
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Portal Riset <span className="text-emerald-500">Madtsanda</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base"
          >
            Wadah publikasi karya ilmiah dan inovasi teknologi karya siswa-siswi MTsN 2 Kota Kediri yang unggul dan kompetitif.
          </motion.p>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 flex gap-2">
          {sliderImages.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-12 bg-emerald-500" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                {cat.name}
              </button>
            ))}
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari riset..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 border-transparent border transition-all w-64"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResearch.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-zinc-900/40 text-white border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase">{item.author.split(' - ')[0]}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 leading-tight group-hover:text-emerald-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Link href={`/research/${item.id}`}>
                    <Button className="w-full bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 rounded-2xl py-6 font-bold transition-all group-hover:translate-y-[-4px]">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredResearch.length === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-500">Tidak ada riset yang ditemukan untuk kategori ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}
