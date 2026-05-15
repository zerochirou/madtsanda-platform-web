"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MDXProps } from "mdx/types";
import { JSX } from "react";
import { Button } from "../ui/button";

interface MyContentProps {
  mdx: (props: MDXProps) => JSX.Element;
  title: string;
}

export const ProgramSheet = ({ mdx: MdxContent, title }: MyContentProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">Learn more</Button>
      </SheetTrigger>
      <SheetContent className="h-[80vh] overflow-y-auto px-4 py-8">
        <SheetTitle>{title}</SheetTitle>
        <article className="prose dark:prose-invert max-w-none overflow-x-auto">
          <MdxContent />
        </article>
      </SheetContent>
    </Sheet>
  );
};
