import Link from "next/link";
import { footerLinks } from "../data/navigation";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 lg:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16 border-b border-zinc-800 pb-12 lg:pb-16">
          <div className="sm:col-span-2">
            <Link href="/">
              <div className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:mb-6 lg:text-5xl">
                Madtsanda<span className="text-emerald-500">.</span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Website Resmi MTsN 2 Kota Kediri — Mencetak lulusan yang
              berprestasi, berkarakter Islami, dan peduli lingkungan.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 lg:mb-6 text-zinc-400">
              Lokasi Utama
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Jl. Sunan Ampel No.12
              <br />
              Ngronggo, Kota Kediri
              <br />
              Jawa Timur, Indonesia
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 lg:mb-6 text-zinc-400">Kontak</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Telp: 0354-687895
              <br />
              Email: mtsn2kotakediri.official@gmail.com
              <br />
              Web: mtsn2kotakediri.sch.id
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 lg:flex-row lg:gap-0 lg:text-left">
          <p className="max-w-full">
            &copy; {new Date().getFullYear()} MTsN 2 Kota Kediri. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-medium text-zinc-400 lg:space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
