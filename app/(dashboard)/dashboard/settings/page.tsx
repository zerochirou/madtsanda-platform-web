import { Shield, Moon, Bell, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function SettingsPage() {
  return (
    <div className="flex flex-col flex-1 p-6 gap-6 max-w-6xl mx-auto w-full">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Pengaturan Platform</h1>
          <Badge variant="outline" className="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
            Konfigurasi Sistem
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Kelola preferensi antarmuka, keamanan akun, dan sesi Madtsanda Connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tampilan & Tema */}
        <Card className="border border-border/60 shadow-sm bg-card/60 backdrop-blur-xs">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Tema & Tampilan</CardTitle>
                  <CardDescription className="text-xs">
                    Pilih skema warna antarmuka yang nyaman untuk Anda
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/40">
              <div>
                <p className="text-sm font-semibold">Mode Tampilan</p>
                <p className="text-xs text-muted-foreground">Terang, Gelap, atau Otomatis (Sistem)</p>
              </div>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Tema otomatis tersimpan di peramban Anda</span>
            </div>
          </CardContent>
        </Card>

        {/* Keamanan & Akses */}
        <Card className="border border-border/60 shadow-sm bg-card/60 backdrop-blur-xs">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Keamanan Sesi</CardTitle>
                  <CardDescription className="text-xs">
                    Status perlindungan autentikasi dan token
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/40">
              <div>
                <p className="text-sm font-semibold">Enkripsi Sesi</p>
                <p className="text-xs text-muted-foreground">Token JWT aman dengan Better Auth</p>
              </div>
              <Badge variant="outline" className="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                Aktif
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Autentikasi terenkripsi SSL/TLS end-to-end</span>
            </div>
          </CardContent>
        </Card>

        {/* Notifikasi Sistem */}
        <Card className="border border-border/60 shadow-sm bg-card/60 backdrop-blur-xs md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Kanal Notifikasi</CardTitle>
                <CardDescription className="text-xs">
                  Pemberitahuan perubahan data akademik dan pengumuman
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Notifikasi pembaruan berita, status verifikasi karya ilmiah (Research), dan ketersediaan buku (Digital Library) akan dikirimkan langsung ke dashboard akun Anda.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
