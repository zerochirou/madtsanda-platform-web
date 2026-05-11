import { TooltipProvider } from "@/components/ui/tooltip";
import { getUserProfile } from "@/features/dashboard/profile/services";
import { SidebarLayout } from "@/features/dashboard/shared/sidebar-layout";
import { getStudentByToken } from "@/features/dashboard/student/services";
import { getTeacherByToken } from "@/features/dashboard/teacher/services";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, student, teacher] = await Promise.all([
    getUserProfile(),
    getStudentByToken(),
    getTeacherByToken(),
  ]);
  if (!user) {
    redirect("/login");
  }
  return (
    <TooltipProvider>
      <SidebarLayout
        user={user.data}
        student={student?.data ?? null}
        teacher={teacher?.data ?? null}
      >
        {children}
      </SidebarLayout>
    </TooltipProvider>
  );
}
