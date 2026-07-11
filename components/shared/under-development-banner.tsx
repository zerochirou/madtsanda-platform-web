import { Construction } from "lucide-react";

export function UnderDevelopmentBanner() {
  return (
    <div
      className="sticky top-0 z-[70] w-full bg-zinc-950 text-white"
      role="banner"
      aria-label="Status pengembangan website"
    >
      <div className="h-11 border-b border-amber-300/30 shadow-[0_1px_0_rgba(255,255,255,0.08)] sm:h-12">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-2 px-3 sm:px-6">
          <span className="inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full border border-amber-300/35 bg-amber-300/10 px-2 text-[10px] font-black uppercase tracking-[0.14em] text-amber-200 sm:px-2.5 sm:text-[11px]">
            <Construction className="size-3.5" aria-hidden />
            <span className="sm:hidden">Under Development</span>
            <span className="hidden sm:inline">Under Development</span>
          </span>
          <p className="min-w-0 truncate text-xs font-medium leading-none text-zinc-100 sm:text-sm">
            <span className="sm:hidden">Sedang disempurnakan.</span>
            <span className="hidden sm:inline">
              Madtsanda Platform sedang dalam pengembangan aktif. Beberapa fitur
              dapat berubah sewaktu-waktu.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
