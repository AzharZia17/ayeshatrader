import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  ratio?: string;
  className?: string;
}

/** Product photograph on a warm stone panel. Photos have a white studio background, so they are multiplied into the panel. */
export function ProductImage({ src, alt, sizes, priority, ratio = "aspect-[4/5]", className }: ProductImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-gray", ratio, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain mix-blend-multiply transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.05]"
      />
    </div>
  );
}
