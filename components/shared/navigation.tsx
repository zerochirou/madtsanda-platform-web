"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { navItems } from "../data/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Only hero page (home) gets transparent navbar
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          showSolid
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl py-3 shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-0">
            <Image
              src="/images/logokemenag.png"
              alt="Logo MTsN 2 Kota Kediri"
              width={100}
              height={100}
              className="object-contain px-0"
            />
            <motion.div
              className={`text-xl md:text-2xl -ml-4 font-bold tracking-tighter transition-colors duration-300 ${
                showSolid ? "text-zinc-900 dark:text-white" : "text-white"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Madtsanda<span className="text-emerald-500">.</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-8 text-sm font-medium ${
              showSolid ? "text-zinc-600 dark:text-zinc-400" : "text-white/90"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-300 hover:text-emerald-500 ${
                  pathname === item.href ? "text-emerald-500" : ""
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login" prefetch>
              <button className="dark:bg-emerald-950 bg-emerald-100 text-emerald-400 border border-emerald-400 border-b-4 font-bold font-mono overflow-hidden relative px-4 py-1 rounded-xl dark:hover:brightness-150 hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="dark:bg-emerald-400 bg-emerald-100 shadow-emerald-400 absolute top-[-150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                Connect
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`transition-colors ${
                mobileOpen
                  ? "text-white"
                  : showSolid
                    ? "text-zinc-900 dark:text-white"
                    : "text-white"
              }`}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center space-y-8"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`text-3xl font-bold transition-colors ${
                      pathname === item.href
                        ? "text-emerald-500"
                        : "text-white hover:text-emerald-400"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 flex flex-col items-center gap-6"
              >
                <ThemeToggle />
                <Link href="/login">
                  <button className="dark:bg-emerald-950 bg-emerald-100 text-emerald-400 border border-emerald-400 border-b-4 font-medium font-mono overflow-hidden relative px-20 py-2 rounded-xl dark:hover:brightness-150 hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="dark:bg-emerald-400 bg-emerald-100 shadow-emerald-400 absolute top-[-150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                    <span className="text-2xl font-bold">Connect</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
