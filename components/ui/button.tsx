import Link from "next/link";
import { type ReactNode } from "react";

import { cn } from "@/utils/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-brand-ink text-white shadow-[0_18px_40px_rgba(17,12,12,0.18)] hover:-translate-y-0.5 hover:bg-brand-slate",
        variant === "secondary" &&
          "border border-brand-ink/10 bg-white/85 text-brand-ink hover:-translate-y-0.5 hover:border-brand-rose/60 hover:bg-brand-sand",
        variant === "ghost" &&
          "text-brand-ink hover:-translate-y-0.5 hover:text-brand-slate",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
