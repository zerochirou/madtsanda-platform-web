"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock3,
  DoorOpen,
  HeartHandshake,
  Landmark,
  MessageCircle,
  Moon,
  PenLine,
  School,
  ShieldCheck,
  Shirt,
  Smile,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Sejarah() {
  const pillars = [
    {
      title: "Aqidah yang Kuat",
      description:
        "Beraqidah tauhid, tidak terlibat kelompok yang bertentangan dengan aqidah, dan tidak mengkafirkan sesama muslim.",
      icon: BookOpen,
      accentIconOne: Star,
      accentIconTwo: Moon,
      highlight: false,
    },
    {
      title: "Ibadah yang Benar",
      description:
        "Membiasakan sholat fardhu berjamaah 5 waktu, sholat sunnah (Rawatib & Dhuha), puasa Ramadhan & sunnah, serta gemar membaca Al-Qur'an.",
      icon: Landmark,
      accentIconOne: BookOpen,
      accentIconTwo: Sparkles,
      highlight: false,
    },
    {
      title: "Akhlak Karimah",
      description:
        "Santun & afsyus salam, jujur & anti-menyontek, menjaga adab pergaulan dengan yang bukan mahram, serta berkomitmen hidup sederhana.",
      icon: HeartHandshake,
      accentIconOne: Sparkles,
      accentIconTwo: ShieldCheck,
      highlight: true,
    },
    {
      title: "Disiplin & Mandiri",
      description:
        "Disiplin waktu dan tugas, mandiri, bertanggung jawab, kreatif, inovatif, tetap kritis, serta berprestasi lewat kompetisi yang sehat.",
      icon: Clock3,
      accentIconOne: Trophy,
      accentIconTwo: BookOpen,
      highlight: false,
    },
  ];

  const akhlakItems = [
    {
      label: "Menebar Salam",
      text: "Santun, hormat pada yang lebih tua, afsyus salam, dan membiasakan senyum kepada siapa saja.",
      icon: Smile,
      secondIcon: MessageCircle,
    },
    {
      label: "Kejujuran",
      text: "Bersikap jujur dengan pembiasaan tidak menyontek saat ulangan ataupun curang dalam semua kegiatan.",
      icon: PenLine,
      secondIcon: CheckCircle2,
    },
    {
      label: "Adab Pergaulan",
      text: "Menjaga pergaulan putra-putri (tidak bersentuhan/berkholwat) dan menjaga Ukhuwah Islamiyah.",
      icon: Users,
      secondIcon: ShieldCheck,
    },
    {
      label: "Hidup Sederhana",
      text: "Membangun karakter sederhana dalam penampilan, perilaku, dan cara berpikir di berbagai aspek kehidupan.",
      icon: Shirt,
      secondIcon: BadgeCheck,
    },
  ];

  return (
    <main className="mt-20 relative min-h-screen overflow-hidden bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-500 dark:bg-[#061f17] dark:text-white sm:px-6 lg:px-8">
      {/* Animated emerald-gold background blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/25"
        animate={{
          x: [0, 80, 20, 120, 0],
          y: [0, 40, 120, 20, 0],
          scale: [1, 1.25, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute -right-32 top-48 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl dark:bg-yellow-400/15"
        animate={{
          x: [0, -80, -30, -120, 0],
          y: [0, 90, 30, 140, 0],
          scale: [1, 0.9, 1.2, 1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-300/10"
        animate={{
          scale: [1, 1.35, 0.9, 1.15, 1],
          opacity: [0.35, 0.75, 0.45, 0.7, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative backdrop illustrations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-4 top-28 hidden items-end gap-3 opacity-[0.04] dark:opacity-10 sm:flex"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <School className="h-28 w-28 text-emerald-900 dark:text-white" />
          <DoorOpen className="h-16 w-16 text-emerald-700 dark:text-yellow-200" />
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-4 hidden items-center gap-2 opacity-[0.04] dark:opacity-10 md:flex"
          animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Users className="h-24 w-24 text-emerald-900 dark:text-white" />
          <HeartHandshake className="h-16 w-16 text-emerald-700 dark:text-yellow-200" />
        </motion.div>

        {Array.from({ length: 26 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-600/20 dark:bg-yellow-200/40"
            style={{
              left: `${(index * 41) % 100}%`,
              top: `${(index * 59) % 100}%`,
            }}
            animate={{
              y: [0, -24, 18, 0],
              x: [0, 12, -10, 0],
              opacity: [0.15, 0.75, 0.25, 0.15],
              scale: [1, 1.8, 0.8, 1],
            }}
            transition={{
              duration: 4 + (index % 6),
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 py-8 sm:py-12 lg:min-h-screen lg:justify-center">
        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        > 
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
            className="text-balance text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl"
          >
            Budaya{" "}
            <span className="relative inline-block text-emerald-600 dark:text-emerald-200">
              Madrasah Kami
              <motion.span
                className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-emerald-500 dark:bg-yellow-300/80"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 dark:text-emerald-50/75 sm:text-lg"
          >
            Empat pilar esensial yang berorientasi pada perwujudan karakter siswa yang beraqidah kuat, beribadah benar, disiplin, dan mandiri.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.45,
              },
            },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const AccentIconOne = pillar.accentIconOne;
            const AccentIconTwo = pillar.accentIconTwo;

            return (
              <motion.div
                key={pillar.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 42,
                    scale: 0.92,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: pillar.highlight ? 1.015 : 1.03,
                }}
                className={pillar.highlight ? "md:col-span-2 xl:col-span-2" : ""}
              >
                <Card
                  className={[
                    "group relative h-full overflow-hidden border backdrop-blur-xl transition-all duration-500 rounded-3xl",
                    pillar.highlight
                      ? "border-emerald-200 bg-emerald-900 text-white shadow-2xl shadow-emerald-950/20 dark:border-yellow-300/50 dark:bg-white dark:text-emerald-950 dark:shadow-yellow-500/20"
                      : "border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/10 dark:shadow-black/10 dark:hover:border-emerald-200/40 dark:hover:bg-white/[0.14]",
                  ].join(" ")}
                >
                  <motion.div
                    aria-hidden
                    className={[
                      "absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl",
                      pillar.highlight ? "bg-emerald-800/50 dark:bg-yellow-300/35" : "bg-emerald-100 dark:bg-emerald-300/20",
                    ].join(" ")}
                    animate={{
                      scale: [1, 1.22, 1],
                      opacity: [0.35, 0.8, 0.35],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
                    <School className="absolute bottom-4 right-4 h-28 w-28" />
                    <DoorOpen className="absolute bottom-7 left-5 h-14 w-14" />
                  </div>

                  <CardHeader className="relative space-y-5 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <motion.div
                        className={[
                          "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl shadow-lg",
                          pillar.highlight
                            ? "bg-white text-emerald-900 dark:bg-emerald-900 dark:text-yellow-200 shadow-emerald-950/20"
                            : "bg-emerald-50 text-emerald-700 dark:bg-emerald-300/15 dark:text-emerald-100 dark:shadow-black/10",
                        ].join(" ")}
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{ duration: 0.45 }}
                      >
                        <Icon className="h-8 w-8" />

                        <motion.div
                          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-emerald-950 dark:bg-yellow-300"
                          animate={{
                            y: [0, -4, 0],
                            rotate: [0, 8, 0],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <AccentIconOne className="h-4 w-4" />
                        </motion.div>

                        <motion.div
                          className={[
                            "absolute -bottom-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full shadow-sm",
                            pillar.highlight
                              ? "bg-emerald-800 text-white dark:bg-white/90 dark:text-emerald-900"
                              : "bg-white text-emerald-900 dark:bg-white/90 dark:text-emerald-900",
                          ].join(" ")}
                          animate={{
                            y: [0, 4, 0],
                            rotate: [0, -8, 0],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <AccentIconTwo className="h-4 w-4" />
                        </motion.div>
                      </motion.div>

                      {pillar.highlight && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1, type: "spring" }}
                        >
                          <Badge className="border border-emerald-700 bg-emerald-800 text-white hover:bg-emerald-800 dark:border-yellow-400/50 dark:bg-yellow-100 dark:text-emerald-950 dark:hover:bg-yellow-100">
                            Detail Khusus
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <CardTitle
                        className={[
                          "text-2xl font-black tracking-tight",
                          pillar.highlight ? "text-white dark:text-emerald-950" : "text-slate-900 dark:text-white",
                        ].join(" ")}
                      >
                        {pillar.title}
                      </CardTitle>

                      <p
                        className={[
                          "mt-3 text-sm leading-7",
                          pillar.highlight
                            ? "text-emerald-100 dark:text-slate-600"
                            : "text-slate-600 dark:text-emerald-50/70",
                        ].join(" ")}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </CardHeader>

                  {pillar.highlight && (
                    <CardContent className="relative px-5 pb-5 sm:px-6 sm:pb-6">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 1,
                            },
                          },
                        }}
                        className="grid gap-3 sm:grid-cols-2"
                      >
                        {akhlakItems.map((item) => {
                          const ItemIcon = item.icon;
                          const SecondIcon = item.secondIcon;

                          return (
                            <motion.div
                              key={item.label}
                              variants={{
                                hidden: { opacity: 0, y: 18, scale: 0.94 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                              }}
                              whileHover={{
                                y: -5,
                                scale: 1.02,
                              }}
                              className="rounded-3xl border border-emerald-800/40 bg-emerald-950/50 p-4 shadow-sm transition-all duration-300 hover:border-yellow-400 hover:bg-emerald-950 dark:border-emerald-100 dark:bg-emerald-50 dark:hover:border-yellow-300 dark:hover:bg-white dark:hover:shadow-lg"
                            >
                              <div className="mb-3 flex items-center gap-3">
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-900 dark:bg-emerald-900 dark:text-yellow-200">
                                  <ItemIcon className="h-5 w-5" />

                                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-emerald-950 dark:bg-yellow-300">
                                    <SecondIcon className="h-3.5 w-3.5" />
                                  </div>
                                </div>

                                <h3 className="text-sm font-black text-white dark:text-emerald-950">
                                  {item.label}
                                </h3>
                              </div>

                              <p className="text-sm leading-6 text-emerald-100/80 dark:text-slate-600">
                                {item.text}
                              </p>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.7 }}
          className="flex justify-center"
        >
          <Button className="group h-12 rounded-full bg-emerald-600 px-6 font-bold text-white shadow-xl shadow-emerald-600/10 hover:bg-emerald-700 dark:bg-yellow-300 dark:text-emerald-950 dark:shadow-yellow-500/20 dark:hover:bg-yellow-200">
            Pelajari Kebiasaan Kami Lanjut
            <motion.span
              className="ml-2 inline-flex"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}