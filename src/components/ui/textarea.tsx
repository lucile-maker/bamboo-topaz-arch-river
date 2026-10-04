import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors duration-150 placeholder:text-subtle focus:border-forest",
        className,
      )}
      {...props}
    />
  );
}
