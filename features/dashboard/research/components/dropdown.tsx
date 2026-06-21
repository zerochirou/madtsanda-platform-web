"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { GripVertical, Pencil } from "lucide-react";
import { DeleteResearch } from "./delete-research";
import Link from "next/link";

export function DropdownResearch({ id }: { id: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={'xs'}>
          <GripVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/research/edit/${id}`} className="flex flex-row items-center gap-2 cursor-pointer w-full text-left">
              <Pencil className="size-4" />
              Edit Paper
            </Link>
          </DropdownMenuItem>
          <DeleteResearch id={id} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
