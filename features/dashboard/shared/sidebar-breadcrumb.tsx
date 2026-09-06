"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";

export function SidebarBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((path) => path);
  const subSegments = pathSegments[0] === "dashboard" ? pathSegments.slice(1) : pathSegments;
  const isDashboardRoot = subSegments.length === 0;

  return (
    <Breadcrumb className="hidden lg:block">
      <BreadcrumbList className="flex-nowrap whitespace-nowrap">
        <BreadcrumbItem>
          {isDashboardRoot ? (
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          ) : (
            <Link href="/dashboard">Dashboard</Link>
          )}
        </BreadcrumbItem>

        {subSegments.map((segment, index) => {
          const href = `/dashboard/${subSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === subSegments.length - 1;

          const label =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
