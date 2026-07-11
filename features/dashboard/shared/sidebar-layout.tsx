import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarHeader } from "./sidebar-header";
import { SidebarApp } from "./sidebar-app";
import { SidebarLayoutProps } from "@/types/components";
import { UnderDevelopmentBanner } from "@/components/shared/under-development-banner";

export function SidebarLayout({
  user,
  student,
  children,
  teacher,
}: SidebarLayoutProps) {
  return (
    <>
      <UnderDevelopmentBanner />
      <SidebarProvider>
        <SidebarApp user={user} />
        <SidebarInset className="min-w-0 overflow-x-hidden">
          <SidebarHeader
            user={user}
            student={student ?? null}
            teacher={teacher ?? null}
          />
          <div className="h-full min-w-0 overflow-x-hidden bg-accent">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
