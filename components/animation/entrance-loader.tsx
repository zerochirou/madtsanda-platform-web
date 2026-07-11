"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

type EntranceLoaderProps = {
  onComplete: () => void;
};

export function EntranceLoader({ onComplete }: EntranceLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing components...");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Increment progress dynamically
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Random increments for a natural feel
        const increment = Math.floor(Math.random() * 15) + 5;
        const nextProgress = Math.min(prev + increment, 100);
        
        // Update helper texts based on progress percentage
        if (nextProgress < 30) {
          setLoadingText("Initializing madtsanda cores...");
        } else if (nextProgress < 60) {
          setLoadingText("Optimizing brain sync pipeline...");
        } else if (nextProgress < 85) {
          setLoadingText("Securing data priority lanes...");
        } else {
          setLoadingText("Official Website is ready!");
        }
        
        return nextProgress;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 550);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%",
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-white bg-black overflow-hidden"
          // style={{
          //   backgroundImage:
          //     "radial-gradient(circle, rgba(204,255,0,0.1) 1.5px, transparent 1.5px)",
          //   backgroundSize: "32px 32px",
          // }}
        >
          {/* Scanline CRT simulation */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent bg-[length:100%_4px]" />

          <div className="w-full max-w-sm px-6">
            {/* Logo Mark */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >

                <Image src="/icons/icon.png" alt="paseban" width={80} height={80} />
              <div className="leading-none text-left">
                <p className="text-[10px] font-black uppercase tracking-wider text-emerald-500">Official Website</p>
                <p className="text-2xl font-black tracking-tight">
                  MTsN 2 Kota Kediri<span className="text-emerald-500">.</span>
                </p>
              </div>
            </motion.div>

            {/* Console Log outputs */}
            <div className="mb-4 font-mono text-[10px] opacity-50 space-y-1 text-left border-l-2 dark:border-white/20 pl-3">
              <p>SYSTEM: CONNECTING TO SERVER...</p>
              <p>OS: ZENSE OS. BOOT_SEQUENCE: OK</p>
              <p>STATS: {progress}% CONNECTED</p>
            </div>

            {/* Brutalist Custom Progress Bar */}
            <div className="relative h-6 w-full border-3 border-emerald-500 bg-[#171717] p-0.5  overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="h-full bg-emerald-text-emerald-500"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 8px)",
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-black text-emerald-400 mix-blend-difference">
                {progress}%
              </span>
            </div>

            {/* Loader Text Status */}
            <div className="mt-4 flex items-center justify-between text-xs font-bold font-mono">
              <motion.span 
                key={loadingText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-500"
              >
                {loadingText}
              </motion.span>
              <span className="animate-pulse">● ONLINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}