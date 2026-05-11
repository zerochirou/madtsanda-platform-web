import Link from "next/link";
import { footerLinks } from "../data/navigation";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-16 lg:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16 border-b border-zinc-800 pb-12 lg:pb-16">
          <div className="sm:col-span-2">
            <Link href="/">
              <div className="text-4xl lg:text-5xl font-bold tracking-tighter mb-4 lg:mb-6">
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
              Email: mtsn_kdr_2@yahoo.co.id
              <br />
              Web: mtsn2kediri.sch.id
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-zinc-600 gap-4 lg:gap-0">
          <p>
            &copy; {new Date().getFullYear()} MTsN 2 Kota Kediri. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:space-x-6 font-medium text-zinc-400">
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
