import type { ComponentProps } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function EditorFrame({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
