"use client";

import { quickLink } from "@/components/data/quick-link";
import { hasAccess } from "@/lib/access";
import { Role } from "@/types/access";
import { UserDTO } from "@/types/dto/user";
import Link from "next/link";

interface HomeQuickLinkProps {
  user: UserDTO;
}

export function HomeQuickLink({ user }: HomeQuickLinkProps) {
  const userRole: Role = user.role;

  const filteredQuickLink = quickLink
    .filter((item) => hasAccess(userRole, item.role))
    .map((item) => ({
      ...item,
    }));
  return (
    <div className="lg:col-span-2 border-2 p-4 rounded-xl bg-card border-dashed">
      <div className="mb-4 px-6 pt-4">
        <h1 className="text-xl font-semibold">Aplikasi</h1>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {filteredQuickLink.map((i, index) => {
          return (
            <Link href={i.url} key={index}>
              <div className="px-4 flex gap-4 flex-row border-none shadow-none items-center h-24">
                <i.icon className="size-10" />
                <div>
                  <h4 className="font-semibold text-lg -mb-2">{i.title}</h4>
                  <span className="opacity-50 text-sm">{i.description}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
