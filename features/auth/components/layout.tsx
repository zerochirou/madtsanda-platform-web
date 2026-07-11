"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";

export function LoginLayout({ children }: ComponentProps<"div">) {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50 selection:bg-emerald-500/30 selection:text-emerald-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/30 dark:selection:text-emerald-100"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "circInOut",
            delay: 3.1
          }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-600/10"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "circInOut",
            delay: 3.3
          }}
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-600/10"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "circInOut",
            delay: 3.5
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-emerald-300/10 blur-2xl dark:bg-emerald-500/5"
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.10] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:py-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 1, y: 1000, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 , ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-emerald-900/20 sm:p-8"
          >
            <div className="mb-8 space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 20 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 4.5 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Madtsanda Connect
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
              >
                Selamat Datang
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-sm text-zinc-500 dark:text-zinc-400"
              >
                Masuk untuk mengakses pengumuman internal.
              </motion.p>
            </div>

            {children}
          </motion.div>

          <motion.p
            initial={{ opacity: 1,}}
            animate={{ opacity: 1, y: [18, -2, 0] }}
            transition={{ delay: 3.5, duration: 0.7 }}
            className="mt-6 text-center text-[11px] text-zinc-400"
          >
            &copy; {new Date().getFullYear()} Madtsanda Connect. Unit
            Pendidikan Madrasah.
          </motion.p>
        </div>
      </main>
    </div>
  );
}
