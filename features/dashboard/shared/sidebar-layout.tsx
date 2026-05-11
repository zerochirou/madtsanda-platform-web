import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { StudentDTO } from "@/types/dto/student";
import { UserDTO } from "@/types/dto/user";
import { ReactNode } from "react";
import { SidebarHeader } from "./sidebar-header";
import { SidebarApp } from "./sidebar-app";
import { TeacherDTO } from "@/types/dto/teacher";
import { SidebarLayoutProps } from "@/types/components";

export function SidebarLayout({ user, student, children, teacher }: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarApp user={user} />
      <SidebarInset>
        <SidebarHeader user={user} student={student ?? null} teacher={teacher ?? null}/>
        <div className="bg-accent h-full">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
