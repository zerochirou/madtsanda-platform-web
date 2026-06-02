"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ShinyButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  href?: string;
  target?: string;
  rel?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ShinyButtonProps>(
  ({ className, children, href, target, rel, ...props }, ref) => {
    const classNameCombined = cn(
      "group relative overflow-hidden rounded-xl bg-blue-600 text-white shadow-md transition-all duration-300 hover:bg-blue-500 hover:shadow-lg focus:outline-hidden",
      className
    );

    const innerContent = (
      <>
        <span className="absolute inset-0 block w-[200%] -translate-x-[100%] rotate-12 bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classNameCombined}
          {...(props as React.ComponentPropsWithoutRef<"a">)}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNameCombined}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
