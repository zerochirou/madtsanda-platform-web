"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarAppHeader } from "./sidebar-app-header";
import { SidebarAppFeat } from "./sidebar-app-feat";
import { sidebarItems } from "@/components/data/sidebar-data";

import { SidebarAppProps } from "@/types/components";
export function SidebarApp({ user }: SidebarAppProps) {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarAppHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarAppFeat items={sidebarItems} user={user} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
