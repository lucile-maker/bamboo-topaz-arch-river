import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: PhotoProps) {
  return (
    <figure className={cn("overflow-hidden bg-cream", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
          imgClassName,
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}
