import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeHeader() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-12 text-white rounded-3xl m-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <span className="text-xl font-semibold tracking-wide">
            Madtsanda.<span className="text-emerald-300">Connect</span>
          </span>
          <h1 className="text-4xl font-bold mt-3 mb-6 max-w-2xl">
            Tingkatkan Pengalaman Pembelajaran Anda dengan Madtsanda.<span className="text-emerald-300">Connect</span>
          </h1>
          <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-semibold flex items-center gap-2">
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
