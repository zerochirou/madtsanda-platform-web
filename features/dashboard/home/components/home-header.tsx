import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeHeader() {
  return (
    <div className="m-3 rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 px-5 py-8 text-white sm:m-6 sm:rounded-3xl sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <div className="min-w-0 flex-1">
          <span className="text-base font-semibold tracking-wide sm:text-xl">
            Madtsanda.<span className="text-emerald-300">Connect</span>
          </span>
          <h1 className="mt-3 mb-6 max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
            Tingkatkan Pengalaman Pembelajaran Anda dengan Madtsanda.
            <span className="text-emerald-300">Connect</span>
          </h1>
          <Button className="flex items-center gap-2 rounded-full bg-black px-6 py-5 text-sm font-semibold text-white hover:bg-gray-800 sm:px-8 sm:py-6 sm:text-base">
            Pahami
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="hidden lg:flex items-center justify-center w-48 h-48">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-20 h-20 bg-emerald-400 rounded-lg opacity-60"></div>
            <div className="w-20 h-20 bg-emerald-300 rounded-lg opacity-40"></div>
            <div className="w-20 h-20 bg-emerald-300 rounded-lg opacity-40"></div>
            <div className="w-20 h-20 bg-emerald-400 rounded-lg opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
