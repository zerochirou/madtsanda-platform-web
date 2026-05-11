"use client";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarItem } from "@/types/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDTO } from "@/types/dto/user";
import { Role } from "@/types/access";
import { hasAccess } from "@/lib/access";
import { TeacherDTO } from "@/types/dto/teacher";

interface SidebarAppFeatProps {
  items: SidebarItem[];
  user: UserDTO;
}

export function SidebarAppFeat({ items, user }: SidebarAppFeatProps) {
  const pathname = usePathname();
  const userRole: Role = user.role;

  const filteredSidebar = items
    .filter((item) => hasAccess(userRole, item.minRole))
    .map((item) => ({
      ...item,
      subItems: item.subItems?.filter((sub) =>
        hasAccess(userRole, sub.minRole),
      ),
    }));
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {filteredSidebar.map((item) => (
          <Collapsible key={item.label} asChild defaultOpen={false}>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={item.label}
                isActive={pathname === item.route}
              >
                <Link
                  href={item.route}
                  className="flex flex-row items-center gap-4"
                >
                  <item.icon className="text-emerald-600" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
              {item.subItems?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.subItems?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.label}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === subItem.route}
                          >
                            <Link href={subItem.route}>
                              <subItem.icon className="text-emerald-400" />
                              <span>{subItem.label}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
