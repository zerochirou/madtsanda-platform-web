"use client";

import React, { useState } from "react";
import { 
  User, 
  Lock, 
  Bell, 
  Moon, 
  Sun, 
  Shield, 
  Globe, 
  ChevronRight,
  Camera,
  CheckCircle2,
  Save
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/auth-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import apiClient from "@/lib/axios";

export default function SettingsPage() {
  const { user, setUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState("Profil");
  const [isSaving, setIsSaving] = useState(false);

  const profileSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    phone: z.string().optional(),
    address: z.string().optional(),
  });

  type ProfileFormValues = z.infer<typeof profileSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onUpdateProfile = async (data: ProfileFormValues) => {
    setIsSaving(true);
    try {
      const response = await apiClient.patch("/api/users/me", data);
      setUser(response.data);
      alert("Profil berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui profil.");
    } finally {
      setIsSaving(false);
    }
  };

  const menuItems = [
    { name: "Profil", icon: User },
    { name: "Keamanan", icon: Lock },
    { name: "Notifikasi", icon: Bell },
    { name: "Tampilan", icon: Moon },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight font-outfit">Pengaturan</h1>
        <p className="text-zinc-500 text-sm mt-1">Kelola preferensi akun dan tampilan portal Anda.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Sidebar Menu */}
        <aside className="w-full lg:w-64 shrink-0">
           <Card className="border-none shadow-sm bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden">
              <CardContent className="p-2">
                 {menuItems.map((item) => (
                    <button
                     key={item.name}
                     onClick={() => setActiveTab(item.name)}
                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                       activeTab === item.name 
                         ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                         : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                     }`}
                    >
                       <item.icon className="h-5 w-5" />
                       {item.name}
                    </button>
                 ))}
              </CardContent>
           </Card>
        </aside>

        {/* Right: Content */}
        <div className="flex-1">
           <AnimatePresence mode="wait">
              {activeTab === "Profil" && (
                <motion.div key="profil" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                   <Card className="border-none shadow-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                      <CardHeader className="p-8 pb-0">
                         <CardTitle className="text-2xl font-black font-outfit">Profil Saya</CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 space-y-8">
                         <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative group">
                               <Avatar className="h-24 w-24 border-4 border-white dark:border-zinc-800 shadow-xl">
                                  <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name}&background=10b981&color=fff`} />
                                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                               </Avatar>
                               <button className="absolute bottom-0 right-0 h-8 w-8 bg-emerald-500 text-white rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 shadow-lg hover:scale-110 transition-transform">
                                  <Camera className="h-4 w-4" />
                               </button>
                            </div>
                            <div className="text-center md:text-left space-y-1">
                               <h3 className="text-xl font-bold">{user?.name}</h3>
                               <p className="text-sm text-zinc-500">{user?.role} {user?.kelas || ""}</p>
                               <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{user?.email}</p>
                            </div>
                         </div>

                         <Separator className="bg-zinc-100 dark:bg-zinc-800" />

                         <form onSubmit={handleSubmit(onUpdateProfile)} className="space-y-8">
                            {/* ── Base fields (all roles) ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Nama Lengkap</Label>
                                  <Input 
                                    {...register("name")} 
                                    className={`rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium ${errors.name ? "ring-1 ring-red-500" : ""}`} 
                                  />
                                  {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name.message}</p>}
                               </div>
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</Label>
                                  <Input 
                                    {...register("email")} 
                                    className={`rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium ${errors.email ? "ring-1 ring-red-500" : ""}`} 
                                  />
                                  {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email.message}</p>}
                               </div>
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Kelas / Divisi</Label>
                                  <Input defaultValue={user?.kelas || "Staf"} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-medium opacity-60" />
                               </div>
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">NIP / NISN</Label>
                                  <Input defaultValue={user?.nisn || "1234567890"} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-medium opacity-60" />
                               </div>
                            </div>

                            {/* ── Role-specific: SISWA ── */}
                            {user?.role === "Siswa" && (
                              <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                  <div className="h-0.5 flex-1 bg-zinc-100 dark:bg-zinc-800" />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 px-2">Data Siswa</span>
                                  <div className="h-0.5 flex-1 bg-zinc-100 dark:bg-zinc-800" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Grade / Tingkat</Label>
                                    <select {...register("grade" as any)} defaultValue={user?.grade || ""} className="w-full rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none text-sm font-medium px-4 focus:ring-1 focus:ring-emerald-500 outline-none">
                                      <option value="">— Pilih Tingkat —</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Kelas</Label>
                                    <select {...register("class_name" as any)} defaultValue={user?.class_name || ""} className="w-full rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none text-sm font-medium px-4 focus:ring-1 focus:ring-emerald-500 outline-none">
                                      <option value="">— Pilih Kelas —</option>
                                      {"ABCDEFGHIJKLMN".split("").map(c => (
                                        <option key={c} value={c}>{c}</option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Status</Label>
                                    <Input defaultValue={user?.student_status || "Aktif"} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-bold opacity-60" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Jenis Kelamin</Label>
                                    <select {...register("gender" as any)} defaultValue={user?.gender || ""} className="w-full rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none text-sm font-medium px-4 focus:ring-1 focus:ring-emerald-500 outline-none">
                                      <option value="">— Pilih —</option>
                                      <option value="Laki-laki">Laki-laki</option>
                                      <option value="Perempuan">Perempuan</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Tempat Lahir</Label>
                                    <Input {...register("place_of_birth" as any)} defaultValue={user?.place_of_birth || ""} placeholder="Kota asal" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Tanggal Lahir</Label>
                                    <Input {...register("date_of_birth" as any)} type="date" defaultValue={user?.date_of_birth || ""} className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Nomor HP</Label>
                                    <Input {...register("phone" as any)} defaultValue={user?.phone || ""} placeholder="08xx xxxx xxxx" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">URL Foto Profil</Label>
                                    <Input {...register("profile_url" as any)} defaultValue={user?.profile_url || ""} placeholder="https://..." className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="md:col-span-2 space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Alamat</Label>
                                    <Input {...register("address" as any)} defaultValue={user?.address || ""} placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Role</Label>
                                    <Input defaultValue={user?.role} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-bold opacity-60" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Terdaftar Sejak</Label>
                                    <Input defaultValue={user?.created_at || "—"} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-medium opacity-60" />
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* ── Role-specific: GURU ── */}
                            {user?.role === "Guru" && (
                              <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                  <div className="h-0.5 flex-1 bg-zinc-100 dark:bg-zinc-800" />
                                  <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 px-2">Data Pengajar</span>
                                  <div className="h-0.5 flex-1 bg-zinc-100 dark:bg-zinc-800" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Gelar Akademik</Label>
                                    <Input {...register("academic_title" as any)} defaultValue={user?.academic_title || ""} placeholder="S.Pd, M.Pd, dll" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Jenis Kelamin</Label>
                                    <select {...register("gender" as any)} defaultValue={user?.gender || ""} className="w-full rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none text-sm font-medium px-4 focus:ring-1 focus:ring-emerald-500 outline-none">
                                      <option value="">— Pilih —</option>
                                      <option value="Laki-laki">Laki-laki</option>
                                      <option value="Perempuan">Perempuan</option>
                                    </select>
                                  </div>
                                  <div className="md:col-span-2 space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Mata Pelajaran yang Diampu</Label>
                                    <Input {...register("academic_handles" as any)} defaultValue={user?.academic_handles || ""} placeholder="Matematika, Fisika, Kimia (pisahkan koma)" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Tempat Lahir</Label>
                                    <Input {...register("place_of_birth" as any)} defaultValue={user?.place_of_birth || ""} placeholder="Kota asal" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Tanggal Lahir</Label>
                                    <Input {...register("date_of_birth" as any)} type="date" defaultValue={user?.date_of_birth || ""} className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Nomor HP</Label>
                                    <Input {...register("phone" as any)} defaultValue={user?.phone || ""} placeholder="08xx xxxx xxxx" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Sekunder</Label>
                                    <Input {...register("secondary_email" as any)} defaultValue={user?.secondary_email || ""} placeholder="email@alternatif.com" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">URL Foto Profil</Label>
                                    <Input {...register("profile_url" as any)} defaultValue={user?.profile_url || ""} placeholder="https://..." className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="md:col-span-2 space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Alamat</Label>
                                    <Input {...register("address" as any)} defaultValue={user?.address || ""} placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Terdaftar Sejak</Label>
                                    <Input defaultValue={user?.created_at || "—"} disabled className="rounded-xl h-12 bg-zinc-100 dark:bg-zinc-800/50 border-none font-medium opacity-60" />
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="flex justify-end pt-4">
                               <Button 
                                 type="submit"
                                 disabled={isSaving}
                                 className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl h-12 px-10 font-black shadow-xl shadow-emerald-500/30 active:scale-[0.98] transition-all"
                               >
                                  {isSaving ? "MENYIMPAN..." : (
                                    <><Save className="h-4 w-4 mr-2" /> SIMPAN PERUBAHAN</>
                                  )}
                               </Button>
                            </div>
                         </form>
                      </CardContent>
                   </Card>
                </motion.div>
              )}


              {activeTab === "Keamanan" && (
                <motion.div key="keamanan" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                   <Card className="border-none shadow-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                      <CardHeader className="p-8 pb-4">
                         <CardTitle className="text-2xl font-black font-outfit">Keamanan Akun</CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 space-y-6">
                         <div className="space-y-4">
                            <div className="space-y-2">
                               <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Kata Sandi Lama</Label>
                               <Input type="password" placeholder="••••••••" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Kata Sandi Baru</Label>
                                  <Input type="password" placeholder="••••••••" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                               </div>
                               <div className="space-y-2">
                                  <Label className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Konfirmasi Sandi Baru</Label>
                                  <Input type="password" placeholder="••••••••" className="rounded-xl h-12 bg-zinc-50 dark:bg-zinc-800 border-none font-medium" />
                               </div>
                            </div>
                         </div>
                         <Button className="w-full h-12 bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-2xl font-bold shadow-lg">
                            UPDATE KATA SANDI
                         </Button>
                      </CardContent>
                   </Card>
                </motion.div>
              )}

              {activeTab === "Notifikasi" && (
                <motion.div key="notifikasi" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                   <Card className="border-none shadow-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                      <CardHeader className="p-8 pb-4">
                         <CardTitle className="text-2xl font-black font-outfit">Preferensi Notifikasi</CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 space-y-4">
                         {[
                           { t: "Pengumuman Sekolah", d: "Terima notifikasi saat ada info baru dari sekolah." },
                           { t: "Update Tugas", d: "Dapatkan pemberitahuan saat guru memberikan tugas." },
                           { t: "Pesan & Diskusi", d: "Notifikasi saat ada pesan masuk atau komentar baru." },
                         ].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
                              <div className="flex items-center gap-4">
                                 <div className="h-10 w-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                                    <Bell className="h-5 w-5 text-emerald-500" />
                                 </div>
                                 <div>
                                    <p className="font-bold text-sm">{item.t}</p>
                                    <p className="text-[10px] text-zinc-500">{item.d}</p>
                                 </div>
                              </div>
                              <div className="h-6 w-10 bg-emerald-500 rounded-full flex items-center px-1">
                                 <div className="h-4 w-4 bg-white rounded-full ml-auto" />
                              </div>
                           </div>
                         ))}
                      </CardContent>
                   </Card>
                </motion.div>
              )}

              {activeTab === "Tampilan" && (
                 <motion.div key="tampilan" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <Card className="border-none shadow-sm bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden">
                       <CardHeader className="p-8 pb-4">
                          <CardTitle className="text-2xl font-black font-outfit">Tampilan Portal</CardTitle>
                       </CardHeader>
                       <CardContent className="p-8 space-y-6">
                          <div className="flex items-center justify-between p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                             <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                                   <Moon className="h-5 w-5 text-zinc-500" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Mode Tampilan</p>
                                   <p className="text-xs text-zinc-500">Sesuaikan tampilan dengan preferensi cahaya Anda.</p>
                                </div>
                             </div>
                             <ThemeToggle />
                          </div>

                          <div className="flex items-center justify-between p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 opacity-60">
                             <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm">
                                   <Globe className="h-5 w-5 text-zinc-500" />
                                </div>
                                <div>
                                   <p className="font-bold text-sm">Bahasa</p>
                                   <p className="text-xs text-zinc-500">Pilih bahasa yang digunakan di portal.</p>
                                </div>
                             </div>
                             <Button variant="ghost" className="font-bold text-xs uppercase tracking-widest">Indonesia <ChevronRight className="h-4 w-4 ml-1" /></Button>
                          </div>
                       </CardContent>
                    </Card>
                 </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
