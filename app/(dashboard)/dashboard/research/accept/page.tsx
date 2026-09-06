import { getUserProfile } from "@/features/dashboard/profile/services";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getUserProfile();

  if (!user) {
    redirect("/login");
  }

  if (
    user.data.role !== "admin" &&
    user.data.role !== "super_user" &&
    user.data.role !== "teacher"
  ) {
    redirect("/dashboard");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Persetujuan Riset Siswa</h1>
      <p className="text-zinc-500 mt-2">Daftar karya ilmiah yang menunggu review.</p>
    </div>
  );
}