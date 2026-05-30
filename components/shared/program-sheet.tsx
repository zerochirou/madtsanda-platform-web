import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MDXProps } from "mdx/types";
import { JSX, ReactNode } from "react";

interface MyContentProps {
  mdx: (props: MDXProps) => JSX.Element;
  title: string;
  children: ReactNode;
}

export const ProgramSheet = ({ mdx: MdxContent, title, children }: MyContentProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
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
