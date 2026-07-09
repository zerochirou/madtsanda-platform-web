import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  IdCard,
  Mail,
  MoreVertical,
  ShieldCheck,
} from "lucide-react";

import { HomeProfileProps } from "@/types/components";
export function HomeProfile({ user, student, teacher }: HomeProfileProps) {
  const profileUrl = student?.profileUrl || teacher?.profileUrl;
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">Profil Pengguna</h3>
        <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      <div className="text-center">
        <div className="relative inline-block mb-4">
          <Avatar className="w-30 h-30">
            <AvatarImage src={profileUrl} alt={user.username} />
            <AvatarFallback className="text-lg">{user.initials}</AvatarFallback>
          </Avatar>
        </div>
        <h4 className="font-bold text-lg">{user.username}</h4>
        <Badge className="capitalize">
          {user.role === "super_user" ? "Supser Access" : user.role}
        </Badge>
      </div>

      <div className="max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 flex items-center p-4 bg-emerald-100 dark:bg-emerald-600 rounded-2xl border border-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-300 transition-colors">
            <div className="size-10 dark:bg-emerald-100 bg-emerald-500 rounded-xl flex items-center justify-center shadow-sm mr-4">
              <Mail className="dark:text-emerald-400 text-emerald-100  size-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider dark:text-emerald-200 text-emerald-800 font-bold">
                Email Address
              </p>
              <p className="text-sm font-semibold dark:text-emerald-100 text-emerald-600">
                {user.email}
              </p>
            </div>
          </div>

          {student && (
            <div className="md:col-span-2 flex items-center justify-between p-4 dark:bg-amber-400 bg-amber-100 rounded-2xl border dark:border-amber-100 border-amber-400">
              <div className="flex items-center">
                <div className="size-10 dark:bg-amber-100 bg-amber-500 rounded-xl flex items-center justify-center shadow-sm mr-4">
                  <ShieldCheck className="dark:text-amber-400 text-amber-100  size-5" />
                </div>
                <span className="text-sm font-bold text-amber-900 cap">
                  Status Siswa
                </span>
              </div>
              <span className="px-3 py-1 bg-amber-600 text-white text-[10px] font-bold rounded-full uppercase">
                {student?.status}
              </span>
            </div>
          )}

          {student && (
            <div className="md:col-span-2 flex items-center p-4 bg-purple-100 dark:bg-purple-600 rounded-2xl border border-purple-400 hover:border-purple-300 dark:hover:border-purple-300 transition-colors">
              <div className="size-10 dark:bg-purple-100 bg-purple-500 rounded-xl flex items-center justify-center shadow-sm mr-4">
                <IdCard className="dark:text-purple-400 text-purple-100  size-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider dark:text-purple-200 text-purple-800 font-bold">
                  NISN
                </p>
                <p className="text-sm font-semibold dark:text-purple-100 text-purple-600">
                  {student?.nisn}
                </p>
              </div>
            </div>
          )}

          {student && (
            <div className="md:col-span-2 flex items-center p-4 bg-cyan-100 dark:bg-cyan-600 rounded-2xl border border-cyan-400 hover:border-cyan-300 dark:hover:border-cyan-300 transition-colors">
              <div className="size-10 dark:bg-cyan-100 bg-cyan-500 rounded-xl flex items-center justify-center shadow-sm mr-4">
                <IdCard className="dark:text-cyan-400 text-cyan-100  size-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider dark:text-cyan-200 text-cyan-800 font-bold">
                  NIS
                </p>
                <p className="text-sm font-semibold dark:text-cyan-100 text-cyan-600">
                  {student?.nis}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
