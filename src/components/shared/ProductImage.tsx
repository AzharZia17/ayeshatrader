import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Aspect ratio class; product photography is 4:5 portrait by default */
  ratio?: string;
  className?: string;
}

/** Consistent product photograph frame. Photos sit on a white studio background. */
export function ProductImage({ src, alt, sizes, priority, ratio = "aspect-[4/5]", className }: ProductImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-gray", ratio, className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover mix-blend-multiply transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]" />
    </div>
  );
}
