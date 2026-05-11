"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface Article {
  id: string | number;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

interface CategoryNewsProps {
  title: string;
  mainArticle: Article & { description: string };
  sideArticles: Article[];
}

export function CategoryNews({ title, mainArticle, sideArticles }: CategoryNewsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Category Article */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden group h-[350px] md:h-full min-h-[350px]"
        >
          <Image
            src={mainArticle.image}
            alt={mainArticle.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6">
            <Link href={`/news/${mainArticle.id}`} className="block">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors line-clamp-3">
                {mainArticle.title}
              </h3>
            </Link>
            <p className="text-zinc-300 text-sm line-clamp-2">
              {mainArticle.description}
            </p>
          </div>
        </motion.div>

        {/* Side Category Articles */}
        <div className="flex flex-col gap-6 justify-between">
          {sideArticles.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-4 group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-2xl hover:shadow-lg hover:border-emerald-500/30 transition-all"
            >
              <div className="relative w-full sm:w-32 h-40 sm:h-24 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 128px"
                />
              </div>
              <div className="flex flex-col justify-center py-1">
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
                  <span>{news.date}</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span>{news.readTime}</span>
                </div>
                <Link href={`/news/${news.id}`} className="block">
                  <h4 className="font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
