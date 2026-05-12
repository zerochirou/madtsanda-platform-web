"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GripVertical, Settings2, Trash } from "lucide-react";
import { DeleteNews } from "./delete-news";

export function UpdateDropdown({ id }: { id: string }) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <GripVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            Edit Berita
            <DropdownMenuShortcut>
              <Settings2 />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DeleteNews id={id} />
          {/*<DropdownMenuItem variant="destructive" >
            Hapus Berita
            <DropdownMenuShortcut>
            </DropdownMenuShortcut>
          </DropdownMenuItem>*/}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
