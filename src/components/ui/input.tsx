import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full border border-line bg-paper px-4 text-base text-ink outline-none transition-colors duration-150 placeholder:text-subtle focus:border-forest",
        className,
      )}
      {...props}
    />
  );
}
