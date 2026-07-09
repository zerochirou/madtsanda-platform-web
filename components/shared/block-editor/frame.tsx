import type { ComponentProps } from "react";

export function EditorFrame({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
