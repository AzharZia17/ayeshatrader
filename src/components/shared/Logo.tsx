import Image from "next/image";
import Link from "next/link";
import { BUSINESS_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={`${BUSINESS_NAME} home`} className={cn("group flex items-center gap-3", className)}>
      <span className={cn("flex shrink-0 items-center overflow-hidden rounded-md", inverse ? "bg-white px-1.5" : "")}>
        <Image
          src="/images/logo.png"
          alt=""
          width={886}
          height={508}
          priority
          sizes="80px"
          className={cn("h-12 w-auto lg:h-14", !inverse && "mix-blend-multiply")}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[1.0625rem] font-bold tracking-[0.06em] uppercase", inverse ? "text-white" : "text-charcoal")}>
          {BUSINESS_NAME}
        </span>
        <span className={cn("mt-1.5 text-[0.6875rem] tracking-wide", inverse ? "text-white/60" : "text-charcoal-muted")}>
          Wires &amp; Cables Supplier
        </span>
      </span>
    </Link>
  );
}
