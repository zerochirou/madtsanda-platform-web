"use client"

import { useState } from "react";
import { teachersData } from "@/components/data/teachers";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function TeacherDirectory() {
  const [showAllTeachers, setShowAllTeachers] = useState(false);

  return (
    <Dialog open={showAllTeachers} onOpenChange={setShowAllTeachers}>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-zinc-50 dark:bg-zinc-800/50 uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400">
            <tr>
              <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                Nama Lengkap
              </th>
              <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                NIP
              </th>
              <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                Jabatan / Golongan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {teachersData.slice(0, 5).map((guru, idx) => (
              <tr
                key={idx}
                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors"
              >
                <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">
                  {guru.nama}
                </td>
                <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                  {guru.nip}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400">
                    {guru.nip}
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={3}
                className="px-6 py-4 text-center text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                onClick={() => setShowAllTeachers(true)}
              >
                Lihat Semua Tenaga Pendidik (100+)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Daftar Lengkap Tenaga Pendidik</DialogTitle>
          <DialogDescription>
            Berikut adalah daftar lengkap semua tenaga pendidik di sekolah.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-x-auto max-h-[70vh] rounded-md border">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50 uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400 sticky top-0">
              <tr>
                <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  Nama Lengkap
                </th>
                <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  NIP
                </th>
                <th className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                  Jabatan / Golongan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {teachersData.map((guru, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">
                    {guru.nama}
                  </td>
                  <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                    {guru.nip}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400">
                      {guru.nip}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  )
}
