export default function Rapot() {
  const rdmUrl = "https://rdm.example.com"; 
  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-hidden">
          {/* Background Gradient + Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
    
          {/* Navbar */}
          <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <span className="font-semibold text-2xl text-white">RDM Portal</span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                <a href="#tentang" className="hover:text-white transition">Tentang</a>
                <a href="#cara" className="hover:text-white transition">Cara Pengambilan</a>
                <a href="#faq" className="hover:text-white transition">FAQ</a>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Portal Resmi Pengambilan Rapot
                </div>
    
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                  Ambil Rapot Siswa<br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Lebih Mudah
                  </span>
                </h1>
    
                <p className="text-xl text-gray-400 max-w-lg">
                  Akses dan unduh rapor siswa secara digital dengan cepat, aman, dan transparan. 
                  Tinggal klik, rapor langsung tersedia.
                </p>
    
                <div className="flex flex-col sm:flex-row gap-4">
                  <ShinyButton
                    onClick={() => window.open(rdmUrl, "_blank")}
                    className="text-lg px-10 py-7 rounded-2xl font-semibold flex items-center gap-3 group"
                  >
                    Ambil Rapot Sekarang
                    <ArrowRight className="group-hover:translate-x-1 transition" />
                  </ShinyButton>
    
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/5 text-lg px-8 py-7 rounded-2xl"
                    onClick={() => window.open(rdmUrl, "_blank")}
                  >
                    <Download className="mr-2" /> Lihat Demo
                  </Button>
                </div>
    
                <div className="flex items-center gap-8 text-sm pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["👩‍🎓", "👨‍🎓", "👩🏻‍🎓"].map((emoji, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-zinc-800 flex items-center justify-center text-lg">
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-white">5000+ Siswa</p>
                      <p className="text-gray-500 text-xs">Sudah mengambil rapor</p>
                    </div>
                  </div>
    
                  <div className="h-10 w-px bg-white/10" />
    
                  <div className="flex items-center gap-2 text-emerald-400">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Online • Aman • Real-time</span>
                  </div>
                </div>
              </div>
    
              {/* Right Visual */}
              <div className="relative hidden md:block">
                <div className="relative z-10">
                  <MovingBorder duration={15} className="rounded-3xl">
                    <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        {/* Mock Rapor Card */}
                        <div className="bg-white text-black w-[85%] rounded-2xl p-6 shadow-xl">
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <div className="font-bold text-lg">Raport Semester 2</div>
                              <div className="text-sm text-gray-600">Tahun Ajaran 2025/2026</div>
                            </div>
                            <div className="text-right">
                              <div className="text-emerald-600 font-semibold">4.12</div>
                              <div className="text-xs text-gray-500">IP Semester</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span>Matematika</span>
                              <span className="font-medium">A-</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Bahasa Indonesia</span>
                              <span className="font-medium">A</span>
                            </div>
                            <div className="flex justify-between">
                              <span>IPA</span>
                              <span className="font-medium">B+</span>
                            </div>
                          </div>
    
                          <div className="mt-8 pt-6 border-t text-center text-xs text-gray-500">
                            Ditandatangani secara digital • 01 Juni 2026
                          </div>
                        </div>
                      </div>
                    </div>
                  </MovingBorder>
                </div>
    
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </section>
        </div>
  )
}
