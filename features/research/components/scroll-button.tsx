"use client"

import { Button } from "@/components/ui";

export function ScrollButton() {
  return (
    <Button
      size="lg"
      className="h-14 px-10 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-base shadow-xl shadow-emerald-500/30"
      onClick={() =>
        document
          .getElementById("research-library")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      Browse Research
    </Button>
  );
}
