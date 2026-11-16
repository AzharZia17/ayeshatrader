import Image from "next/image";
import Link from "next/link";
import { BUSINESS_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={`${BUSINESS_NAME} home`} className={cn("group flex items-center gap-2.5 sm:gap-3.5", className)}>
      <span className={cn("flex shrink-0 items-center overflow-hidden ", inverse && "bg-white px-2")}>
        <Image
          src="/images/logo.png"
          alt=""
          width={900}
          height={320}
          priority
          sizes="140px"
          className={cn("h-8 w-auto sm:h-10 lg:h-12", !inverse && "mix-blend-multiply")}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.0625rem] tracking-[-0.01em] sm:text-xl", inverse ? "text-white" : "text-ink")}>
          Ayesha Traders
        </span>
        <span className={cn("mt-1 text-[0.5625rem] font-semibold tracking-[0.24em] sm:mt-1.5 sm:text-[0.625rem] uppercase", inverse ? "text-white/60" : "text-charcoal-muted")}>
          Wires &amp; Cables
        </span>
      </span>
    </Link>
  );
}
