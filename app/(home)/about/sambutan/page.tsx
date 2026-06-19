"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Quote,
  ArrowRight,
  BookOpen,
  Users,
  School,
} from "lucide-react";
import Link from "next/link";

export default function Sambutan() {
  const stats = [
    {
      icon: School,
      label: "Lingkungan",
      value: "Islami",
    },
    {
      icon: BookOpen,
      label: "Pembelajaran",
      value: "Aktif",
    },
    {
      icon: Users,
      label: "Kolaborasi",
      value: "Kuat",
    },
  ];

  return (
    <main className="mt-20 relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      {/* Massive animated background */}

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 py-8 sm:py-12 lg:min-h-screen lg:justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
            className="text-balance text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl"
          >
            Menyambut Generasi{" "}
            <span className="relative inline-block text-emerald-700 dark:text-emerald-400">
              Unggul
              <motion.span
                className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-emerald-300/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            Berakhlak Mulia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 dark:text-slate-200 sm:text-lg"
          >
            Sebuah pesan hangat dari Kepala Madrasah untuk seluruh peserta
            didik, orang tua, guru, alumni, dan masyarakat yang menjadi bagian
            dari perjalanan pendidikan madrasah.
          </motion.p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.65, duration: 1, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Profile side */}
          <Card className="relative overflow-hidden border-emerald-200/80 bg-white/75 dark:bg-zinc-950 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
            <motion.div
              aria-hidden
              className="absolute inset-x-0 top-0 h-32 bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            <CardContent className="relative flex flex-col items-center px-5 pb-8 pt-10 text-center sm:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.9,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 1.5,
                }}
                className="relative"
              >
                <div className="relative h-56 w-56 overflow-hidden rounded-[2rem] border-4 border-white bg-emerald-100 sm:h-72 sm:w-72">
                  <Image
                    src="/images/muh-nizar2.jpeg"
                    alt="Kepala Madrasah"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.25, duration: 0.6 }}
                >
                  <Image
                    src="/icons/icon.png"
                    alt="MTsN 2 kota kediri"
                    width={30}
                    height={30}
                    priority
                    className="object-cover"
                  />
                  Kepala Madrasah
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-black sm:text-3xl">
                  Drs. Muh Nizar, M.Pd.
                </h2>
                <p className="mt-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Kepala MTsN 2 Kota Kediri
                </p>
              </motion.div>

              <Separator className="my-6 bg-emerald-100" />

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 25, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 1.25 + index * 0.12,
                        duration: 0.6,
                        type: "spring",
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.04,
                      }}
                      className="rounded-2xl border border-emerald-100 dark:border-emerald-300 bg-emerald-50/70 dark:bg-emerald-700 p-4 shadow-sm"
                    >
                      <Icon className="mx-auto mb-2 h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                      <p className="text-lg font-black">
                        {item.value}
                      </p>
                      <p className="text-xs font-medium opacity-50">
                        {item.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Message side */}
          <Card className="relative overflow-hidden border-emerald-200/80 bg-white/80 dark:bg-zinc-950 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
            <motion.div
              aria-hidden
              className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-emerald-100 dark:bg-emerald-600"
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <CardHeader className="relative space-y-4 px-5 pt-7 sm:px-8 sm:pt-8">
              <motion.div
                initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  delay: 0.95,
                  duration: 0.7,
                  type: "spring",
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg"
              >
                <Quote className="h-7 w-7" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.8 }}
              >
                <CardTitle className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh
                </CardTitle>
                <p className="mt-3 text-sm font-medium text-emerald-700">
                  Pesan dan harapan untuk keluarga besar madrasah
                </p>
              </motion.div>
            </CardHeader>

            <CardContent className="relative px-5 pb-7 sm:px-8 sm:pb-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.16,
                      delayChildren: 1.2,
                    },
                  },
                }}
                className="space-y-5 text-base leading-8 sm:text-lg"
              >
                {[
                  "Alhamdulillah, segala puji bagi Allah SWT atas limpahan rahmat dan karunia-Nya sehingga madrasah kita terus tumbuh menjadi ruang pendidikan yang menanamkan ilmu, akhlak, dan karakter mulia.",
                  "Melalui website ini, kami ingin menghadirkan wajah madrasah yang terbuka, informatif, dan dekat dengan masyarakat. Website ini bukan hanya media informasi, tetapi juga jembatan komunikasi antara madrasah, peserta didik, orang tua, alumni, dan seluruh pihak yang peduli terhadap pendidikan.",
                  "Kami percaya bahwa pendidikan terbaik lahir dari kolaborasi. Guru yang ikhlas mendidik, siswa yang semangat belajar, orang tua yang mendampingi, serta lingkungan yang mendukung akan membentuk generasi yang cerdas secara intelektual, matang secara emosional, dan kuat secara spiritual.",
                  "Semoga madrasah ini senantiasa menjadi tempat tumbuhnya generasi beriman, berilmu, berakhlakul karimah, serta mampu memberi manfaat bagi agama, bangsa, dan masyarakat.",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 28,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.75,
                      ease: "easeOut",
                    }}
                    className="text-pretty"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.45, duration: 0.75 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link href={'/about/budaya'}>
                  
                <Button className="group h-12 rounded-full bg-emerald-600 px-6 text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-700">
                  Selanjutnya
                  <motion.span
                    className="ml-2 inline-flex"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
