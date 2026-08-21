"use client";

import { medsos } from "@/components/data/medsos";
import { Card } from "@/components/ui";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Medsos() {
  return (
    <div className="relative flex mb-20 items-center justify-center overflow-hidden px-4 py-2">
      <div className="grid w-full max-w-4xl grid-cols-4 gap-4">
        {medsos.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Card className="relative h-full overflow-hidden border-border/50 bg-background/70 p-0 backdrop-blur-xl transition-all duration-300 hover:border-foreground/20 hover:shadow-xl">
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-foreground/[0.04] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-foreground/[0.08]" />

              <div className="relative flex min-h-[180px] flex-col justify-between p-5">
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/50 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={`/icons/${item.svg}`}
                      width={26}
                      height={26}
                      alt=""
                      className="object-contain"
                    />
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/50 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Text */}
                <div className="mt-8">
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Follow us on {item.name}
                  </p>
                </div>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
