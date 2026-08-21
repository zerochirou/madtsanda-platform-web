"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { navigationData } from "../data/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setExpandedSections([]);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const showSolid = scrolled || !isHome;

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <>
      <nav
        className={`fixed top-[var(--site-banner-offset,0px)] w-full z-50 transition-all duration-500 ${
          showSolid
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl py-3 shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50"
            : "bg-transparent py-3 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center gap-3">
          {/* Logo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link href="/" className="group flex min-w-0 items-center gap-2 lg:gap-6">
              <Image
                suppressHydrationWarning
                src="/icons/icon.png"
                alt="Logo MTsN 2 Kota Kediri"
                width={50}
                height={50}
                className="w-10 shrink-0 object-contain px-0 tracking-wide lg:w-14"
              />
              <motion.div
                className={`flex min-w-0 flex-col text-xl font-bold tracking-wide transition-colors duration-300 md:-ml-4 lg:-ml-4 ${
                  showSolid ? "text-zinc-900 dark:text-white" : "text-white"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="-mb-1 hidden text-md md:block">MTsN 2</span>
                <span className="hidden text-sm md:block">Kota Kediri</span>
                <span className="block max-w-[190px] truncate text-sm tracking-wider sm:max-w-[260px] md:hidden">
                  MTsN 2 Kota Kediri
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            animate={{ y: 0, opacity: 1 }}
            className={`hidden lg:flex items-center space-x-3 xl:space-x-8 text-sm font-medium ${
              showSolid ? "text-zinc-600 dark:text-zinc-400" : "text-white/90"
            }`}
          >
            {/*<Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-xl font-medium transition-colors hover:text-emerald-400"
            >
              Beranda
            </Link>*/}
            <NavigationMenu>
              <NavigationMenuList>
                {navigationData.map((labels, index) => {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger
                        className={
                          "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 hover:text-emerald-400 focus:text-emerald-400 font-medium transition-all outline-none hover:bg-transparent focus:bg-transparent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-transparent/50 data-popup-open:hover:bg-transparent data-open:bg-transparent/50 data-open:hover:bg-transparent data text-xl"
                        }
                      >
                        {labels.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-2 md:w-100 lg:w-150 lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-bl from-emerald-100 via-emerald-500  to-emerald-600 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden text-white">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                <div className="text-xl font-bold leading-tight">
                                  {labels.label}
                                </div>
                              </div>
                              <p className="text-sm leading-tight opacity-70">
                                {labels.description}
                              </p>
                            </div>
                          </li>

                          <div className="flex flex-col gap-1">
                            {labels.items.map((item, itemIndex) => (
                              <ListItem
                                key={itemIndex}
                                href={item.href}
                                title={item.label}
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </div>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Desktop Actions */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            animate={{ x: 0, opacity: 1 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <ThemeToggle />
            <Link href="/login" prefetch>
              <button className="dark:bg-emerald-950 bg-emerald-100 text-emerald-400 border border-emerald-400 border-b-4 font-bold font-mono overflow-hidden relative px-4 py-1 rounded-xl dark:hover:brightness-150 hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="dark:bg-emerald-400 bg-emerald-100 shadow-emerald-400 absolute top-[-150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                Connect
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            transition={{
              ease: "easeInOut",
            }}
            animate={{ x: 0, opacity: 1 }}
            className="relative z-50 lg:hidden"
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
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-x-0 bottom-0 top-[var(--site-banner-offset,0px)] z-40 bg-black/60 lg:hidden"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed bottom-0 right-0 top-[var(--site-banner-offset,0px)] z-50 w-full max-w-[320px] overflow-y-auto bg-white shadow-2xl dark:bg-zinc-950 lg:hidden"
            >
              <div className="pb-6 px-4 pt-4">
                {/* Header Mobile */}
                <div className="flex items-center justify-end mb-4">
                  <button onClick={() => setMobileOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Sections */}
                <div className="space-y-2">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-sm border border-zinc-200 px-3 py-3 font-semibold transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                  >
                    Beranda
                  </Link>
                  {navigationData.map((section, index) => {
                    const isExpanded = expandedSections.includes(index);

                    return (
                      <div
                        key={index}
                        className="border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden"
                      >
                        {/* Section Header */}
                        <button
                          onClick={() => toggleSection(index)}
                          className="w-full flex items-center justify-between px-3 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-base">
                              {section.label}
                            </div>
                            <div className="line-clamp-1 text-xs text-zinc-500 dark:text-zinc-400">
                              {section.description}
                            </div>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {/* List Items */}
                              <div className="px-2 pb-4 space-y-1">
                                {section.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <div className="font-medium text-sm">
                                      {item.label}
                                    </div>
                                    {item.description && (
                                      <div className="mt-0.5 line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400">
                                        {item.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 space-y-3">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>

                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    prefetch
                  >
                    <button className="w-full dark:bg-emerald-950 bg-emerald-100 text-emerald-400 border border-emerald-400 border-b-4 font-bold font-mono overflow-hidden relative px-4 py-3 rounded-2xl dark:hover:brightness-150 hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="dark:bg-emerald-400 bg-emerald-100 shadow-emerald-400 absolute top-[-150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                      Connect
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props} className="container">
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <span className="flex flex-row items-center gap-1 text-sm">
            <SquareArrowOutUpRight className="size-4"/>
              <div className="leading-none font-medium group-hover:text-emerald-400">{title}</div>
            </span>
            <div className="line-clamp-2 text-xs text-zinc-500 opacity-70 group-hover:text-emerald-400 dark:text-zinc-400">
              {children}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
